const momment = require('moment');
const {mongo:{ingressModel}} = require('../../databases');

module.exports ={
    getAll: async (req, res)=>{
        //const ingress = await ingressModel.find({},{_id:0, __v:0})
        
        const ingress = await ingressModel.find({},{_id:0, __v:0, device:0, ingress:0}).sort({date:1})
        ingress.forEach(dateC =>{
            let fecha = momment(dateC.date).format('L');
            ingress.date = fecha;
        });
        
        res.json(ingress);
},
    createOne: async (req, res)=>{
        const {ingres, device, door } = req.body;
        const newIngress = new ingressModel({ingres, device, door});
        await newIngress.save();
        res.send('saved');
    },
    updateOne: (req, res)=>{
        res.send('on line');
    },
    deleteOne: (req, res)=>{
        res.send('on line');
    }
};