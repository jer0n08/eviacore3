const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      contact: 'Contact',
      cta: 'CREER MON PROJET',
      lang: 'Langue',
    },
    hero: {
      eyebrow: 'Fabricant de cartes électroniques',
      title: 'Votre VIA entre la conception et le PCBA',
      lead:
        "Chaque projet commandé via la plateforme EVIACORE bénéficie d'un accompagnement technique direct, bien au-delà d'une simple prestation d'assemblage.",
      primaryCta: 'CREER MON PROJET',
      secondaryCta: 'Voir nos services',
      stats: [
        { value: '48h', label: 'Devis initial' },
        { value: 'ISO', label: 'Process qualite' },
        { value: '100%', label: 'Traçabilité projet' },
      ],
      panel: {
        title: 'Commande guidée',
        heading: 'Une app claire pour lancer votre carte en quelques étapes.',
        bullets: ['Spécifications techniques', 'Validation rapide', 'Production et contrôle'],
      },
    },
    home: {
      overview: {
        eyebrow: 'Plateforme',
        title: 'Une expérience client qui remplace les allers-retours classiques.',
        lead:
          "Centralisez vos fichiers, vos révisions et vos livraisons dans un espace unique, avec un contrôle précis sur les délais et les quantités.",
        cards: [
          {
            title: 'Prix instantané',
            text: "Ajustez volume et délai pour voir le prix évoluer en temps réel.",
          },
          {
            title: 'Dossiers unifiés',
            text: 'Toutes vos versions, validations et documents techniques au même endroit.',
          },
          {
            title: 'Suivi live',
            text: "Suivez chaque étape, du prototype à la production série.",
          },
        ],
      },
      steps: {
        eyebrow: 'Process',
        title: 'Votre usine connectée en 4 étapes.',
        items: [
          {
            title: 'Déposez vos fichiers',
            text: 'Gerbers, BOM, contraintes et détails critiques en un seul flux.',
          },
          {
            title: 'Paramétrez votre lot',
            text: 'Choisissez quantité, délai, tests et options de qualité.',
          },
          {
            title: 'Validez et commandez',
            text: 'Partagez avec votre équipe, validez et lancez la fabrication.',
          },
          {
            title: 'Suivi temps réel',
            text: 'Production, contrôle et logistique visibles en continu.',
          },
        ],
      },
      support: {
        eyebrow: 'Accompagnement',
        title: 'Un suivi technique concret à chaque étape.',
        lead:
          'Des décisions plus rapides, des risques réduits, et une production qui tient ses promesses.',
        cards: [
          {
            title: 'Analyse avant production',
            text: "Avant production, EVIACORE analyse les dossiers et apporte des retours concrets sur la fabricabilité, le choix des composants et leur aptitude à la brasure. Des conseils sont proposés pour optimiser la carte en vue de la production et de la conformité.",
          },
          {
            title: 'Assemblage CMS automatisé',
            text: "L'assemblage est réalisé sur des lignes CMS entièrement automatisées. Nous utilisons un procédé de dépôt de crème à braser par jetting, ne nécessitant pas l'achat de pochoir ni de frais supplémentaires. Qualité industrielle constante conforme à la norme IPC-A-610.",
          },
          {
            title: 'Délais flexibles',
            text: "Les délais sont courts et maîtrisés, sans contrainte de quantité minimale. Choisissez des fenêtres de production flexibles, adaptez les volumes en fonction de vos besoins, et gardez une visibilité claire sur chaque étape.",
          },
        ],
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Questions fréquentes avant de lancer votre carte.',
        lead:
          "Des réponses claires sur la préparation des fichiers, les délais et la qualité d'assemblage.",
        items: [
          {
            question: 'Quels fichiers devez-vous fournir ?',
            answer:
              'Gerbers ou ODB++, nomenclature (BOM), fichier de placement et contraintes critiques. Nous vérifions la complétude et vous alertons si des éléments manquent.',
          },
          {
            question: 'Quel est le délai moyen pour un prototype ?',
            answer:
              'Un prototype est généralement pris en charge en quelques jours. Le délai exact dépend des composants et du niveau de test demandé.',
          },
          {
            question: 'Comment assurez-vous la qualité d\'assemblage ?',
            answer:
              'Contrôles AOI, process IPC-A-610, et revue technique avant lancement. Chaque lot est suivi et documenté.',
          },
          {
            question: 'Pouvez-vous gérer des petites séries ?',
            answer:
              'Oui. Pas de quantité minimale imposée : vous adaptez volumes et fenêtres de production selon votre planning.',
          },
        ],
      },
    },
    services: {
      eyebrow: 'Services',
      title: 'Une chaîne complète pour vos cartes électroniques.',
      steps: {
        eyebrow: 'Process court',
        title: 'Pilotez la fabrication en 4 étapes.',
        items: [
          {
            title: 'Configurez votre projet en ligne',
            text: 'Plateforme web EMSFACTORY. Chiffrage en ligne.',
          },
          {
            title: 'Validez vos quantités et délais',
            text: 'Connectée aux plus grands fournisseurs. Le meilleur prix en quelques minutes.',
          },
          {
            title: 'Lancez et suivez la fabrication',
            text: 'Commandez en ligne en un clic. Simple et rapide. Notre équipe vous accompagne.',
          },
          {
            title: 'Recevez votre commande en Express',
            text: 'Suivez votre livraison grâce au tracking de votre colis partout dans le monde.',
          },
        ],
      },
      items: [
        {
          title: 'Design & optimisation',
          text: 'Conception de circuits robustes avec simulation et vérification.',
        },
        {
          title: 'Industrialisation',
          text: 'Passage en production avec dossiers techniques et process qualité.',
        },
        {
          title: 'Assemblage & test',
          text: 'Assemblage, tests fonctionnels et traçabilité par lot.',
        },
      ],
      timelineOnline: {
        title: 'Créez votre projet en ligne',
        items: [
          {
            title: 'Spécification PCB',
            text: 'Définissez simplement votre PCB standard ou complexe, dimensions, 1 à 16 couches...',
          },
          {
            title: 'Importation de nomenclature',
            text: "Importez votre fichier, l'algorithme EMSFACTORY se charge de trouver les composants disponibles et au meilleur prix.",
          },
          {
            title: 'Fichiers de fabrication',
            text: "Importez les fichiers nécessaires à la fabrication, Gerbers/ODB++, plan d'implantation, fichier de placement.",
          },
          {
            title: 'Price Optimizer',
            text: "C'est un outil unique. EMSFACTORY analyse le coût de revient en fonction du délai, de la quantité et en tenant compte des meilleures offres de nos fournisseurs.",
          },
          {
            title: 'Commande en ligne',
            text: "Validez et payez votre commande en ligne, éditez un devis PDF, partagez votre panier avec vos collègues.",
          },
          {
            title: 'Suivez la fabrication et la livraison',
            text: "Restez informé de l'avancement de votre commande depuis votre compte web, recevez des notifications.",
          },
        ],
      },
      timelineFabrication: {
        title: 'Fabrication',
        items: [
          {
            title: "Contrôle d'entrée / préparation",
            text: 'Tous les composants sont comptés et reconditionnés pour être posés par une machine de placement CMS.',
          },
          {
            title: 'Dépôt de pâte à braser',
            text: "Nous déposons la pâte à braser à l'aide de nos sérigraphieuses automatiques.",
          },
          {
            title: 'Placement CMS automatique',
            text: 'Nos robots de précision placent vos composants des plus petits (01005) aux plus gros (70x70mm).',
          },
          {
            title: 'Four à refusion',
            text: 'Les cartes traversent le four à convection qui respecte un profil de température JEDEC et est vérifié tous les jours par un profileur.',
          },
          {
            title: 'Inspection AOI',
            text: "La machine d'AOI prend des photos HD de la carte, et vérifie tous les critères d'acceptation d'assemblage CMS.",
          },
          {
            title: 'Inspection rayons X',
            text: 'Nous effectuons les radiographies des assemblages les plus complexes à contrôler (BGA, LGA...).',
          },
          {
            title: 'Insertion traversante',
            text: 'Les broches des composants traversants sont cambrées et coupées puis les composants sont insérés sur le PCB.',
          },
          {
            title: 'Inspection visuelle',
            text: "L'assemblage des composants traversants est contrôlé suivant les critères des normes IPC.",
          },
          {
            title: 'Rapport de fabrication et de conformité',
            text: 'Un rapport est automatiquement généré et téléchargeable sur votre compte web contenant toutes les infos liées à la fabrication.',
          },
          {
            title: 'Emballage et expédition',
            text: 'Votre commande est emballée en sachet antistatique et expédiée par transporteur express.',
          },
        ],
      },
    },
    servicesHero: {
      eyebrow: 'Assemblage électronique',
      title: 'Lancez vos cartes en production avec un pilotage clair.',
      lead:
        "Chiffrez, assemblez et suivez chaque étape de vos cartes électroniques depuis une interface unique, avec une production locale et des délais maîtrisés.",
      tags: ['Délai court', 'Traçabilité totale', 'Support expert'],
      primaryCta: 'Démarrer un projet',
      secondaryCta: 'Voir les services',
      imageAlt: 'Vue du process de fabrication',
      imageCaption: 'Assemblage de cartes électroniques',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Parlons de votre carte électronique.',
      lead:
        "Notre équipe est à votre écoute du lundi au vendredi de 8h30 à 18h00 par e-mail, téléphone ou par live chat. Vous pouvez également nous envoyer un message grâce au formulaire.",
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      form: {
        name: 'Nom complet',
        namePlaceholder: 'Votre nom',
        email: 'Email professionnel',
        emailPlaceholder: 'nom@entreprise.com',
        message: 'Message',
        messagePlaceholder: 'Décrivez votre projet',
        antiSpamLabel: 'Anti-spam',
        antiSpamQuestion: 'Combien font 2 + 3 ?',
        antiSpamPlaceholder: 'Votre réponse',
        antiSpamError: 'Merci de répondre correctement à la question anti-spam.',
        successMessage: 'Votre message a été envoyé, merci.',
        submit: 'Envoyer la demande',
      },
    },
    footer: {
      tagline: 'EVIACORE - Cartes électroniques sur mesure',
      address: '8 Allee Isaac Newton, Martillac',
      cgv: 'CGV',
      legal: 'Mentions légales',
      privacy: 'Données personnelles',
      ctaText: 'Vous avez un projet ? Commencez votre projet ici',
      rights: '© 2026 EVIACORE. Tous droits reserves.',
    },
    cgvPage: {
      eyebrow: 'CGV',
      title: 'Conditions générales de vente',
      lead:
        'Conditions générales de vente et de prestations de services en ligne destinées aux professionnels.',
      sections: [
        {
          title:
            'ARTICLE 1 – Objet, Champ d’application et Opposabilité des Conditions Générales de Vente',
          lines: [
            'Les présentes CGV ont pour finalité de fixer les conditions de vente par lesquelles EVIACORE fournit, principalement à des clients professionnels, les produits et services disponibles sur www.eviacore.com.',
            'Elles sont accessibles en permanence via le lien « conditions de vente » en bas de chaque page et peuvent être transmises sur simple demande. Elles sont donc opposables à tout client.',
            'Toute commande effectuée sur www.eviacore.com vaut acceptation pleine et entière des CGV.',
            'EVIACORE peut modifier les CGV à tout moment. Le client est invité à les consulter avant chaque nouvelle commande. La version applicable est celle en vigueur à la date de la commande ou du devis.',
            'Aucune dérogation n’est opposable à EVIACORE sans accord écrit et signé de sa part.',
          ],
        },
        {
          title: 'ARTICLE 2 – Commande',
          lines: [
            'La commande est passée en ligne à partir des informations disponibles sur le site. Pour la valider, le client doit accepter les présentes CGV en cliquant à l’emplacement prévu.',
            'Le client choisit également l’adresse de livraison et le mode de paiement.',
            'La commande devient ferme après confirmation expresse de EVIACORE, envoyée par e-mail à l’adresse fournie par le client.',
            'EVIACORE ne peut être tenue responsable des conséquences d’informations erronées fournies lors de la commande.',
          ],
        },
        {
          title: 'ARTICLE 3 – Prix',
          lines: [
            'Les prix du site www.eviacore.com sont indiqués en euros.',
            'Ils peuvent évoluer. Le prix applicable est celui affiché au moment de la commande.',
            'Des conditions commerciales spécifiques peuvent être accordées selon l’activité ou les volumes du client.',
            'Les prix indiqués sont nets et comprennent les frais de transport.',
          ],
        },
        {
          title: 'ARTICLE 4 – Facturation et Conditions de paiement',
          lines: [
            'Le règlement s’effectue comptant, en une seule fois, par virement bancaire, carte bancaire ou chèque.',
            'Si le client sollicite des conditions particulières, un délai de paiement peut être convenu, dans le respect des délais maximum prévus par la loi française (loi de modernisation de l’économie).',
            'Le client garantit disposer des autorisations nécessaires pour le moyen de paiement choisi lors de la validation de la commande.',
            'La commande est validée après confirmation de l’accord de paiement par les organismes agréés. En cas de refus, elle est annulée automatiquement.',
            'Le paiement est réputé complet lorsque EVIACORE a reçu l’intégralité des sommes dues.',
            'Aucun escompte n’est accordé en cas de paiement anticipé.',
            'Tout retard annule les remises accordées. En cas de non-paiement à l’échéance, EVIACORE appliquera des pénalités de retard égales à 3% du taux d’intérêt légal, sans mise en demeure préalable.',
            'Le défaut de paiement rend immédiatement exigible l’ensemble des sommes dues. EVIACORE peut compenser les montants dus, même si les conditions de la compensation légale ne sont pas réunies.',
            'EVIACORE peut suspendre les livraisons jusqu’au règlement complet, sans préjudice des dommages et intérêts éventuels.',
          ],
        },
        {
          title: 'ARTICLE 5 – Disponibilité des produits',
          lines: [
            'Les offres sont valables dans la limite des stocks disponibles. Les informations de disponibilité sont indiquées lors de la commande.',
            'Si un produit devient indisponible après commande, le client en est informé par e-mail et le délai est ajusté en conséquence.',
          ],
        },
        {
          title: 'ARTICLE 6 – Réception des commandes',
          lines: [
            'Un accusé de réception est envoyé par e-mail dans le jour ouvrable suivant la commande. Le client est également informé par e-mail de la remise au transporteur. Le délai retenu est celui choisi lors de la commande.',
            'Si l’emballage est abîmé, déchiré ou ouvert à la livraison, le client doit vérifier l’état des articles. En cas d’avarie, il doit refuser le colis et inscrire des réserves sur le bordereau de livraison.',
            'Toute anomalie (avarie, manquant, colis endommagé, produits cassés…) doit être mentionnée par écrit sur le bon de livraison et signée.',
            'Sans réserve lors de la signature, aucune réclamation ne pourra être prise en compte et EVIACORE est dégagée de toute responsabilité, sauf vice caché (voir article 9).',
            'Sauf cas particulier ou indisponibilité, les produits sont livrés en une seule fois.',
          ],
        },
        {
          title: 'ARTICLE 7 – Droit de rétractation et retour (Produits sur mesure)',
          lines: [
            'Le droit de rétractation ne s’applique pas aux biens réalisés sur mesure ou clairement personnalisés.',
          ],
        },
        {
          title: 'ARTICLE 8 – Conditions de livraison',
          lines: [
            'Les délais de livraison ont une valeur contractuelle et le prix est indexé sur le délai choisi.',
            'EVIACORE met en œuvre ses meilleurs efforts pour respecter les délais annoncés.',
            'En cas de retard, plusieurs situations peuvent se présenter :',
            '– Retard imputable au client : adresse erronée, locaux fermés, refus de réception. Le prix demeure inchangé.',
            '– Retard imputable au transporteur : marchandises expédiées 48 heures avant la livraison mais problème d’acheminement. Le prix demeure inchangé.',
            '– Retard imputable à la production : date de départ non respectée. EVIACORE vérifie le nombre de jours de retard et ajuste la facture selon le délai tenu. Le prix ne peut être inférieur au meilleur prix affiché (délai 20 jours ouvrés).',
            'La livraison au client ou à ses représentants entraîne le transfert des risques. Cette clause s’applique à tous les produits livrés.',
          ],
        },
        {
          title: 'ARTICLE 9 – Produits et services',
          lines: [
            'EVIACORE n’ayant pas connaissance de l’usage final de la pièce, sa responsabilité ne peut être engagée pour un éventuel défaut de conseil.',
            'EVIACORE n’est pas responsable des erreurs de conception ou de fabrication des produits fournis ni de l’usage que le client en fait. Elle ne peut être tenue responsable d’un accident résultant d’une manipulation sans précaution.',
            'EVIACORE décline toute responsabilité pour les pertes indirectes ou frais (perte de bénéfices, de ventes ou de clientèle) liés à la vente de pièces sur le site.',
            'EVIACORE ne saurait être tenue responsable des dommages liés à l’utilisation d’Internet (perte de données, intrusion, virus, interruption du service, etc.).',
            'Les photos et illustrations du site sont non contractuelles.',
            'En cas de vice caché sur un produit acheté via www.eviacore.com, EVIACORE choisira entre un avoir d’un montant équivalent au prix payé pour le produit concerné ou son remplacement. Le produit doit être retourné pour traitement.',
            'La responsabilité financière de EVIACORE est plafonnée au prix payé pour le ou les produits défectueux et ne saurait être engagée au-delà, pour tout dommage direct ou indirect.',
            'EVIACORE peut facturer les frais de traitement du retour si la défectuosité n’est pas avérée ou si elle est imputable au client, notamment en cas d’usage anormal.',
          ],
        },
        {
          title: 'ARTICLE 10 – Protection des données',
          lines: [
            'Conformément à la loi 78-17 du 6 janvier 1978, les données nominatives demandées au client sont nécessaires au traitement de la commande et à l’établissement des factures.',
            'Le traitement des informations transmises via le site du vendeur a fait l’objet d’une déclaration auprès de la CNIL.',
            'Le client dispose, selon la réglementation nationale et européenne en vigueur, d’un droit d’accès, de modification, de rectification et d’opposition concernant ses données.',
          ],
        },
        {
          title: 'ARTICLE 11 – Propriété intellectuelle',
          lines: [
            'Le contenu du site est protégé par les législations françaises et internationales en matière de propriété intellectuelle.',
            'Toute reproduction, totale ou partielle, est interdite et peut constituer un acte de contrefaçon.',
          ],
        },
        {
          title: 'ARTICLE 12 – Force majeure',
          lines: [
            'EVIACORE ne peut être tenue responsable d’un retard ou d’un défaut d’exécution dû à un cas de force majeure, notamment catastrophe naturelle, intempérie, incendie, explosion, inondation, grève nationale, accident, émeute ou trouble civil, retard anormal d’un fournisseur, pénurie de produits ou de matières.',
          ],
        },
        {
          title: 'ARTICLE 13 – Responsabilité',
          lines: [
            'La responsabilité pécuniaire de EVIACORE, pour une commande donnée, est limitée au montant effectivement encaissé pour cette commande.',
            'Si la responsabilité ne peut être rattachée à une commande précise, elle est plafonnée au montant encaissé par EVIACORE au cours des 12 (douze) derniers mois du contrat de vente.',
          ],
        },
        {
          title: 'ARTICLE 14 – Litiges',
          lines: [
            'Tout litige relatif au présent contrat (validité, interprétation, exécution, résiliation, conséquences) relève des juridictions compétentes de droit commun.',
            'En cas de litige entre commerçants, les tribunaux de Saverne sont compétents.',
          ],
        },
      ],
    },
    privacyPage: {
      eyebrow: 'Données personnelles',
      title: 'Politique de confidentialité',
      lead: 'Politique de confidentialité et protection des données personnelles.',
      sections: [
        {
          title: 'Consentement et collecte',
          lines: [
            "Lors de l'utilisation du site, des informations techniques non personnelles peuvent être collectées automatiquement (adresse IP, site de provenance, durée de visite, type de navigateur, langue).",
            'Nous pouvons aussi analyser les parcours de navigation (pages consultées, actions, liens internes).',
            'Les données personnelles ne sont collectées qu’avec votre consentement.',
            'Elles peuvent inclure : identifiants de compte (mot de passe, email, téléphone) et informations de commande (nom, prénom, téléphone).',
            'Nous ne collectons pas de données sensibles (génétiques, biométriques, origine ethnique, opinions politiques, croyances, santé, vie intime).',
            'Vous pouvez refuser de communiquer vos données ; certaines fonctionnalités peuvent alors être limitées.',
          ],
        },
        {
          title: 'Utilisation des données',
          lines: [
            '- Création, gestion et maintenance du compte.',
            '- Traitement des demandes et opérations effectuées sur le site.',
            '- Support client par téléphone ou email.',
            '- Analyses statistiques pour améliorer services, produits ou technologies.',
            '- Personnalisation de contenu selon localisation, préférences et langue.',
            '- Communication sur les transactions et notifications liées aux services.',
            'EVIACORE demandera votre consentement pour tout usage non prévu ici.',
            'Nous ne demandons pas de données sur des tiers, sauf partage de conceptions.',
            'Les messages liés aux transactions sont nécessaires ; pour ne plus les recevoir, vous pouvez désactiver votre compte.',
          ],
        },
        {
          title: 'Transferts et divulgation',
          lines: [
            'Les données peuvent être transférées hors du pays, avec des protections appropriées.',
            'Aucune donnée personnelle n’est vendue, cédée ou échangée à des tiers.',
            'Des prestataires peuvent traiter des données pour notre compte (paiement, stockage, support) et sont tenus aux mêmes exigences de protection.',
            'Les données peuvent être transmises en cas d’opération de fusion, acquisition ou cession.',
            'Des divulgations peuvent intervenir si la loi l’exige ou pour protéger nos droits.',
          ],
        },
        {
          title: 'Accès, conservation et suppression',
          lines: [
            "Vous pouvez consulter et modifier vos informations via la rubrique « Mon compte » sur https://app.eviacore.com.",
            'Vous pouvez demander une copie des données par email à contact@eviacore.com ; réponse dans un délai raisonnable (max 72h).',
            'Les données sont conservées tant que le compte est actif ou nécessaire pour fournir les services.',
            'Pour supprimer le compte ou demander l’effacement, contactez-nous ; certaines données peuvent être conservées pour obligations légales ou litiges.',
          ],
        },
        {
          title: 'Vos droits (RGPD)',
          lines: [
            '- Droit d’accès (art. 15 RGPD).',
            '- Droit de rectification (art. 16).',
            '- Droit d’effacement (art. 17), sauf exceptions légales.',
            '- Droit à la limitation (art. 18).',
            '- Droit d’opposition (art. 21).',
            '- Droit à la portabilité (art. 20).',
            '- Droit d’introduire une réclamation auprès de la CNIL (art. 77).',
          ],
        },
        {
          title: 'Cookies et technologies',
          lines: [
            'EVIACORE et ses partenaires utilisent des cookies ou technologies similaires pour analyser les tendances et améliorer le site.',
            'Vous pouvez contrôler les cookies via votre navigateur ; le blocage peut limiter certaines fonctions interactives.',
            'Les adresses email recueillies lors du partage de fichiers ne sont pas conservées.',
            'Un cookie est un petit fichier qui enregistre des informations de navigation et facilite les visites ultérieures.',
          ],
        },
        {
          title: 'Sécurité',
          lines: [
            'Accès limité aux employés habilités.',
            'Accords de confidentialité avec employés et partenaires.',
            'Chiffrement SSL pour les données de paiement via nos prestataires.',
          ],
        },
        {
          title: 'Demande de suppression',
          lines: [
            'Pour toute demande de suppression de données personnelles, contactez-nous à contact@eviacore.com.',
          ],
        },
      ],
    },
    legalPage: {
      eyebrow: 'Mentions légales',
      title: 'Mentions légales',
      lead: 'Informations légales relatives au site EVIACORE.',
      sections: [
        {
          title: 'Coordonnées de la société',
          lines: [
            'EVIACORE • 8 Allee Isaac Newton • 33650 Martillac (France)',
            'Tél. +33 1 23 45 67 89',
            'Société par actions simplifiées, immatriculée au RCS de Saverne',
            'Capital social : 50 000 €',
            'Numéro de TVA intracommunautaire : [Numéro de TVA]',
            'E-mail : contact@eviacore.com',
          ],
        },
        {
          title: 'Conception & hébergement du site',
          lines: [
            'Création : EVIACORE',
            'Hébergement : Microsoft Azure',
            'Directeur de la publication : [Nom du directeur de publication]',
          ],
        },
        {
          title: 'Article 1',
          lines: [
            'Les utilisateurs doivent respecter la loi Informatique et Libertés. Toute violation peut faire l’objet de sanctions pénales.',
            'Ils s’abstiennent notamment de toute collecte ou utilisation détournée de données personnelles, et de tout acte portant atteinte à la vie privée ou à la réputation des personnes.',
          ],
        },
        {
          title: 'Article 2',
          lines: [
            'EVIACORE ne peut être tenue responsable des dommages directs ou indirects liés à l’utilisation du site et/ou des informations qu’il contient, ni des interruptions d’accès aux services de www.eviacore.com.',
            'Le site www.eviacore.com peut proposer des liens vers d’autres sites. Ces liens sont fournis avec l’autorisation de leurs titulaires, qui restent seuls responsables de leur contenu.',
            'Tout lien vers www.eviacore.com depuis un autre site nécessite une autorisation écrite préalable de EVIACORE.',
            'L’utilisateur est informé des risques propres à Internet (virus, bugs, ralentissements, etc.) et doit prendre les précautions nécessaires avant de naviguer.',
          ],
        },
        {
          title: 'Article 3',
          lines: [
            'Les utilisateurs disposent d’un droit d’accès, de modification, de rectification et de suppression de leurs données, conformément aux articles 39 et 40 de la loi du 6 janvier 1978 modifiée par la loi du 6 août 2004.',
            'Pour exercer ces droits, contactez EVIACORE par e-mail à contact@eviacore.com.',
          ],
        },
        {
          title: 'Article 4',
          lines: [
            'Le contenu du site est protégé par la législation française et internationale sur le droit d’auteur et la propriété intellectuelle.',
            'Toute reproduction, utilisation ou diffusion, totale ou partielle, sans autorisation préalable est interdite et peut constituer une contrefaçon.',
            'EVIACORE se réserve l’ensemble des droits patrimoniaux et moraux liés aux documents du site, y compris les documents téléchargeables et les éléments iconographiques ou photographiques.',
          ],
        },
        {
          title: 'Article 5',
          lines: [
            'Le site www.eviacore.com utilise des cookies.',
            'Un cookie ne permet pas de vous identifier ; il enregistre des informations de navigation (pages consultées, données saisies, etc.) afin d’améliorer l’expérience, notamment pour restaurer des projets en cours.',
            'Vous pouvez refuser l’enregistrement de cookies en configurant votre navigateur.',
          ],
        },
        {
          title: 'Article 6',
          lines: [
            'Le site www.eviacore.com a fait l’objet d’une déclaration auprès de la Commission Nationale de l’Informatique et des Libertés (CNIL).',
          ],
        },
      ],
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      contact: 'Contact',
      cta: 'START MY PROJECT',
      lang: 'Language',
    },
    hero: {
      eyebrow: 'Electronic board manufacturer',
      title: 'Your project from VIA to PCB',
      lead:
        'Every project placed through the EVIACORE platform comes with hands-on technical support, beyond a simple assembly service.',
      primaryCta: 'START MY PROJECT',
      secondaryCta: 'Explore services',
      stats: [
        { value: '48h', label: 'Initial quote' },
        { value: 'ISO', label: 'Quality process' },
        { value: '100%', label: 'Project traceability' },
      ],
      panel: {
        title: 'Guided order',
        heading: 'A clear app to launch your board in a few steps.',
        bullets: ['Technical specs', 'Fast validation', 'Production and control'],
      },
    },
    home: {
      overview: {
        eyebrow: 'Platform',
        title: 'A client experience that replaces the usual back-and-forth.',
        lead:
          'Centralize files, revisions, and deliveries in one space with precise control over lead times and quantities.',
        cards: [
          {
            title: 'Instant pricing',
            text: 'Adjust volume and lead time to see pricing update in real time.',
          },
          {
            title: 'Unified records',
            text: 'All versions, approvals, and technical documents in one place.',
          },
          {
            title: 'Live tracking',
            text: 'Follow every stage from prototype to production runs.',
          },
        ],
      },
      steps: {
        eyebrow: 'Process',
        title: 'Your connected factory in 4 steps.',
        items: [
          {
            title: 'Upload your files',
            text: 'Gerbers, BOM, constraints, and critical details in one flow.',
          },
          {
            title: 'Configure the batch',
            text: 'Choose quantity, lead time, testing, and quality options.',
          },
          {
            title: 'Validate and order',
            text: 'Share with your team, validate, and launch production.',
          },
          {
            title: 'Real-time tracking',
            text: 'Production, control, and logistics visible continuously.',
          },
        ],
      },
      support: {
        eyebrow: 'Support',
        title: 'Hands-on technical follow-up at every stage.',
        lead: 'Faster decisions, lower risk, and production that keeps its promises.',
        cards: [
          {
            title: 'Pre-production analysis',
            text: 'Before production, EVIACORE reviews your files and provides concrete feedback on manufacturability, component selection, and solderability, plus optimization advice for compliance.',
          },
          {
            title: 'Automated SMT assembly',
            text: 'Assembly runs on fully automated SMT lines. We use jetting solder paste deposition without stencils or extra fees, delivering IPC-A-610 compliant quality.',
          },
          {
            title: 'Flexible lead times',
            text: 'Short, controlled lead times with no minimum quantities. Choose flexible production windows, adapt volumes, and keep clear visibility on every step.',
          },
        ],
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Common questions before launching your board.',
        lead:
          'Clear answers on file preparation, lead times, and assembly quality.',
        items: [
          {
            question: 'Which files do you need?',
            answer:
              'Gerbers or ODB++, BOM, pick-and-place file, and critical constraints. We check completeness and flag anything missing.',
          },
          {
            question: 'What is the typical prototype lead time?',
            answer:
              'Prototypes are usually handled within a few days. The exact timeline depends on parts availability and requested tests.',
          },
          {
            question: 'How do you ensure assembly quality?',
            answer:
              'AOI checks, IPC-A-610 compliant processes, and a technical review before launch. Each batch is tracked and documented.',
          },
          {
            question: 'Can you handle small batches?',
            answer:
              'Yes. No minimum quantity required, so you can adapt volumes and windows to your schedule.',
          },
        ],
      },
    },
    services: {
      eyebrow: 'Services',
      title: 'A complete chain for your electronic boards.',
      steps: {
        eyebrow: 'Short process',
        title: 'Drive production in 4 steps.',
        items: [
          {
            title: 'Configure your project online',
            text: 'EMSFACTORY web platform. Online quoting.',
          },
          {
            title: 'Validate quantities and lead times',
            text: 'Connected to top suppliers. Best pricing in minutes.',
          },
          {
            title: 'Launch and track manufacturing',
            text: 'Order online in one click. Simple and fast, with expert support.',
          },
          {
            title: 'Receive your order in Express',
            text: 'Track delivery worldwide with shipment tracking.',
          },
        ],
      },
      items: [
        {
          title: 'Design & optimization',
          text: 'Robust circuit design with simulation and verification.',
        },
        {
          title: 'Industrialization',
          text: 'Production-ready files with quality processes and checks.',
        },
        {
          title: 'Assembly & testing',
          text: 'Assembly, functional testing, and batch traceability.',
        },
      ],
      timelineOnline: {
        title: 'Create your project online',
        items: [
          {
            title: 'PCB specification',
            text: 'Define your standard or complex PCB, dimensions, 1 to 16 layers...',
          },
          {
            title: 'BOM import',
            text: 'Import your file and the EMSFACTORY algorithm finds available components at the best price.',
          },
          {
            title: 'Manufacturing files',
            text: 'Upload the required files: Gerbers/ODB++, placement plan, and pick-and-place file.',
          },
          {
            title: 'Price Optimizer',
            text: 'A unique tool that analyzes cost based on lead time, quantity, and the best supplier offers.',
          },
          {
            title: 'Online order',
            text: 'Validate and pay online, generate a PDF quote, and share your cart with colleagues.',
          },
          {
            title: 'Track manufacturing & delivery',
            text: 'Follow production progress from your account and receive notifications.',
          },
        ],
      },
      timelineFabrication: {
        title: 'Manufacturing',
        items: [
          {
            title: 'Incoming inspection & prep',
            text: 'All components are counted and reconditioned for SMT placement.',
          },
          {
            title: 'Solder paste printing',
            text: 'We deposit solder paste using automated screen printers.',
          },
          {
            title: 'Automated SMT placement',
            text: 'Precision robots place components from 01005 up to 70x70mm.',
          },
          {
            title: 'Reflow oven',
            text: 'Boards pass through a convection oven following a JEDEC temperature profile, verified daily with a profiler.',
          },
          {
            title: 'AOI inspection',
            text: 'AOI machines take HD photos and check SMT acceptance criteria.',
          },
          {
            title: 'X-ray inspection',
            text: 'We perform radiography for complex assemblies (BGA, LGA...).',
          },
          {
            title: 'Through-hole insertion',
            text: 'Through-hole leads are formed, cut, and inserted on the PCB.',
          },
          {
            title: 'Visual inspection',
            text: 'Through-hole assemblies are inspected to IPC standards.',
          },
          {
            title: 'Manufacturing & compliance report',
            text: 'A report is automatically generated and downloadable from your web account with all production details.',
          },
          {
            title: 'Packaging & shipping',
            text: 'Your order is packed in anti-static bags and shipped by express carrier.',
          },
        ],
      },
    },
    servicesHero: {
      eyebrow: 'Electronic assembly',
      title: 'Launch production with clear, guided control.',
      lead:
        'Quote, assemble, and track every step of your electronic boards from one interface, with local production and reliable lead times.',
      tags: ['Short lead time', 'Full traceability', 'Expert support'],
      primaryCta: 'Start a project',
      secondaryCta: 'View services',
      imageAlt: 'Manufacturing process overview',
      imageCaption: 'Electronic board assembly',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let us discuss your electronic board.',
      lead: 'Share the main requirements and we will get back quickly with a plan.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      form: {
        name: 'Full name',
        namePlaceholder: 'Your name',
        email: 'Work email',
        emailPlaceholder: 'name@company.com',
        message: 'Message',
        messagePlaceholder: 'Describe your project',
        antiSpamLabel: 'Anti-spam',
        antiSpamQuestion: 'What is 2 + 3?',
        antiSpamPlaceholder: 'Your answer',
        antiSpamError: 'Please answer the anti-spam question correctly.',
        successMessage: 'Your message has been sent, thank you.',
        submit: 'Send request',
      },
    },
    footer: {
      tagline: 'EVIACORE - Custom electronic boards',
      address: '8 Allee Isaac Newton, Martillac',
      cgv: 'Terms of Sale',
      legal: 'Legal Notice',
      privacy: 'Privacy policy',
      ctaText: 'Have a project? Start your project here',
      rights: '© 2026 EVIACORE. All rights reserved.',
    },
    cgvPage: {
      eyebrow: 'Terms of Sale',
      title: 'Terms and Conditions of Sale',
      lead:
        'Terms and conditions of sale and online services intended for professionals.',
      sections: [
        {
          title:
            'ARTICLE 1 – Purpose, Scope and Enforceability of the Terms and Conditions of Sale',
          lines: [
            'These Terms and Conditions of Sale set out the conditions under which EVIACORE supplies, primarily to professional clients, the products and services available on www.eviacore.com.',
            'They are permanently accessible via the “conditions de vente” link at the bottom of each page and may be provided upon request. They are therefore enforceable against any client.',
            'Any order placed on www.eviacore.com constitutes full acceptance of these Terms.',
            'EVIACORE may amend these Terms at any time. Clients are invited to review them before placing any new order. The applicable version is the one in force on the date of the order or quotation.',
            'No deviation from these Terms is enforceable against EVIACORE unless accepted and formalized in writing and signed by EVIACORE.',
          ],
        },
        {
          title: 'ARTICLE 2 – Orders',
          lines: [
            'Orders are placed online using the information provided on the website. To validate an order, the client must accept these Terms by clicking in the indicated area.',
            'The client must also select the delivery address and payment method.',
            'An order becomes final only after express confirmation by EVIACORE sent by email to the address provided by the client.',
            'EVIACORE cannot be held liable for consequences arising from incorrect information provided by the client when placing the order.',
          ],
        },
        {
          title: 'ARTICLE 3 – Prices',
          lines: [
            'Prices shown on www.eviacore.com are expressed in euros.',
            'Prices may change. The price applicable to the client is the one displayed at the time the order is placed.',
            'The client may benefit from specific commercial terms depending on its activity or order volumes.',
            'Displayed prices are net and include shipping costs.',
          ],
        },
        {
          title: 'ARTICLE 4 – Invoicing and Payment Terms',
          lines: [
            'Payments are made in full, in a single installment, by bank transfer, credit card, or check.',
            'If the client requests special terms, a payment deadline may be agreed, provided it respects the maximum deadlines set by French law (Loi de modernisation de l’économie).',
            'The client guarantees that it has the necessary authorizations to use the chosen payment method when validating the order.',
            'The order is considered valid after confirmation of payment approval by the authorized bodies. If payment is refused, the order is automatically cancelled.',
            'Payment is deemed complete once EVIACORE has received the full amount due from the client.',
            'Early payment does not entitle the client to any discount or advantage of any kind.',
            'Failure to pay an installment on time cancels any discounts or benefits granted to the client. In case of non-payment at maturity, EVIACORE will apply late penalties equal to 3% of the legal interest rate, without prior notice.',
            'Non-payment of an invoice at maturity also makes all sums due immediately payable. EVIACORE may set off such amounts even if statutory set-off conditions are not met.',
            'EVIACORE also reserves the right to suspend any delivery until full payment of amounts due, without prejudice to any damages it may claim.',
          ],
        },
        {
          title: 'ARTICLE 5 – Product Availability',
          lines: [
            'Offers on the site are valid while stocks last. Availability information is provided at the time of ordering.',
            'If a product becomes unavailable after the order is placed, the buyer will be informed by email and the delivery time will be adjusted accordingly.',
          ],
        },
        {
          title: 'ARTICLE 6 – Receipt of Orders',
          lines: [
            'The client will receive an order acknowledgement by email on the next business day after placing the order. The client will be informed by email when the order is handed over to the carrier. The delivery time is the one selected at checkout.',
            'If the original packaging is damaged, torn, or opened upon delivery, the client must check the condition of the items. If they are damaged, the client must refuse the parcel and note a reservation on the delivery slip.',
            'Any anomaly (damage, missing product, damaged parcel, broken products, etc.) must be written on the delivery slip as handwritten reservations and signed by the client.',
            'Any claim made after signing the delivery slip without reservations will not be taken into account and releases EVIACORE from any liability toward the client (except for hidden defects – see Article 9).',
            'Unless otherwise specified or if one or more products are unavailable, ordered products will be delivered in a single shipment.',
          ],
        },
        {
          title: 'ARTICLE 7 – Right of Withdrawal and Returns (Custom Products)',
          lines: [
            'The right of withdrawal does not apply to contracts for the supply of goods made to the consumer’s specifications or clearly personalized.',
          ],
        },
        {
          title: 'ARTICLE 8 – Delivery Conditions',
          lines: [
            'Delivery times are contractual. The price is indexed to the chosen delivery time.',
            'EVIACORE makes its best efforts to deliver the ordered products within the indicated timeframes.',
            'However, in case of delivery delay, several situations may arise:',
            '– Delay caused by the client: incorrect delivery address, recipient’s premises closed, refusal to receive goods. The price remains unchanged.',
            '– Delay caused by the carrier: goods dispatched 48 hours before delivery but with a routing issue. The price remains unchanged.',
            '– Delay caused by a production issue: dispatch date not met. EVIACORE verifies the number of days late and adjusts the invoice based on the actual timeframe. In no case may the price be lower than the best displayed price (20 business days lead time).',
            'Delivery of products to the client or its representatives transfers risks to the client. This clause applies to all delivered products.',
          ],
        },
        {
          title: 'ARTICLE 9 – Products and Services',
          lines: [
            'EVIACORE does not know the intended use of the manufactured part and therefore cannot be held liable for any lack of advice.',
            'EVIACORE disclaims any responsibility for design or manufacturing errors in the supplied products and for the use to which the client puts them. EVIACORE cannot be held liable in case of accident for the client and/or third parties resulting from careless handling of delivered products.',
            'EVIACORE disclaims any liability for indirect losses or expenses (including loss of profits, sales, or customers) resulting from an issue related to the sale of parts on its site.',
            'EVIACORE cannot be held liable for damage resulting from use of the Internet network, such as data loss, intrusion, viruses, service interruptions, or other involuntary issues.',
            'Photos and illustrations shown on the site are non-contractual.',
            'Products purchased via www.eviacore.com that reveal a hidden defect will, at EVIACORE’s choice, be subject to a credit note equal to the amount paid for the defective product or a replacement. To benefit from such credit or replacement, the client must first return the product.',
            'EVIACORE’s financial liability may not exceed the price paid by the client for the defective product(s) and cannot be extended beyond that amount for any direct or indirect damage that the defect may have caused.',
            'EVIACORE reserves the right to charge the costs related to processing the return of any product for which the defect is not proven or is attributable to the client, notably due to abnormal use.',
          ],
        },
        {
          title: 'ARTICLE 10 – Data Protection',
          lines: [
            'In accordance with Law 78-17 of 6 January 1978, personal data requested from the buyer is necessary to process the order and issue invoices in particular.',
            'The processing of information communicated through the seller’s website has been declared to the CNIL.',
            'The buyer has, in accordance with applicable national and European regulations, a right of access, modification, rectification, and opposition regarding information concerning them.',
          ],
        },
        {
          title: 'ARTICLE 11 – Intellectual Property',
          lines: [
            'The content of the site is protected by French and international laws relating to intellectual property.',
            'Any total or partial reproduction of this content is strictly prohibited and may constitute infringement.',
          ],
        },
        {
          title: 'ARTICLE 12 – Force Majeure',
          lines: [
            'EVIACORE is not liable for delay or non-performance of its obligations in cases of force majeure, in particular natural disasters, severe weather, fire, explosion, flood, nationwide strike, accident, riot or civil disturbance, abnormal delay by a supplier, or shortage of products and materials.',
          ],
        },
        {
          title: 'ARTICLE 13 – Liability',
          lines: [
            'EVIACORE’s financial liability for a given order is capped at the amount actually received by EVIACORE for that order.',
            'Where EVIACORE’s liability is not linked to identified order(s), its financial liability may not exceed the amount actually received by EVIACORE during the last 12 (twelve) months of the sales contract.',
          ],
        },
        {
          title: 'ARTICLE 14 – Disputes',
          lines: [
            'All disputes to which this contract may give rise, concerning its validity, interpretation, performance, termination, consequences, and subsequent matters, shall be submitted to the competent courts under common law.',
            'In the event of a dispute between merchants, the courts of Saverne shall have jurisdiction.',
          ],
        },
      ],
    },
    privacyPage: {
      eyebrow: 'Privacy',
      title: 'Privacy Policy',
      lead: 'Privacy policy and protection of personal data.',
      sections: [
        {
          title: 'Consent and collection',
          lines: [
            'When using the site, non-personal technical information may be collected automatically (IP address, referring site, visit duration, browser type, language).',
            'We may also analyze browsing paths (pages visited, actions, internal links).',
            'Personal data is collected only with your consent.',
            'It may include: account identifiers (password, email, phone) and order information (first name, last name, phone).',
            'We do not collect sensitive data (genetic, biometric, ethnic origin, political opinions, beliefs, health, intimate life).',
            'You may refuse to provide data; some features may then be limited.',
          ],
        },
        {
          title: 'Use of data',
          lines: [
            '- Creating, managing, and maintaining accounts.',
            '- Processing requests and operations performed on the site.',
            '- Customer support by phone or email.',
            '- Statistical analysis to improve services, products, or technologies.',
            '- Content personalization based on location, preferences, and language.',
            '- Communication about transactions and service-related notifications.',
            'EVIACORE will request your consent for any use not described here.',
            'We do not request data about third parties, except when sharing designs.',
            'Transaction-related messages are necessary; to stop receiving them, you can deactivate your account.',
          ],
        },
        {
          title: 'Transfers and disclosure',
          lines: [
            'Data may be transferred outside your country with appropriate safeguards.',
            'No personal data is sold, assigned, or exchanged with third parties.',
            'Service providers may process data on our behalf (payments, storage, support) and are held to equivalent protection standards.',
            'Data may be transferred in the event of a merger, acquisition, or sale.',
            'Disclosures may occur if required by law or to protect our rights.',
          ],
        },
        {
          title: 'Access, retention, and deletion',
          lines: [
            'You can view and update your information in the “My account” section at https://app.eviacore.com.',
            'You can request a copy of your data by emailing contact@eviacore.com; response within a reasonable time (max 72 hours).',
            'Data is kept as long as your account is active or as needed to provide services.',
            'To delete your account or request erasure, contact us; some data may be retained for legal obligations or disputes.',
          ],
        },
        {
          title: 'Your rights (GDPR)',
          lines: [
            '- Right of access (Art. 15 GDPR).',
            '- Right to rectification (Art. 16).',
            '- Right to erasure (Art. 17), subject to legal exceptions.',
            '- Right to restriction (Art. 18).',
            '- Right to object (Art. 21).',
            '- Right to data portability (Art. 20).',
            '- Right to lodge a complaint with the CNIL (Art. 77).',
          ],
        },
        {
          title: 'Cookies and technologies',
          lines: [
            'EVIACORE and its partners use cookies or similar technologies to analyze trends and improve the site.',
            'You can control cookies via your browser; blocking them may limit certain interactive features.',
            'Email addresses collected for file sharing are not retained.',
            'A cookie is a small file that stores browsing information to facilitate future visits.',
          ],
        },
        {
          title: 'Security',
          lines: [
            'Access limited to authorized employees.',
            'Confidentiality agreements with employees and partners.',
            'SSL encryption for payment data via our service providers.',
          ],
        },
        {
          title: 'Deletion requests',
          lines: [
            'For any request to delete personal data, contact us at contact@eviacore.com.',
          ],
        },
      ],
    },
    legalPage: {
      eyebrow: 'Legal Notice',
      title: 'Legal Notice',
      lead: 'Legal information relating to the EVIACORE website.',
      sections: [
        {
          title: 'Company details',
          lines: [
            'EVIACORE • 8 Allee Isaac Newton • 33650 Martillac (France)',
            'Phone: +33 1 23 45 67 89',
            'Société par actions simplifiées, registered with the Saverne Trade and Companies Register',
            'Share capital: €50,000',
            'VAT number: [VAT number]',
            'Email: contact@eviacore.com',
          ],
        },
        {
          title: 'Site design & hosting',
          lines: [
            'Design: EVIACORE',
            'Hosting: Microsoft Azure',
            'Publishing director: [Publishing director name]',
          ],
        },
        {
          title: 'Article 1',
          lines: [
            'Users must comply with the French Data Protection Act (Informatique et Libertés). Any violation may result in criminal penalties.',
            'In particular, they must refrain from collecting or misusing personal data and from any act that could infringe privacy or harm a person’s reputation.',
          ],
        },
        {
          title: 'Article 2',
          lines: [
            'EVIACORE cannot be held liable for any direct or indirect damage arising from the use of the website and/or the information it contains, nor for interruptions to access the services of www.eviacore.com.',
            'The website www.eviacore.com may provide links to other sites. These links are provided with the authorization of their owners, who remain solely responsible for their content.',
            'Any link to www.eviacore.com from another website requires prior written authorization from EVIACORE.',
            'Users are informed of the risks inherent to Internet use (viruses, bugs, slowdowns, etc.) and should take the necessary precautions before browsing.',
          ],
        },
        {
          title: 'Article 3',
          lines: [
            'Users have the right to access, modify, rectify, and delete their data in accordance with Articles 39 and 40 of the French law of 6 January 1978, as amended by the law of 6 August 2004.',
            'To exercise these rights, contact EVIACORE at contact@eviacore.com.',
          ],
        },
        {
          title: 'Article 4',
          lines: [
            'The content of this website is protected by French and international copyright and intellectual property laws.',
            'Any reproduction, use, or distribution, in whole or in part, without prior authorization is prohibited and may constitute infringement.',
            'EVIACORE reserves all economic and moral rights associated with the site’s documents, including downloadable materials and iconographic or photographic elements.',
          ],
        },
        {
          title: 'Article 5',
          lines: [
            'The website www.eviacore.com uses cookies.',
            'A cookie does not identify you personally; it records browsing information (pages visited, data entered, etc.) to improve the experience, including restoring projects in progress.',
            'You can refuse cookies by adjusting your browser settings.',
          ],
        },
        {
          title: 'Article 6',
          lines: [
            'The website www.eviacore.com has been declared to the French Data Protection Authority (CNIL).',
          ],
        },
      ],
    },
  },
}

export default translations
