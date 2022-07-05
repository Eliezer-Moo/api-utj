const {
    mongo: { roomsModel },
  } = require("../../databases");

module.exports ={

    getAll: async (req, res)=>{
        const rooms = await roomsModel.find({},{_id:0});
        res.json(rooms);
    },

    createOne: async (req, res)=>{
        const { name, doors, capacity, users, devices } = req.body;
        const newRoom =  new roomsModel({
            name, doors, capacity, users, devices
        });
        await newRoom.save();
        res.send('seved');
    },
    updateOne: (req, res)=>{
        res.send('on line');
    },
    deleteOne: (req, res)=>{
        res.send('on line');
    }
};