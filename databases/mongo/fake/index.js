const faker = require('faker');

module.exports = () =>{
    for (let i = 0; i < 10000; i++) {
        const newIngress ={
            ingress: "ingress",
            date: faker.date.betweens('2022-01-01T00:00:00.000Z', '2022-12-31T00:00:00.000Z')
        }
        
    }
};