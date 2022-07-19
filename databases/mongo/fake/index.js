const faker = require('faker');
const {ingressModel, egressModel} = require('../');

module.exports = async () =>{
    for (let i = 0; i < 10; i++) {
        const newIngress = new ingressModel(   {
            ingress: "ingress",
            date: faker.date.between('2022-12-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z')
        });
        await newIngress.save();

        const newEgress = new egressModel({
            egress: 'egress',
            date: faker.date.between('2022-12-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z')
        });

        await newEgress.save();
        
    }
};