import express from "express";
import cors from "cors"
import {join} from "path"
import { badRequestHandler, notAuthorizedHandler, notFoundHandler, genericServerErrorHandler } from "./errorHandlers.js";
import filesRouter from "./services/files/index.js";

const port = 3001
const server = express()
const publicFolderPath = join(process.cwd(), "./public")

// ************MIDDLEWARES **********
server.use(express.json())
server.use(cors())
server.use(express.static(publicFolderPath))

// **********ENDPOINT****************
server.use("/files", filesRouter) 

// ************ ERRORHANDLERS ******************
server.use(badRequestHandler)
server.use(notAuthorizedHandler)
server.use(notFoundHandler),
server.use(genericServerErrorHandler)

server.listen(port, () => {console.log("Server running on port " + port)})