const {
    mongo: { roomsModel, doorsModel },
} = require("../../databases");

module.exports = {
    getAll: async (req, res) => {
        const rooms = await roomsModel.find({}, { __v: 0 });
        res.json(rooms);
    },
    //Al crear un room solo se omiten los dispositivos para luego añadirlo en la actualización
    createOne: async (req, res) => {
        const { name, description, capacity, doors, users } = req.body;
        const newRoom = new roomsModel({
            name,
            description,
            doors,
            capacity,
            users,
        });
        await newRoom.save();
        res.send(`${name} saved`);
    },
    //En la actualización de un room se añade los dispositivos instalados en sus puertas
    updateOne: async (req, res) => {
        const { id } = req.params;
        const { name, description, doors, capacity, users, } = req.body;
        await roomsModel.findByIdAndUpdate(id, {
            $set: { name, description, doors, capacity, users },
        });
        res.send(`${name} updated`);
        res.send("on line");
    },
    deleteOne: (req, res) => {
        res.send("on line");
    },

    addDoor:async( req, res)=>{
        const room = req.params.id;
        const {name, description} = req.body;
        const newDoor = new doorsModel({name, description, room});
        await newDoor.save();
        res.send(`${doorsModel.name} door added`)
    }
};
