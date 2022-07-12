const {
    mongo: { devicesModel },
} = require("../../databases");

module.exports = {
    getAll: async (req, res) => {
        const devices = await devicesModel.find({}, { _id: 0, __v: 0 });
        res.json(devices);
    },
    createOne: async (req, res) => {
        const { nameType, room, door, users } = req.body;
        const newDevice = new devicesModel({ nameType, room, door, users });
        res.send(`${nameType} saved`);
        res.send("saved");
    },
    updateOne: async (req, res) => {
        const { id } = req.params;
        const { nameType, room, door, users } = req.body;
        await devicesModel.findByIdAndUpdate(id, {
            $set: { nameType, room, door, users },
        });
        res.send(`${nameType} updated`);
        res.send("on line");
    },
    deleteOne: (req, res) => {
        res.send("on line");
    },
};
