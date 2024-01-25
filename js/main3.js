const bikes = [
    {
        name: 'tispaccoduemila',
        weight: 2000
    },
    {
        name: 'bmx',
        weight: 10
    },
    {
        name: 'ultramegabici',
        weight: 12.4
    },
    {
        name: 'bmxplus4gultrapro',
        weight: 21
    },
    {
        name: 'mountainbike',
        weight: 7
    },
    {
        name: 'spingicheparto',
        weight: 777
    }
];

let minWeightBike = bikes[0];

for (let bike of bikes) {
    if (bike.weight < minWeightBike.weight){
        minWeightBike = bike;
    }
};
console.log(minWeightBike);

const {name, weight} = minWeightBike;
console.log(`La ${name} con il peso di ${weight}Kg è la bici più leggera`);