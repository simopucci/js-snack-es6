const bikes = [
    {
        name: 'tispaccoduemila',
        weight: 2000
    },
    {
        name: 'bmx',
        weight: 100
    },
    {
        name: 'ultramegabici',
        weight: 450
    },
    {
        name: 'bmxplus4gultrapro',
        weight: 2000
    },
    {
        name: 'mountainbike',
        weight: 40
    },
    {
        name: 'spingicheparto',
        weight: 368
    }
];

const minWeightBike = Math.min(...bikes.map(bike => bike.weight));
console.log(`La bici con il peso minore pesa: ${minWeightBike}`);