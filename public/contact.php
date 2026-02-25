<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload);
    exit;
}

// Read JSON payload.
$rawInput = file_get_contents('php://input');
if ($rawInput === false || $rawInput === '') {
    respond(400, ['success' => false, 'error' => 'Empty request body.']);
}

$data = json_decode($rawInput, true);
if (!is_array($data)) {
    respond(400, ['success' => false, 'error' => 'Invalid JSON payload.']);
}

// Validate fields.
$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
$token = (string)($data['token'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    respond(422, ['success' => false, 'error' => 'Name, email, and message are required.']);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['success' => false, 'error' => 'Invalid email address.']);
}

if ($token === '') {
    respond(422, ['success' => false, 'error' => 'Missing reCAPTCHA token.']);
}

// Verify reCAPTCHA v3.
$secretKey = getenv('RECAPTCHA_SECRET_KEY');
if (!$secretKey) {
    respond(500, ['success' => false, 'error' => 'Missing reCAPTCHA secret key.']);
}

$verifyPayload = http_build_query([
    'secret' => $secretKey,
    'response' => $token,
]);

$context = stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
        'content' => $verifyPayload,
        'timeout' => 10,
    ],
]);

$verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);
if ($verifyResponse === false) {
    respond(502, ['success' => false, 'error' => 'Failed to verify reCAPTCHA.']);
}

$verifyData = json_decode($verifyResponse, true);
if (!is_array($verifyData) || empty($verifyData['success'])) {
    respond(403, ['success' => false, 'error' => 'reCAPTCHA verification failed.']);
}

// Sanitize for email output.
$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Send email.
$to = 'contact@eviacore.com';
$subject = 'Contact form submission';
$body = "Name: {$safeName}\n";
$body .= "Email: {$safeEmail}\n\n";
$body .= "Message:\n{$safeMessage}\n";

$headers = "From: contact@eviacore.com\r\n";
$headers .= "Reply-To: {$safeEmail}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);
if (!$sent) {
    respond(500, ['success' => false, 'error' => 'Failed to send email.']);
}

respond(200, ['success' => true]);
