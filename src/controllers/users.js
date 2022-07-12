const {
  mongo: { usersModel },
} = require("../../databases");

module.exports = {
  getAll: async (req, res) => {
    const users = await usersModel.find({},{__v:0,password:0});
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
    res.send(`${name} saved`);
  },
  updateOne: async (req, res) => {
    const {id} = req.params;
    const {name, email, password, status} = req.body;
    await usersModel.findByIdAndUpdate(id, {$set:{name, email, password, status}});
    res.send(`${name} updeted`);
  },
  deleteOne: (req, res) => {
    res.send("on line");
  },
};
