const express = require("express");

const todosRouter = express.Router();

const { getTodos, postTodo, patchTodo, deleteTodo } = require("../Controllers/Todos");


/**
 * @swagger
 * components:
 *  schemas:
 *      Todos:
 *          type: object
 *          properties:
 *              title:
 *                  type: string
 *                  description: The auto-generated id of user
 *              status:
 *                  type: boolean
 *                  description: If the task is completed then it's value will be true otherwise false
 * */

/**
 * @swagger
 * tags:
 *  name: Todos
 *  description: All the API routes related to Todos
 * */

/**
 * @swagger
 * /todos:
 *  get:
 *      summary: This will get all the Todos data from the database
 *      tags: [Todos]
 *      responses:
 *          200:
 *              description: The list of all the users
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          item:
 *                              $ref: "#/components/schemas/Todos"
 *          404: 
 *              description: Getting error at the time of fetchin data
 * */
todosRouter.get("/", getTodos)

/**
 * @swagger
 * /todos/create:
 *  post:
 *      summary: This will create one todo in the database
 *      tags: [Todos]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/Todos"
 *      responses:
 *          201:
 *              description: The todo is successfully created
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          item:
 *                              $ref: "#/components/schemas/Todos"
 *          404: 
 *              description: Something went wrong
 *          
 * */
todosRouter.post("/create", postTodo)

/**
 * @swagger
 * /todos/{todoId}:
 *  patch:
 *      summary: This will update the todo in the database
 *      tags: [Todos]
 *      parameters:
 *        - in: path
 *          name: todoId
 *          schema:
 *              type: string
 *          required: true
 *          description: The Todo id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/Todos"
 *      responses:
 *          200:
 *              description: The todo is successfully updated
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          item:
 *                              $ref: "#/components/schemas/Todos"
 *          404: 
 *              description: Todo not found
 *          
 * */
todosRouter.patch("/:todoId", patchTodo)

/**
 * @swagger
 * /todos/{todoId}:
 *  delete:
 *      summary: This will delete the todo in the database
 *      tags: [Todos]
 *      parameters:
 *        - in: path
 *          name: todoId
 *          schema:
 *              type: string
 *          required: true
 *          description: The Todo id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/Todos"
 *      responses:
 *          200:
 *              description: The todo is successfully deleted
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          item:
 *                              $ref: "#/components/schemas/Todos"
 *          404: 
 *              description: Todo not found
 *          
 * */
todosRouter.delete("/:todoId", deleteTodo)


module.exports = { todosRouter }