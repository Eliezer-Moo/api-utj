const { exec } = require("child_process");
const {
    mongo: { devicesModel },
} = require("../../databases");

module.exports = {
    getAll: async (req, res) => {
        await devicesModel.find({}, { _id: 0, __v: 0 }).populate('door','name').exec((error,devices)=>{

            res.json(devices);
        });
    },
    createOne: async (req, res) => {
        const { nameType, door, users } = req.body;
        const newDevice = new devicesModel({ nameType, door, users });
        res.send(`${nameType} saved`);
        res.send("saved");
    },
    updateOne: async (req, res) => {
        const { id } = req.params;
        const { nameType, door, users } = req.body;
        await devicesModel.findByIdAndUpdate(id, {
            $set: { nameType, door, users },
        });
        res.send(`${nameType} updated`);
        res.send("on line");
    },
    deleteOne: async (req, res) => {
        const {id} = req.params;
        const removeDevice = await devicesModel.findOneAndDelete(id);
        console.log(removeDevice);
        res.send(`${removeDevice.nameType} deleted from database`);
    },
};
