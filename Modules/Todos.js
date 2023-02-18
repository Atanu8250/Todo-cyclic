const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title: { type: String, required: true },
    status: { type: Boolean, required: true }
}, {
    versionKey: false
})


const TodosModel = mongoose.model("todo", todoSchema);

module.exports = { TodosModel }
