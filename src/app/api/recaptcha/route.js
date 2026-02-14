export async function POST(request) {
  const secret = globalThis?.process?.env?.RECAPTCHA_SECRET_KEY
  if (!secret) {
    return Response.json({ success: false, error: 'missing-secret' }, { status: 500 })
  }

  let payload
  try {
    payload = await request.json()
  } catch (_error) {
    return Response.json({ success: false, error: 'invalid-json' }, { status: 400 })
  }

  const { token } = payload || {}
  if (!token) {
    return Response.json({ success: false, error: 'missing-token' }, { status: 400 })
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  })

  try {
    const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
    const data = await verifyResponse.json()
    if (!data.success) {
      const errorCodes = Array.isArray(data['error-codes'])
        ? data['error-codes'].join(',')
        : 'verification-failed'
      return Response.json({ success: false, error: errorCodes }, { status: 400 })
    }
    if (typeof data.score === 'number' && data.score < 0.5) {
      return Response.json({ success: false, error: 'low-score' }, { status: 400 })
    }
    if (data.action && data.action !== 'contact') {
      return Response.json({ success: false, error: 'action-mismatch' }, { status: 400 })
    }
    return Response.json({ success: true })
  } catch (_error) {
    return Response.json({ success: false, error: 'verify-error' }, { status: 500 })
  }
}
