const { mongo:{doorsModel, devicesModel} } = require('../../databases');

module.exports ={
    getAll: async (req, res)=>{
        await doorsModel.find({},{ __v:0}).populate('room','name').exec((error,doors)=>{
            res.json(doors);
        }); 
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
    },
    addDevice: async (req,res)=>{
        const door = req.params.id;
        const {nameType} = req.body;
        const newDevice = new devicesModel({nameType, door});
        await newDevice.save();
        res.send(`${newDevice.nameType} device assigned`);
    },

    removeDevice: async(req, res)=>{
        const {id} = req.params;
        const door = req.params.id;
        const removeDevice = await devicesModel.findByIdAndUpdate(id, {$pull:{door:door},});
        res.send(`${removeDevice.nameType} device removed`);
    }
};