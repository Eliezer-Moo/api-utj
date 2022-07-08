const { mongo:{doorsModel} } = require('../../databases');

module.exports ={
    getAll: async (req, res)=>{
        const doors = await doorsModel.find({},{_id:0, __v:0}); 
        res.json(doors);
    },
    createOne: async (req, res)=>{
        const { name, description} = req.body;
        const newDoor = new doorsModel({name, description });
        await newDoor.save();
        res.send(`${name} saved`);
    },
    updateOne: (req, res)=>{
        res.send('on line');
    },
    deleteOne: (req, res)=>{
        res.send('on line');
    }
};