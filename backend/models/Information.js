const mongoose = require("mongoose");
const InfoSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  logo: { type: String, required: true },
  email: { type: String, required: true },
  open_hours: { type: String, required: true },
});
const Info = mongoose.model("Info", InfoSchema);
module.exports = Info;