const mongoose = require("mongoose")
require("dotenv").config()

const mongooseConnect = mongoose.connect(process.env.mongoURL)

module.exports = { mongooseConnect }