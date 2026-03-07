import { DataStore } from './types';

export const INITIAL_DATA: DataStore = {
  notifications: [
    {
      id: 'notif-1',
      type: 'info',
      message: 'Bienvenue sur la nouvelle plateforme de QCM, MedQCM Pro !',
      date: new Date().toLocaleDateString('fr-FR')
    },
    {
      id: 'notif-2',
      type: 'warning',
      message: 'Le modèle d\'IA a un nombre limité d\'usage alors s\'il vous plaît ne l\'utilisez pas, mais je vais vous fournir la description exacte pour avoir des questions précises en utilisant l\'IA Gemini.',
      date: new Date().toLocaleDateString('fr-FR')
    },
    {
      id: 'notif-3',
      type: 'urgent',
      message: 'Ce site est en cours de maintenance il sera utilisable le plus tôt possible.',
      date: new Date().toLocaleDateString('fr-FR')
    }
  ],
  years: [
    {
      id: 'annee-1',
      name: '1ère Année Médecine',
      semesters: [
        {
          id: 's1',
          name: 'Semestre 1',
          modules: [
            {
              id: 'mod-anat-1',
              name: 'Anatomie I',
              description: 'Anatomie du thorax et des membres.',
              lessons: [
                {
                  id: 'lesson-anat-1',
                  name: 'Généralités et Thorax',
                  pdfs: [
                    { id: 'pdf1', name: 'Cours Thorax.pdf', url: '#' },
                    { id: 'pdf2', name: 'Cours Membre Supérieur.pdf', url: '#' }
                  ],
                  questions: [
                    {
                      id: 'q1',
                      text: 'Quel est l\'os le plus long du corps humain ?',
                      options: ['Humérus', 'Fémur', 'Tibia', 'Fibula'],
                      correctIndices: [1],
                      explanation: 'Le fémur est l\'os de la cuisse et c\'est le plus long du corps.'
                    },
                    {
                      id: 'q2',
                      text: 'Concernant la cage thoracique :',
                      options: ['Elle contient 12 paires de côtes', 'Le sternum est un os plat', 'Toutes les côtes s\'articulent directement avec le sternum', 'Elle protège le cœur et les poumons'],
                      correctIndices: [0, 1, 3], 
                      explanation: 'Il y a 12 paires de côtes. Les côtes flottantes (11 et 12) ne s\'articulent pas avec le sternum.'
                    }
                  ]
                }
              ]
            },
            {
              id: 'mod-s1-bioch',
              name: 'Biochimie',
              description: 'Étude des processus chimiques du vivant.',
              lessons: []
            },
            {
              id: 'mod-s1-biol',
              name: 'Biologie',
              description: 'Biologie cellulaire et moléculaire.',
              lessons: []
            },
            {
              id: 'mod-s1-biophy',
              name: 'Biophysique',
              description: 'Application de la physique à la biologie.',
              lessons: []
            },
            {
              id: 'mod-s1-medcom-biostat',
              name: 'Médecine communautaire & Biostatistique',
              description: 'Santé publique, prévention et statistiques appliquées.',
              lessons: []
            },
            {
              id: 'mod-s1-mtu',
              name: 'MTU',
              description: 'Méthodologie du Travail Universitaire.',
              lessons: []
            }
          ]
        },
        {
          id: 's2',
          name: 'Semestre 2',
          modules: [
            {
              id: 'mod-s2-physio-1',
              name: 'Physiologie 1',
              description: 'Physiologie générale.',
              lessons: []
            },
            {
              id: 'mod-s2-hemato-immuno',
              name: 'Hématologie & Immunologie',
              description: 'Étude du sang et du système immunitaire.',
              lessons: []
            },
            {
              id: 'mod-s2-histologie',
              name: 'Histologie',
              description: 'Étude des tissus.',
              lessons: []
            },
            {
              id: 'mod-s2-anat-2',
              name: 'Anatomie 2',
              description: 'Anatomie descriptive et fonctionnelle.',
              lessons: []
            },
            {
              id: 'mod-s2-anglais',
              name: 'Anglais médical',
              description: 'Terminologie médicale en anglais.',
              lessons: []
            },
            {
              id: 'mod-s2-microbio',
              name: 'Microbiologie',
              description: 'Étude des micro-organismes.',
              lessons: []
            },
            {
              id: 'mod-s2-digital-skills',
              name: 'Digital Skills',
              description: 'Compétences numériques.',
              lessons: []
            }
          ]
        }
      ]
    },
    {
      id: 'annee-2',
      name: '2ème Année Médecine',
      semesters: [
        {
          id: 's3',
          name: 'Semestre 3',
          modules: [
             {
               id: 'mod-s3-physio-2',
               name: 'Physiologie 2',
               description: 'Physiologie des systèmes.',
               lessons: []
             },
             {
               id: 'mod-s3-anat-3',
               name: 'Anatomie 3',
               description: 'Anatomie des membres et du cou.',
               lessons: []
             },
             {
               id: 'mod-s3-semio-1',
               name: 'Sémiologie 1',
               description: 'Bases de la sémiologie médicale.',
               lessons: []
             },
             {
               id: 'mod-s3-hist-med',
               name: 'Histoire de la médecine',
               description: 'Évolution de la pensée médicale.',
               lessons: []
             },
             {
               id: 'mod-s3-fonc-vit',
               name: 'Fonctions vitales et secourisme',
               description: 'Urgences et gestes de premiers secours.',
               lessons: []
             },
             {
               id: 'mod-s3-2',
               name: 'Biochimie Clinique',
               description: 'Exploration biochimique des fonctions.',
               lessons: [
                 {
                   id: 'lesson-bc-intro',
                   name: 'Introduction à la Biochimie Clinique',
                   pdfs: [],
                   questions: [
                     {
                       id: 'q-bc-1',
                       text: 'Retenez les propositions justes :',
                       options: [
                         'la précision, c\'est la reproductibilité d\'une méthode analytique',
                         'La spécificité, c\'est la plus petite quantité détectable d\'une substance à doser',
                         'l\'exactitude définie à quel point la valeur mesurée est proche de la valeur réelle',
                         'la sensibilité peut être définie par la capacité de discrimination entre la substance à doser et ses interférences'
                       ],
                       correctIndices: [0, 2],
                       explanation: 'La précision (fidélité) correspond à la reproductibilité. L\'exactitude (justesse) correspond à la proximité avec la valeur vraie.'
                     },
                     {
                       id: 'q-bc-2',
                       text: 'Retenez les propositions justes :',
                       options: [
                         'la sensibilité d\'un test est la proportion du patient ayant un test positif parmi les patients ayant la maladie',
                         'la spécificité d\'un test est proportionnelle est la proportion des patients ayant un test positif parmi les patients ayant la maladie',
                         'la proportion des patients n’ayant pas la maladie parmi ceux qui ont un test positif défini la valeur prédictive négative d\'un test',
                         'la proportion des patients ayant la maladie parmi ceux qui ont un test positif défini la valeur prédictive positive de ce test'
                       ],
                       correctIndices: [0, 2, 3],
                       explanation: 'La sensibilité est P(T+|M). La VPP est P(M|T+).'
                     }
                   ]
                 }
               ]
             }
          ]
        },
        {
          id: 's4',
          name: 'Semestre 4',
          modules: [
            {
              id: 'mod-s4-semio-2',
              name: 'Sémiologie 2',
              description: 'Sémiologie clinique et paraclinique approfondie.',
              lessons: []
            },
            {
              id: 'mod-s4-anat-path',
              name: 'Anatomo-pathologie',
              description: 'Étude des lésions macroscopiques et microscopiques.',
              lessons: []
            },
            {
              id: 'mod-s4-pharmaco-toxico',
              name: 'Pharmacologie & Toxicologie',
              description: 'Étude des médicaments et des substances toxiques.',
              lessons: []
            },
            {
              id: 'mod-s4-mal-inf-parasito',
              name: 'Maladies infectieuses & Parasitologie',
              description: 'Étude des agents infectieux et des parasites.',
              lessons: []
            },
            {
              id: 'mod-s4-imag-med',
              name: 'Imagerie médicale',
              description: 'Bases de la radiologie et de l\'imagerie médicale.',
              lessons: []
            },
            {
              id: 'mod-s4-anglais',
              name: 'Anglais médical',
              description: 'Communication médicale en anglais.',
              lessons: []
            }
          ]
        }
      ]
    },
    {
      id: 'annee-3',
      name: '3ème Année Médecine',
      semesters: [
        { id: 's5', name: 'Semestre 5', modules: [] },
        { id: 's6', name: 'Semestre 6', modules: [] }
      ]
    },
    {
        id: 'annee-4',
        name: '4ème Année Médecine',
        semesters: [
          { id: 's7', name: 'Semestre 7', modules: [] },
          { id: 's8', name: 'Semestre 8', modules: [] }
        ]
    }
  ]
};
