import { DataStore } from './types';

export const INITIAL_DATA: DataStore = {
  notifications: [
    
    
   {
      id: 'notif-1',
      type: 'info',
      message: 'Bienvenue sur la nouvelle version de MedQCM Pro ! N\'hésitez pas à utiliser l\'IA pour vos révisions.',
      date: new Date().toLocaleDateString('fr-FR')
    },
    {
      id: 'notif-2',
      type: 'warning',
      message: 'seulement 10 a 15 personnes peuvent generer des questions a l\'aide l\'ia et au total 10000-15000 donc priere de ne pas l\'utiliser maintes fois et vous pouvez le remplacer par l\'ia gemini et merci pour votre comprehension.',
      date: new Date().toLocaleDateString('fr-FR')
    },
  ],
  years: [
    // ============================================================
    // 1ÈRE ANNÉE
    // ============================================================
    {
      id: 'annee-1',
      name: '1ère Année Médecine',
      semesters: [
        // --- SEMESTRE 1 ---
        {
          id: 's1',
          name: 'Semestre 1',
          modules: [
            {
              id: 'mod-anat-1',
              name: 'Anatomie I',
              // C'EST ICI QUE VOUS DÉFINISSEZ LE CONTEXTE POUR L'IA
              description: 'Anatomie du thorax (cage thoracique, cœur, poumons, médiastin) et anatomie des membres supérieurs et inférieurs (ostéologie, arthrologie, myologie, vascularisation et innervation).',
              // LISTE DES PDFS DU MODULE
              pdfs: [
                { id: 'pdf1', name: 'Cours Thorax.pdf', url: '#' },
                { id: 'pdf2', name: 'Cours Membre Supérieur.pdf', url: '#' }
              ],
              // LISTE DES QUESTIONS QCM DU MODULE
              questions: [
                {
                  id: 'q1',
                  text: 'Quel est l\'os le plus long du corps humain ?',
                  options: ['Humérus', 'Fémur', 'Tibia', 'Fibula'],
                  correctIndices: [1], // Le Fémur
                  explanation: 'Le fémur est l\'os de la cuisse et c\'est le plus long du corps.'
                },
                {
                  id: 'q2',
                  text: 'Concernant la cage thoracique :',
                  options: ['Elle contient 12 paires de côtes', 'Le sternum est un os plat', 'Toutes les côtes s\'articulent directement avec le sternum', 'Elle protège le cœur et les poumons'],
                  correctIndices: [0, 1, 3], 
                  explanation: 'Il y a 12 paires de côtes. Les côtes flottantes (11 et 12) ne s\'articulent pas avec le sternum.'
                },
                {
                  id: 'q3',
                  text: 'Quels os font partie du membre inférieur ?',
                  options: ['Fémur', 'Humérus', 'Tibia', 'Radius'],
                  correctIndices: [0, 2], // Fémur et Tibia
                  explanation: 'Le fémur et le tibia sont des os de la jambe. L\'humérus et le radius sont dans le bras.'
                }
              ]
            },
            {
              id: 'mod-cyto-1',
              name: 'Cytologie',
              description: 'Étude de la cellule : Membrane plasmique, système endomembranaire, mitochondries, cytosquelette et noyau.',
              pdfs: [],
              questions: [] 
            }
          ]
        },
        // --- SEMESTRE 2 ---
        {
          id: 's2',
          name: 'Semestre 2',
          modules: [
            {
              id: 'mod-phy-1',
              name: 'Physiologie',
              description: 'Physiologie générale, homéostasie et physiologie nerveuse.',
              pdfs: [],
              questions: []
            }
          ]
        }
      ]
    },

    // ============================================================
    // 2ÈME ANNÉE
    // ============================================================
    {
      id: 'annee-2',
      name: '2ème Année Médecine',
      semesters: [
        {
          id: 's3',
          name: 'Semestre 3',
          modules: [
             {
               id: 'mod-s3-1',
               name: 'Cardiologie',
               description: 'Pathologies cardiaques, ECG, insuffisance cardiaque et hypertension.',
               pdfs: [],
               questions: []
             }
          ]
        },
        {
          id: 's4',
          name: 'Semestre 4',
          modules: []
        }
      ]
    },

    // ============================================================
    // 3ÈME ANNÉE
    // ============================================================
    {
      id: 'annee-3',
      name: '3ème Année Médecine',
      semesters: [
        { id: 's5', name: 'Semestre 5', modules: [] },
        { id: 's6', name: 'Semestre 6', modules: [] }
      ]
    },
    
    // ============================================================
    // 4ÈME ANNÉE
    // ============================================================
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