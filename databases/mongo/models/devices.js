const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  nameType: {
    type: String,
    required: true,
  },
  room: [
    {
      type: Schema.Types.ObjectId,
      refs: "rooms",
    },
  ],
  door: [
    {
      type: Schema.Types.ObjectId,
      refs: "doors",
    },
  ],
  users: [
    {
      type: Schema.Types.ObjectId,
      refs: "users",
    },
  ],
});

const model = mongoose.model("devices", schema);
module.exports = model;
