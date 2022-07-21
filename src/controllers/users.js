const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../../config');

const {
  mongo: { usersModel },
} = require("../../databases");
const { bcryptHelper:{encryptPassword, comparePassword }} = require('../../helpers')

module.exports = {
  getAll: async (req, res) => {
    const users = await usersModel.find({},{__v:0,password:0});
    res.json(users);
  },
  createOne: async (req, res) => {
    const user = await usersModel.findOne({email: req.body.email});
    if(user) return res.status(400).send(`the email ${user.email} exists in the system`);
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
  signIn: async (req,res) => {
    const {email, password} = req.body;
    const userFound = await usersModel.findOne({email},{__v:0});
    if(!userFound) return res.send(`Email ${email} not registered`);
    const isCorrectPassword = await comparePassword(password, userFound.password);
    if(!isCorrectPassword) return res.send('Email or password is incorrect');
    const tokenjwt = jwt.sign(JSON.stringify(userFound), jwtSecret);
    res.json({message:`${userFound.email} welcome `, tokenjwt});
  },
  signUp:(req,res) =>{
    res.send('sign up')
  }
};
