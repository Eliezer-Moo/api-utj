const { mongo:{egressModel}} = require("../../databases"); 

module.exports ={
    getAll: async (req, res)=>{
        const egress = await egressModel.find({},{_id:0, __v:0});
        res.json(egress);
    },
    createOne: async (req, res)=>{
        const {egres, device, door} = req.body;
        const newEgress = new egressModel({egres, device, door});
        await newEgress.save();
        res.send('saved');
    },
    updateOne: (req, res)=>{
        res.send('on line');
    },
    deleteOne: (req, res)=>{
        res.send('on line');
    }
};