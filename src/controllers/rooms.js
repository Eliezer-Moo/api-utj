const {
    mongo: { roomsModel },
  } = require("../../databases");

module.exports ={

    getAll: async (req, res)=>{
        const rooms = await roomsModel.find({},{_id:0, __v:0});
        res.json(rooms);
    },

    createOne: async (req, res)=>{
        const { name, description, doors, capacity, users } = req.body;
        const newRoom =  new roomsModel({
            name, description, doors, capacity, users
        });
        await newRoom.save();
        res.send(`${name} saved`);
    },
    updateOne: (req, res)=>{
        res.send('on line');
    },
    deleteOne: (req, res)=>{
        res.send('on line');
    }
};