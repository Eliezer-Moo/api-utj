const {
  mongo: { usersModel },
} = require("../../databases");

module.exports = {
  getAll: (req, res) => {
    res.send("on line");
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
