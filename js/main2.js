const students = [
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78
    },
    {
        id: 110,
        name: "Paola Cortellessa",
        grades: 96
    },
    {
        id: 250,
        name: "Andrea Mantegna",
        grades: 48
    },
    {
        id: 145,
        name: "Gaia Borromini",
        grades: 74
    },
    {
        id: 196,
        name: "Luigi Grimaldello",
        grades: 68
    },
    {
        id: 102,
        name: "Piero della Francesca",
        grades: 50
    },
    {
        id: 120,
        name: "Francesca da Polenta",
        grades: 84
    }
];

const names = students.map((student) => student.name.toUpperCase());
console.log('I nomi degli studenti sono', names);

const votes = students.filter((student) => student.grades >= 70);
console.log('Gli studenti con totale di voti superiore a 70 sono', votes);

const votesId = students.filter((student) => student.grades >= 70 && student.id >= 120);
console.log('Gli studenti con totale di voti superiore a 70 e un id superiore a 120 sono', votesId);