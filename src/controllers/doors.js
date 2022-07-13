const { mongo:{doorsModel} } = require('../../databases');

module.exports ={
    getAll: async (req, res)=>{
        const doors = await doorsModel.find({},{ __v:0}); 
        res.json(doors);
    },
    createOne: async (req, res)=>{
        const { name, description} = req.body;
        const newDoor = new doorsModel({name, description });
        await newDoor.save();
        res.send(`${name} saved`);
    },
    updateOne: async (req, res)=>{
        const {id} = req.params;
        const {name, description} = req.body;
        await doorsModel.findByIdAndUpdate( id, {$set:{name, description}});
        res.send(`${name} updated`);
    },
    deleteOne: async (req, res)=>{
        const {id} = req.params;
        const deleteDoor = await doorsModel.findOneAndDelete(id);
        res.send(`${deleteDoor.name} deleted from database`);
    }
};