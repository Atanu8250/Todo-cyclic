const { TodosModel } = require("../Modules/Todos")


const getTodos = async (req, res) => {

    try {
        // db.products.find( { title: { $regex: /.*/i } } ) // ! try searching with regex
        let todos = await TodosModel.find();
        res.status(201).json(todos)
    } catch (error) {
        console.log("❌ Error:", error.message);
        res.status(404)
    }
}


const postTodo = async (req, res) => {
    try {
        let todo = new TodosModel(req.body)
        await todo.save();
        res.status(201).json("Post Created.")
    } catch (error) {
        console.log("❌ Error:", error.message);
        res.status(404)
    }
}


const patchTodo = async (req, res) => {
    try {
        await TodosModel.findByIdAndUpdate(req.params.todoId, req.body);
        res.status(200).json("Post updated.")
    } catch (error) {
        console.log("❌ Error:", error.message);
        res.status(404)
    }
}

const deleteTodo = async (req, res) => {
    try {
        await TodosModel.findByIdAndDelete(req.params.todoId);
        res.status(200).json("Post Delted.")
    } catch (error) {
        console.log("❌ Error:", error.message);
        res.status(404)
    }
}

module.exports = { getTodos, postTodo, patchTodo, deleteTodo }