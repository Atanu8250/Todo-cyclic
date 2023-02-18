const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
require("dotenv").config()

const { mongooseConnect } = require("./db");
const { todosRouter } = require("./Routes/Todos.routes");
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Full-stack Todo',
            version: '1.0.0'
        },
        servers: [
            {
                url: "http://localhost:8080"
            },
            {
                url: "https://gleaming-gray-swallow.cyclic.app/"
            }
        ]
    },
    apis: ['./routes/*.js'],
}

const openapiSpecification = swaggerJSDoc(options)

const app = express();
app.use(cors())
app.use(express.json())
app.use("/todos", todosRouter)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification))


app.get("/", (req, res) => {
    res.send("Welcome to HOME Page\nCheckout '/api-docs' endpoint for the api documention")
})

app.listen(process.env.port, async () => {
    try {
        console.log("⏳ MongoDB connecting....");
        await mongooseConnect
        console.log("✅ MongoDB connected Successfully.");
    } catch (error) {
        console.log('❌ error:', error.message)
    }
    console.log(`Server is live: http:localhost:${process.env.port}`);
})
