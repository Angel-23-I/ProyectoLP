
export const imgs = [
    '/images/regiones.png',
    '/images/paisaje.png',
    '/images/gastronomia.png',
    '/images/tipo-de-paisaje.png',
    '/images/tipopaisaje.png'
];

export const categories = {
    regiones: 'Regiones',
    paisaje: 'Paisaje',
    gastronomia: 'Gastronomia',
    tipopaisaje: 'Tipo-de-paisaje'
};

const {
    regiones,
    paisaje,
    gastronomia,
    tipopaisaje
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
    {
        id: 7,
        difficulty: 'Fácil',
        question: '¿Cómo se llama el lugar donde hay arena, mar y las personas van a nadar?',
        category: paisaje,
        correct_answer: 'Playa',
        incorrect_answers: [
            'Montaña',
            'Bosque',
            'Valle',
        ],
    },
    {
        id: 8,
        difficulty: 'Fácil',
        question: '¿Qué paisaje natural se forma entre montañas y suele tener ríos o cultivos?',
        category: paisaje,
        correct_answer: 'Valle',
        incorrect_answers: [
            'Playa',
            'Desierto',
            'Bosque',
        ],
    },
    {
        id: 9,
        difficulty: 'Fácil',
        question: '¿Dónde hay muchos árboles, animales y sombra fresca?',
        category: paisaje,
        correct_answer: 'Bosque',
        incorrect_answers: [
            'Río',
            'Playa',
            'Montaña',
        ],
    },
    {
        id: 10,
        difficulty: 'Fácil',
        question: '¿Qué lugar es muy alto y a veces tiene nieve en la cima?',
        category: paisaje,
        correct_answer: 'Montaña',
        incorrect_answers: [
            'Valle',
            'Playa',
            'Río',
        ],
    },
    {
        id: 11,
        difficulty: 'Fácil',
        question: 'Es una corriente de agua que fluye hacia el mar',
        category: paisaje,
        correct_answer: 'Rio',
        incorrect_answers: [
            'Bosque',
            'Montaña',
            'Desierto',
        ],
    },
    {
        id: 12,
        difficulty: 'Fácil',
        question: '¿Qué paisaje se caracteriza por su clima seco, altas temperaturas y dunas de arena?',
        category: paisaje,
        correct_answer: 'Desierto',
        incorrect_answers: [
            'Lago',
            'Selva',
            'Pantano',
        ],
    },
    {
        id: 13,
        difficulty: 'Fácil',
        question: '¿Qué paisaje es una gran cantidad de agua dulce rodeada de tierra?',
        category: paisaje,
        correct_answer: 'Lago',
        incorrect_answers: [
            'Río',
            'Desierto',
            'Montaña',
        ],
    },
    {
        id: 14,
        difficulty: 'Fácil',
        question: '¿Qué paisaje es plano, con poca vegetación y sin montañas?',
        category: paisaje,
        correct_answer: 'Llanura',
        incorrect_answers: [
            'Valle',
            'Bosque',
            'Glaciar',
        ],
    },
    {
        id: 15,
        difficulty: 'Fácil',
        question: '¿Qué paisaje está cubierto de hielo y nieve durante todo el año?',
        category: paisaje,
        correct_answer: 'Glaciar',
        incorrect_answers: [
            'Montaña',
            'Lago',
            'Selva',
        ],
    },
    {
        id: 16,
        difficulty: 'Fácil',
        question: '¿Qué paisaje se caracteriza por su vegetación muy densa, clima húmedo y lluvias constantes?',
        category: paisaje,
        correct_answer: 'Selva',
        incorrect_answers: [
            'Desierto',
            'Llanura',
            'Bosque',
        ],
    },
    {
        id: 17,
        difficulty: 'Fácil',
        question: '¿Qué paisaje es una zona donde el agua se acumula, tiene barro y hay vegetación acuática?',
        category: paisaje,
        correct_answer: 'Pantano',
        incorrect_answers: [
            'Río',
            'Lago',
            'Valle',
        ],
    },
    {
        id: 18,
        difficulty: 'Fácil',
        question: '¿Qué plato típico del Caribe es una arepa frita rellena de huevo?',
        category: gastronomia,
        correct_answer: 'Arepa de huevo',
        incorrect_answers: [
            'Ajiaco',
            'Mamona',
            'Mojojoy',
        ],
    },
    {
        id: 19,
        difficulty: 'Fácil',
        question: '¿Qué sopa de pescado es muy popular en la región Caribe?',
        category: gastronomia,
        correct_answer: 'Sancocho de pescado',
        incorrect_answers: [
            'Encocado de pescado',
            'Rondon',
            'Bandeja paisa',
        ],
    },
    {
        id: 20,
        difficulty: 'Fácil',
        question: '¿Qué sopa de la región Andina lleva pollo, papa y mazorca?',
        category: gastronomia,
        correct_answer: 'Ajiaco',
        incorrect_answers: [
            'Sancocho de pescado',
            'Hayacas',
            'Arroz con camarones',
        ],
    },
    {
        id: 21,
        difficulty: 'Fácil',
        question: '¿Qué plato andino lleva arroz, carne molida, huevo, chicharrón y frijoles?',
        category: gastronomia,
        correct_answer: 'Bandeja paisa',
        incorrect_answers: [
            'Arepa de huevo',
            'Mamona',
            'Mojojoy',
        ],
    },
    {
        id: 22,
        difficulty: 'Fácil',
        question: '¿Qué plato del Pacífico se prepara con pescado y leche de coco?',
        category: gastronomia,
        correct_answer: 'Encocado de pescado',
        incorrect_answers: [
            'Ajiaco',
            'Rondon',
            'Hayacas',
        ],
    },
    {
        id: 23,
        difficulty: 'Fácil',
        question: '¿Qué plato del Pacífico combina arroz con camarones y especias?',
        category: gastronomia,
        correct_answer: 'Arroz con camarones',
        incorrect_answers: [
            'Bandeja paisa',
            'Mojojoy',
            'Sancocho de pescado',
        ],
    },
    {
        id: 24,
        difficulty: 'Fácil',
        question: '¿Qué carne asada es típica de la región de los llanos (Orinoquía)?',
        category: gastronomia,
        correct_answer: 'Mamona',
        incorrect_answers: [
            'Encocado de pescado',
            'Arepa de huevo',
            'Ajiaco',
        ],
    },
    {
        id: 25,
        difficulty: 'Fácil',
        question: '¿Qué plato de la Orinoquía se prepara con masa y carne envuelta en hojas?',
        category: gastronomia,
        correct_answer: 'Hayacas',
        incorrect_answers: [
            'Bandeja paisa',
            'Rondon',
            'Mojojoy',
        ],
    },
    {
        id: 26,
        difficulty: 'Fácil',
        question: '¿Qué comida exótica de la Amazonía es una larva comestible?',
        category: gastronomia,
        correct_answer: 'Mojojoy',
        incorrect_answers: [
            'Mamona',
            'Ajiaco',
            'Arepa de huevo',
        ],
    },
    {
        id: 27,
        difficulty: 'Fácil',
        question: '¿Qué plato amazónico se cocina con hojas y fuego lento?',
        category: gastronomia,
        correct_answer: 'Pescado moqueado',
        incorrect_answers: [
            'Encocado de pescado',
            'Hayacas',
            'Arroz con camarones',
        ],
    },
    {
        id: 28,
        difficulty: 'Fácil',
        question: '¿Qué plato típico de la región Insular lleva pescado, plátano y coco?',
        category: gastronomia,
        correct_answer: 'Rondon',
        incorrect_answers: [
            'Sancocho de pescado',
            'Encocado de pescado',
            'Bandeja paisa',
        ],
    },
    {
        id: 29,
        difficulty: 'Fácil',
        question: '¿Qué empanadas hechas con cangrejo son típicas de las islas?',
        category: gastronomia,
        correct_answer: 'Empanadas de cangrejo',
        incorrect_answers: [
            'Arepa de huevo',
            'Hayacas',
            'Mojojoy',
        ],
    },
    {
        id: 30,
        difficulty: 'Fácil',
        question: '¿Qué tipo de paisaje es una playa con arena y mar?',
        category: tipopaisaje,
        correct_answer: 'Natural',
        incorrect_answers: ['Cultural'],
        nombre_paisaje: 'playa'
    },
    {
        id: 31,
        difficulty: 'Fácil',
        question: '¿Qué tipo de paisaje es una ciudad con edificios y calles?',
        category: tipopaisaje,
        correct_answer: 'Cultural',
        incorrect_answers: ['Natural'],
        nombre_paisaje: 'ciudad'
    },
    {
        id: 32,
        difficulty: 'Fácil',
        question: '¿Qué tipo de paisaje es una montaña con nieve en la cima?',
        category: tipopaisaje,
        correct_answer: 'Natural',
        incorrect_answers: ['Cultural'],
        nombre_paisaje: 'montaña'
    },
    {
        id: 33,
        difficulty: 'Fácil',
        question: '¿Qué tipo de paisaje es un parque de diversiones con juegos mecánicos?',
        category: tipopaisaje,
        correct_answer: 'Cultural',
        incorrect_answers: ['Natural'],
        nombre_paisaje: 'parque_diversiones'
    },
    {
        id: 34,
        difficulty: 'Fácil',
        question: '¿Qué tipo de paisaje es un bosque con muchos árboles y animales?',
        category: tipopaisaje,
        correct_answer: 'Natural',
        incorrect_answers: ['Cultural'],
        nombre_paisaje: 'bosque'
    },
    {
        id: 35,
        difficulty: 'Fácil',
        question: '¿Qué tipo de paisaje es una iglesia antigua en el centro de un pueblo?',
        category: tipopaisaje,
        correct_answer: 'Cultural',
        incorrect_answers: ['Natural'],
        nombre_paisaje: 'iglesia'
    },
    {
        id: 36,
        difficulty: 'Fácil',
        question: '¿Qué tipo de paisaje es un río que cruza un valle?',
        category: tipopaisaje,
        correct_answer: 'Natural',
        incorrect_answers: ['Cultural'],
        nombre_paisaje: 'rio'
    },
    {
        id: 37,
        difficulty: 'Fácil',
        question: '¿Qué tipo de paisaje es una carretera que conecta dos ciudades?',
        category: tipopaisaje,
        correct_answer: 'Cultural',
        incorrect_answers: ['Natural'],
        nombre_paisaje: 'carretera'
    },
    {
        id: 38,
        difficulty: 'Fácil',
        question: '¿Qué tipo de paisaje es un volcán activo rodeado de vegetación?',
        category: tipopaisaje,
        correct_answer: 'Natural',
        incorrect_answers: ['Cultural'],
        nombre_paisaje: 'volcán'
    },
    {
        id: 39,
        difficulty: 'Fácil',
        question: '¿Qué tipo de paisaje es una zona arqueológica con ruinas antiguas?',
        category: tipopaisaje,
        correct_answer: 'Cultural',
        incorrect_answers: ['Natural'],
        nombre_paisaje: 'zona_arqueologica'
    },
];
