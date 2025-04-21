import Regiones from './assets/regiones.png';


export const imgs = [
    Regiones,
];

export const categories = {
    regiones: 'Regiones',
};

const {
    regiones,
} = categories;

export const questions = [
    {
        id: 1,
        difficulty: 'Fácil',
        question: '¿Cual es la región que se muestra en la imagen?',
        category: regiones,
        correct_answer:
            'Orinoquia',
        incorrect_answers: [
            'Insular',
            'Andina',
            'Caribe',
        ],
    },
    {
        id: 2,
        difficulty: 'Fácil',
        question: '¿Cual es la región que se muestra en la imagen?',
        category: regiones,
        correct_answer: 'Insular',
        incorrect_answers: [
            'Caribe',
            'Pacifica',
            'Andina',
        ],
    },
    {
        id: 3,
        difficulty: 'Facil',
        question: '¿Cual es la región que se muestra en la imagen?',
        category: regiones,
        correct_answer: 'Andina',
        incorrect_answers: ['Caribe', 'Orinoquia', 'Amazonica'],
    },
    {
        id: 4,
        difficulty: 'Fácil',
        question: '¿Cual es la región que se muestra en la imagen?',
        category: regiones,
        correct_answer:
            'Pacifico',
        incorrect_answers: [
            'Insular',
            'Andina',
            'Caribe',
        ],
    },
    {
        id: 5,
        difficulty: 'Fácil',
        question: '¿Cual es la región que se muestra en la imagen?',
        category: regiones,
        correct_answer: 'Caribe',
        incorrect_answers: [
            'Amazonica',
            'Pacifica',
            'Andina',
        ],
    },
    {
        id: 6,
        difficulty: 'Facil',
        question: '¿Cual es la región que se muestra en la imagen?',
        category: regiones,
        correct_answer: 'Amazonica',
        incorrect_answers: ['Caribe', 'Orinoquia', 'Andina'],
    },
];
