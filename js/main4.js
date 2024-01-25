const teams = [
    {
      nome: 'Team Turtle',
      score: 0,
      foul: 0,
    },
    {
      nome: 'Team Frog',
      score: 0,
      foul: 0,
    },
    {
      nome: 'Team Penguin',
      score: 0,
      foul: 0,
    },
    {
      nome: 'Team Hippopotamus',
      score: 0,
      foul: 0,
    },
    {
      nome: 'Team Seal',
      score: 0,
      foul: 0,
    },
    {
      nome: 'Team Crocodile',
      score: 0,
      foul: 0,
    },
    {
      nome: 'Team Dolphin',
      score: 0,
      foul: 0,
    },
];

for(let team of teams){
    team.score = generateRandomNum(1, 100);
    team.foul = generateRandomNum(1, 50);
}
console.log(teams);

let newTeams = [];
for(let team of teams) {
    const {nome, foul} = team;
    newTeams.push({nome, foul}); 
}
console.log(newTeams);





// ## FUNCTIONS

function generateRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};