import { DataStore, Lesson, AppNotification } from './types';
import anat1Lessons from './data/mod-anat-1.json';
import bcIntroLessons from './data/mod-s3-biochimie-clinique.json';
import pharmacoLessons from './data/mod-s4-pharmaco-toxico.json';
import anatPathLessons from './data/mod-s4-anat-path.json';
import malInfLessons from './data/mod-s4-mal-inf-parasito.json';
import semio2Lessons from './data/mod-s4-semio-2.json';
import notifications from './data/notifications.json';

export const CONTACT_EMAIL = 'linahousni18@gmail.com';

export const INITIAL_DATA: DataStore = {
  notifications: notifications as AppNotification[],
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
              lessons: anat1Lessons as Lesson[]
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
               lessons: bcIntroLessons as Lesson[]
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
              lessons: semio2Lessons as Lesson[]
            },
            {
              id: 'mod-s4-anat-path',
              name: 'Anatomo-pathologie',
              description: 'Étude des lésions macroscopiques et microscopiques.',
              lessons: anatPathLessons as Lesson[]
            },
            {
              id: 'mod-s4-pharmaco-toxico',
              name: 'Pharmacologie & Toxicologie',
              description: 'Étude des médicaments et des substances toxiques.',
              lessons: pharmacoLessons as Lesson[]
            },
            {
              id: 'mod-s4-mal-inf-parasito',
              name: 'Maladies infectieuses & Parasitologie',
              description: 'Étude des agents infectieux et des parasites.',
              lessons: malInfLessons as Lesson[]
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
