import { DataStore } from './types';

export const INITIAL_DATA: DataStore = {
  years: [
    // ============================================================
    // 1ÈRE ANNÉE
    // ============================================================
    {
      id: 'y1',
      name: '1ère Année Médecine',
      semesters: [
        {
          id: 's1',
          name: 'Semestre 1',
          modules: [
            // --- MODULE EXEMPLE : ANATOMIE ---
            {
              id: 'anat1',
              name: 'Anatomie I',
              description: 'Ostéologie et Arthrologie du membre supérieur',
              
              // VOS FICHIERS PDF ICI
              pdfs: [
                { 
                  id: 'pdf_anat_1', 
                  name: 'Cours Ostéologie.pdf', 
                  url: '#' // Mettez le lien de votre PDF ici
                }
              ],

              // VOS QUESTIONS QCM ICI
              questions: [
                {
                  id: 'q1',
                  text: 'Quel est l\'os latéral de l\'avant-bras ?',
                  options: ['Ulna', 'Radius', 'Humérus', 'Fémur'],
                  correctIndex: 1, // 0=1er choix, 1=2ème choix...
                  explanation: 'Le radius est situé en dehors (latéral), l\'ulna en dedans (médial).'
                },
                {
                  id: 'q2',
                  text: 'Combien de vertèbres cervicales possède l\'homme ?',
                  options: ['5', '7', '12', 'Sacrées'],
                  correctIndex: 1,
                  explanation: 'Il y a 7 vertèbres cervicales (C1 à C7).'
                }
              ]
            },
            
            // --- MODULE EXEMPLE : HISTOLOGIE ---
            {
              id: 'histo1',
              name: 'Histologie',
              description: 'Étude des tissus biologiques',
              pdfs: [],
              questions: [
                {
                  id: 'hq1',
                  text: 'Quel type d\'épithélium tapisse les vaisseaux sanguins ?',
                  options: ['Endothélium', 'Urothélium', 'Épiderme', 'Mésothélium'],
                  correctIndex: 0,
                  explanation: 'L\'endothélium est un épithélium pavimenteux simple.'
                }
              ]
            }
          ]
        },
        {
          id: 's2',
          name: 'Semestre 2',
          modules: [
             {
               id: 'phy1',
               name: 'Physiologie',
               description: 'Fonctionnement des organismes vivants',
               pdfs: [],
               questions: [] // Ajoutez vos questions ici
             }
          ]
        }
      ]
    },

    // ============================================================
    // 2ÈME ANNÉE
    // ============================================================
    {
      id: 'y2',
      name: '2ème Année Médecine',
      semesters: [
        {
          id: 's3', 
          name: 'Semestre 3', 
          modules: [] // Ajoutez vos modules ici
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
      id: 'y3',
      name: '3ème Année Médecine',
      semesters: [
        { id: 's5', name: 'Semestre 5', modules: [] },
        { id: 's6', name: 'Semestre 6', modules: [] }
      ]
    }
  ]
};