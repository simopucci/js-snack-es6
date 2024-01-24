const vips = [
    'Dwayne Johnson',
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin',
];

const invitedVips = vips.map((vip, index) => {
   return {
       nomeTavolo: 'Tavolo Vip',
       nomeOspite: vip,
       postoAssegnato: index + 1
   };
});

console.log(invitedVips);