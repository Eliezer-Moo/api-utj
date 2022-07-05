const {
  mongo: { usersModel },
} = require("../../databases");

module.exports = {
  getAll: async (req, res) => {
    const users = await usersModel.find({},{_id:0,__v:0,password:0});
    res.json(users);
  },
  createOne: async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new usersModel({
      name,
      email,
      password,
    });
    await newUser.save();
    res.send("saved");
  },
  updateOne: (req, res) => {
    res.send("on line");
  },
  deleteOne: (req, res) => {
    res.send("on line");
  },
};
