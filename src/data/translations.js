const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      contact: 'Contact',
      cta: 'MON ESPACE',
      lang: 'Langue',
    },
    hero: {
      eyebrow: 'Fabricant de cartes électroniques',
      title: 'Votre VIA entre la conception et le PCBA',
      lead:
        "Chaque projet commandé via la plateforme EVIACORE™ bénéficie d'un accompagnement technique direct, bien au-delà d'une simple prestation d'assemblage.",
      primaryCta: 'ACCEDER A MON ESPACE',
      secondaryCta: 'Voir nos services',

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
            text: "Avant production, EVIACORE™ analyse les dossiers et apporte des retours concrets sur la fabricabilité, le choix des composants et leur aptitude à la brasure. Des conseils sont proposés pour optimiser la carte en vue de la production et de la conformité.",
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
              'IPC-A-610, et revue technique avant lancement. Chaque lot est suivi et documenté.',
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
            text: 'Plateforme web EVIACORE™. Chiffrage en ligne.',
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
            text: "Importez votre fichier, l'algorithme EVIACORE™ se charge de trouver les composants disponibles et au meilleur prix.",
          },
          {
            title: 'Fichiers de fabrication',
            text: "Importez les fichiers nécessaires à la fabrication, Gerbers/ODB++, plan d'implantation, fichier de placement.",
          },
          {
            title: 'Price Optimizer',
            text: "C'est un outil unique. EVIACORE™ analyse le coût de revient en fonction du délai, de la quantité et en tenant compte des meilleures offres de nos fournisseurs.",
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
            text: "Nous déposons la pâte à braser à l'aide de notre jetting, nous n'utilisons pas de pochoirs.",
          },
          {
            title: 'Placement CMS',
            text: "Placement de vos composants sur ligne automatisée.",
          },
          {
            title: 'Four à refusion',
            text: 'Four à phase vapeur qui respecte un profil de température JEDEC, vérifié tous les jours par un profileur.',
          },

          {
            title: 'Inspection rayons X',
            text: "Nous effectuons les radiographies nous même, en se déplaçant chez un prestataire dans l'attente de reçevoir notre RX.",
          },
          {
            title: 'Insertion traversante',
            text: 'Les broches des composants traversants sont préformées et sectionnées.',
          },
          {
            title: 'Inspection visuelle',
            text: "L'assemblage est contrôlé suivant les critères des normes IPC.",
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
        recaptchaLabel: 'Verification anti-spam',
        recaptchaError: 'Merci de valider le recaptcha pour envoyer le formulaire.',
        recaptchaMissing: 'Recaptcha non configure. Ajoutez la cle site.',
        successMessage: 'Votre message a été envoyé, merci.',
        submit: 'Envoyer la demande',
      },
    },
    footer: {
      tagline: '',
      address: '',
      cgv: 'CGV',
      legal: 'Mentions légales',
      privacy: 'Données personnelles',
      ctaText: 'Vous avez un besoin de PCBA ? Connectez-vous ici.',
      rights:
        'EVIACORE™\n© 2026 – Tous droits réservés\n8 Allée Isaac Newton – 33650 Martillac\nSAS au capital de 30 000 € – RCS Bordeaux 994 666 436',
    },
    cgvPage: {
      eyebrow: 'CGV',
      title: 'CONDITIONS GÉNÉRALES DE VENTE',
      lead: 'Version en vigueur à la date de commande',
      sections: [
        {
          title: 'Article 1 – Objet',
          lines: [
            'Les présentes CGV régissent les prestations d’assemblage électronique (PCBA), d’approvisionnement de composants et de services techniques réalisées par EVIACORE™ auprès d’une clientèle exclusivement professionnelle.',
          ],
        },
        {
          title: 'Article 2 – Acceptation',
          lines: [
            'Toute commande implique l’acceptation sans réserve des présentes CGV, qui prévalent sur tout document du client.',
          ],
        },
        {
          title: 'Article 3 – Commande',
          lines: [
            'La commande devient ferme après validation écrite.',
            'Le client fournit :',
            'BOM complète',
            'Fichiers Gerber',
            'Pick & Place',
            'Spécifications techniques',
            'Le client demeure seul responsable de l’exactitude des données transmises.',
          ],
        },
        {
          title: 'Article 4 – Nature de l’intervention',
          lines: [
            'EVIACORE™™ intervient exclusivement en qualité de sous-traitant industriel chargé de l’assemblage.',
            'La société n’assume aucune responsabilité relative :',
            'à la conception du produit,',
            'au schéma électronique,',
            'au routage PCB,',
            'au dimensionnement,',
            'à la conformité réglementaire,',
            'à l’usage final.',
          ],
        },
        {
          title: 'Article 5 – Composants',
          lines: [
            '5.1 Composants fournis par le client',
            'Le client est seul responsable :',
            'des références,',
            'de la qualité,',
            'de l’authenticité,',
            'de la compatibilité.',
            '5.2 Composants achetés par EVIACORE™',
            'EVIACORE™ agit sur la base des références communiquées.',
            'La société ne pourra être tenue responsable :',
            'd’une erreur fournisseur,',
            'd’un lot défectueux,',
            'd’un composant incorrect livré si l’erreur n’était pas raisonnablement détectable.',
          ],
        },
        {
          title: 'Article 6 – Délais',
          lines: [
            'Les délais sont indicatifs sauf engagement écrit.',
            'Tout retard fournisseur entraîne un décalage automatique équivalent sans pénalité.',
          ],
        },
        {
          title: 'Article 7 – Réserve de propriété',
          lines: [
            'Les produits livrés demeurent la propriété de EVIACORE™ jusqu’au paiement intégral des sommes dues.',
          ],
        },
        {
          title: 'Article 8 – Transfert des risques',
          lines: [
            'Les risques sont transférés au client à la livraison ou mise à disposition.',
          ],
        },
        {
          title: 'Article 9 – Contrôle avant mise sous tension',
          lines: [
            'Le client doit impérativement effectuer un contrôle complet avant mise sous tension.',
            'Toute mise sous tension sans vérification engage exclusivement sa responsabilité.',
          ],
        },
        {
          title: 'Article 10 – Défauts',
          lines: [
            'Tout défaut doit être signalé avant mise sous tension.',
            'La garantie se limite à réparation, remplacement ou avoir.',
          ],
        },
        {
          title: 'Article 11 – Limitation de responsabilité',
          lines: [
            'La responsabilité financière de EVIACORE™ est limitée au montant HT de la prestation concernée.',
            'Sont exclus :',
            'pertes d’exploitation',
            'pertes de production',
            'pertes de chiffre d’affaires',
            'pénalités contractuelles',
            'dommages indirects',
          ],
        },
        {
          title: 'Article 12 – Assurance RC Professionnelle',
          lines: [
            'EVIACORE™ déclare être titulaire d’une assurance Responsabilité Civile Professionnelle couvrant les conséquences pécuniaires de sa responsabilité dans le cadre de son activité.',
            'Cette assurance ne saurait étendre la responsabilité au-delà des limites prévues aux présentes CGV.',
            'Une attestation pourra être fournie sur demande.',
          ],
        },
        {
          title: 'Article 13 – Confidentialité',
          lines: [
            'EVIACORE™ s’engage à préserver la confidentialité des documents techniques transmis.',
            'Un NDA peut être signé sur demande.',
          ],
        },
        {
          title: 'Article 14 – Force majeure',
          lines: [
            'EVIACORE™ ne pourra être tenue responsable en cas d’événement imprévisible, irrésistible et extérieur.',
          ],
        },
        {
          title: 'Article 15 – Divisibilité',
          lines: [
            'Si une clause est jugée invalide, les autres demeurent applicables.',
          ],
        },
        {
          title: 'Article 16 – Litiges',
          lines: [
            'Compétence exclusive du Tribunal de Commerce de Bordeaux.',
          ],
        },
      ],
    },
    privacyPage: {
      eyebrow: 'Données personnelles',
      title: 'POLITIQUE DE CONFIDENTIALITÉ – RGPD',
      lead: '',
      sections: [
        {
          title: 'Responsable du traitement',
          lines: [
            'EVIACORE™',
            'SAS au capital de 30 000 €',
            'RCS Bordeaux 994 666 436',
            'Email : contact@EVIACORE™.com',
          ],
        },
        {
          title: 'Données collectées',
          lines: [
            'Données d’identification',
            'Données commerciales',
            'Documents techniques',
            'Logs de connexion',
          ],
        },
        {
          title: 'Finalités',
          lines: [
            'Gestion des devis',
            'Exécution des commandes',
            'Relation commerciale',
            'Obligations légales',
          ],
        },
        {
          title: 'Durée de conservation',
          lines: [
            'Documents techniques : 1 an après fin de relation.',
            'Documents comptables : 10 ans.',
            'Données commerciales : durée contractuelle.',
          ],
        },
        {
          title: 'Destinataires',
          lines: [
            'EVIACORE™ et ses prestataires techniques (O2Switch et OVH).',
          ],
        },
        {
          title: 'Sécurité',
          lines: [
            'Mesures techniques et organisationnelles appropriées mises en place pour protéger les données.',
          ],
        },
        {
          title: 'Droits',
          lines: [
            'Droit d’accès, rectification, suppression, opposition.',
            'Demande à adresser à : contact@EVIACORE™.com',
          ],
        },
        {
          title: 'Réclamation',
          lines: [
            'CNIL – www.cnil.fr',
          ],
        },
      ],
    },
    legalPage: {
      eyebrow: 'Mentions légales',
      title: 'MENTIONS LÉGALES – EVIACORE™™',
      lead: '',
      sections: [
        {
          title: '1. Éditeur du site',
          lines: [
            'EVIACORE™™',
            'Société par Actions Simplifiée (SAS)',
            'Capital social : 30 000 €',
            'Immatriculée au RCS de Bordeaux sous le numéro 994 666 436',
            'Siège social : 8 Allée Isaac Newton – 33650 Martillac – France',
            'Adresse e-mail : contact@EVIACORE™.com',
            'Directeur de la publication :',
            'Monsieur Maxime Mérour, Président',
          ],
        },
        {
          title: '2. Marque',
          lines: [
            'La marque EVIACORE™™ fait l’objet d’une demande d’enregistrement auprès de l’INPI sous le numéro 25 5196343, déposée le 05 novembre 2025 et publiée au Bulletin Officiel de la Propriété Industrielle le 28 novembre 2025.',
            'La marque est déposée au nom de Monsieur Maxime Mérour.',
            'La société EVIACORE™ bénéficie d’un droit d’exploitation de ladite marque.',
            'Toute reproduction, imitation ou exploitation sans autorisation écrite préalable est interdite.',
          ],
        },
        {
          title: '3. Hébergement',
          lines: [
            'Site principal hébergé par :',
            'O2Switch – Clermont-Ferrand – France',
            'Service d’authentification / espace client hébergé par :',
            'OVH SAS – 2 rue Kellermann – 59100 Roubaix – France',
          ],
        },
        {
          title: '4. Propriété intellectuelle',
          lines: [
            'L’ensemble des contenus du site (textes, visuels, graphismes, logos, documents, structure, code) est protégé par le Code de la propriété intellectuelle.',
            'Toute reproduction totale ou partielle sans autorisation est interdite.',
          ],
        },
        {
          title: '5. Responsabilité',
          lines: [
            'EVIACORE™ ne saurait être tenue responsable :',
            'des erreurs ou omissions,',
            'd’une interruption temporaire du site,',
            'des dommages directs ou indirects liés à l’utilisation du site,',
            'du contenu de sites tiers.',
          ],
        },
        {
          title: '6. Droit applicable',
          lines: [
            'Le site est soumis au droit français.',
            'Tout litige relève des juridictions françaises compétentes.',
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
      cta: 'MY ACCOUNT',
      lang: 'Language',
    },
    hero: {
      eyebrow: 'Electronic board manufacturer',
      title: 'Your VIA between design and PCBA',
      lead:
        'Every project ordered through the EVIACORE™ platform benefits from direct technical support, well beyond a simple assembly service.',
      primaryCta: 'ACCESS MY ACCOUNT',
      secondaryCta: 'View our services',
      stats: [
        { value: '48h', label: 'Initial quote' },
        { value: 'ISO', label: 'Quality process' },
        { value: '100%', label: 'Project traceability' },
      ],
      panel: {
        title: 'Guided order',
        heading: 'A clear app to launch your board in a few steps.',
        bullets: ['Technical specifications', 'Fast validation', 'Production and control'],
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
            text: 'Before production, EVIACORE™ reviews your files and provides concrete feedback on manufacturability, component selection, and solderability, plus optimization advice for compliance.',
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
            text: 'EVIACORE™ web platform. Online quoting.',
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
            text: 'Import your file and the EVIACORE™ algorithm finds available components at the best price.',
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
            title: 'Incoming inspection / preparation',
            text: 'All components are counted and repackaged for SMT placement.',
          },
          {
            title: 'Solder paste deposition',
            text: 'We apply solder paste using jetting, without stencils.',
          },
          {
            title: 'SMT placement',
            text: 'Components are placed on an automated line.',
          },
          {
            title: 'Reflow oven',
            text: 'Vapor phase oven following a JEDEC temperature profile, verified daily with a profiler.',
          },
          {
            title: 'X-ray inspection',
            text: 'We perform radiography ourselves, with a provider on-site while waiting to receive our RX.',
          },
          {
            title: 'Through-hole insertion',
            text: 'Through-hole leads are preformed and cut.',
          },
          {
            title: 'Visual inspection',
            text: 'Assembly is inspected according to IPC standards.',
          },
          {
            title: 'Packaging and shipping',
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
      primaryCta: 'Access my account',
      secondaryCta: 'View our services',
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
        recaptchaLabel: 'Anti-spam verification',
        recaptchaError: 'Please complete the recaptcha to submit the form.',
        recaptchaMissing: 'Recaptcha not configured. Add your site key.',
        successMessage: 'Your message has been sent, thank you.',
        submit: 'Send request',
      },
    },
    footer: {
      tagline: '',
      address: '',
      cgv: 'Terms of Sale',
      legal: 'Legal Notice',
      privacy: 'Privacy policy',
      ctaText: 'Need PCBA? Log in here.',
      rights:
        'EVIACORE™\n8 Allée Isaac Newton – 33650 Martillac\nSAS with share capital of €30,000 – RCS Bordeaux 994 666 436\n© 2026 – All rights reserved',
    },
    cgvPage: {
      eyebrow: 'Terms of Sale',
      title: 'TERMS OF SALE',
      lead: 'Version in force on the order date',
      sections: [
        {
          title: 'Article 1 – Purpose',
          lines: [
            'These Terms of Sale govern electronic assembly (PCBA), component sourcing, and technical services performed by EVIACORE™ for professional clients only.',
          ],
        },
        {
          title: 'Article 2 – Acceptance',
          lines: [
            'Any order implies full acceptance of these Terms, which prevail over any client document.',
          ],
        },
        {
          title: 'Article 3 – Order',
          lines: [
            'The order becomes firm after written approval.',
            'The client provides:',
            'Complete BOM',
            'Gerber files',
            'Pick & Place',
            'Technical specifications',
            'The client remains solely responsible for the accuracy of the data provided.',
          ],
        },
        {
          title: 'Article 4 – Nature of the intervention',
          lines: [
            'EVIACORE™ acts solely as an industrial subcontractor responsible for assembly.',
            'The company assumes no responsibility relating to:',
            'product design,',
            'electronic schematic,',
            'PCB routing,',
            'dimensioning,',
            'regulatory compliance,',
            'final use.',
          ],
        },
        {
          title: 'Article 5 – Components',
          lines: [
            '5.1 Components supplied by the client',
            'The client is solely responsible for:',
            'references,',
            'quality,',
            'authenticity,',
            'compatibility.',
            '5.2 Components purchased by EVIACORE™',
            'EVIACORE™ acts based on the references provided.',
            'The company cannot be held liable for:',
            'a supplier error,',
            'a defective batch,',
            'an incorrect component delivered if the error was not reasonably detectable.',
          ],
        },
        {
          title: 'Article 6 – Lead times',
          lines: [
            'Lead times are indicative unless a written commitment is provided.',
            'Any supplier delay results in an equivalent automatic extension with no penalty.',
          ],
        },
        {
          title: 'Article 7 – Retention of title',
          lines: [
            'Delivered products remain the property of EVIACORE™ until full payment of sums due.',
          ],
        },
        {
          title: 'Article 8 – Transfer of risks',
          lines: [
            'Risks transfer to the client upon delivery or availability.',
          ],
        },
        {
          title: 'Article 9 – Pre-power inspection',
          lines: [
            'The client must perform a complete inspection before powering on.',
            'Any power-on without verification is at the client’s sole responsibility.',
          ],
        },
        {
          title: 'Article 10 – Defects',
          lines: [
            'Any defect must be reported before power-on.',
            'The warranty is limited to repair, replacement, or credit.',
          ],
        },
        {
          title: 'Article 11 – Limitation of liability',
          lines: [
            'EVIACORE™’s financial liability is limited to the net amount of the relevant service.',
            'Excluded:',
            'operating losses',
            'production losses',
            'loss of turnover',
            'contractual penalties',
            'indirect damages',
          ],
        },
        {
          title: 'Article 12 – Professional liability insurance',
          lines: [
            'EVIACORE™ declares that it holds Professional Civil Liability insurance covering the financial consequences of its liability in the course of its activity.',
            'This insurance does not extend liability beyond the limits set in these Terms.',
            'A certificate can be provided upon request.',
          ],
        },
        {
          title: 'Article 13 – Confidentiality',
          lines: [
            'EVIACORE™ undertakes to preserve the confidentiality of technical documents provided.',
            'An NDA can be signed on request.',
          ],
        },
        {
          title: 'Article 14 – Force majeure',
          lines: [
            'EVIACORE™ cannot be held liable in the event of an unforeseeable, irresistible, and external event.',
          ],
        },
        {
          title: 'Article 15 – Severability',
          lines: [
            'If a clause is deemed invalid, the others remain applicable.',
          ],
        },
        {
          title: 'Article 16 – Disputes',
          lines: [
            'Exclusive jurisdiction of the Commercial Court of Bordeaux.',
          ],
        },
      ],
    },
    privacyPage: {
      eyebrow: 'Privacy',
      title: 'PRIVACY POLICY – GDPR',
      lead: '',
      sections: [
        {
          title: 'Data controller',
          lines: [
            'EVIACORE™',
            'SAS with share capital of €30,000',
            'RCS Bordeaux 994 666 436',
            'Email: contact@EVIACORE™.com',
          ],
        },
        {
          title: 'Data collected',
          lines: [
            'Identification data',
            'Business data',
            'Technical documents',
            'Connection logs',
          ],
        },
        {
          title: 'Purposes',
          lines: [
            'Quote management',
            'Order fulfillment',
            'Business relationship',
            'Legal obligations',
          ],
        },
        {
          title: 'Retention period',
          lines: [
            'Technical documents: 1 year after the end of the relationship.',
            'Accounting documents: 10 years.',
            'Business data: contractual duration.',
          ],
        },
        {
          title: 'Recipients',
          lines: [
            'EVIACORE™ and its technical providers (O2Switch and OVH).',
          ],
        },
        {
          title: 'Security',
          lines: [
            'Appropriate technical and organizational measures are implemented to protect data.',
          ],
        },
        {
          title: 'Rights',
          lines: [
            'Right of access, rectification, erasure, objection.',
            'Requests should be sent to: contact@EVIACORE™.com',
          ],
        },
        {
          title: 'Complaint',
          lines: [
            'CNIL – www.cnil.fr',
          ],
        },
      ],
    },
    legalPage: {
      eyebrow: 'Legal Notice',
      title: 'LEGAL NOTICE – EVIACORE™™',
      lead: '',
      sections: [
        {
          title: '1. Publisher',
          lines: [
            'EVIACORE™™',
            'Société par Actions Simplifiée (SAS)',
            'Share capital: €30,000',
            'Registered with the Bordeaux Trade and Companies Register under number 994 666 436',
            'Registered office: 8 Allée Isaac Newton – 33650 Martillac – France',
            'Email: contact@EVIACORE™.com',
            'Publishing director:',
            'Mr Maxime Mérour, President',
          ],
        },
        {
          title: '2. Trademark',
          lines: [
            'The EVIACORE™™ trademark is the subject of a registration application with the INPI under number 25 5196343, filed on 05 November 2025 and published in the Official Bulletin of Industrial Property on 28 November 2025.',
            'The trademark is filed in the name of Mr Maxime Mérour.',
            'EVIACORE™ has the right to use the said trademark.',
            'Any reproduction, imitation, or use without prior written authorization is prohibited.',
          ],
        },
        {
          title: '3. Hosting',
          lines: [
            'Main site hosted by:',
            'O2Switch – Clermont-Ferrand – France',
            'Authentication / customer area hosted by:',
            'OVH SAS – 2 rue Kellermann – 59100 Roubaix – France',
          ],
        },
        {
          title: '4. Intellectual property',
          lines: [
            'All site content (texts, visuals, graphics, logos, documents, structure, code) is protected by the Intellectual Property Code.',
            'Any total or partial reproduction without authorization is prohibited.',
          ],
        },
        {
          title: '5. Liability',
          lines: [
            'EVIACORE™ cannot be held liable for:',
            'errors or omissions,',
            'temporary interruption of the site,',
            'direct or indirect damages related to the use of the site,',
            'content of third-party sites.',
          ],
        },
        {
          title: '6. Applicable law',
          lines: [
            'The site is subject to French law.',
            'Any dispute falls under the competent French courts.',
          ],
        },
      ],
    },
  },
}

export default translations
