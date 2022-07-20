const {
  mongo: { usersModel },
} = require("../../databases");
const { bcryptHelper:{encryptPassword}} = require('../../helpers')

module.exports = {
  getAll: async (req, res) => {
    const users = await usersModel.find({},{__v:0,password:0});
    res.json(users);
  },
  createOne: async (req, res) => {
    const { name, email, password } = req.body;
    const encryptedPassword = await encryptPassword(password);
    const newUser = new usersModel({
      name,
      email,
      password:encryptedPassword
    });
    await newUser.save();
    res.send(`${newUser.name} saved`);
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
  signIn:(req,res) => {
    res.send('signin')
  },
  signUp:(req,res) =>{
    res.send('sign up')
  }
};
