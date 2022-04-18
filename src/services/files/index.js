import express from "express";
import multer from "multer"
import { saveFiles, deleteFile, renameFile, readFiles} from "../../library/fs-tools.js";

const filesRouter = express.Router()

filesRouter.get("/", async (req, res, next) => {
    try {
        const filesFound = []
        const files = await readFiles()
        files.forEach(file => {
            const fileData = {name: file,
            url: `http://localhost:3001/files/${file}`, size: "00", 
            downloadURL: `http://localhost:5001/files/${file}`}
            filesFound.push(fileData)})
        res.send(filesFound)
    } catch(error){
        next(error)
    }
})

filesRouter.post("/", multer().single("file"), async (req, res, next) => {
try {
    await saveFiles(req.file.originalname, req.file.buffer)
    res.status(201).send({message: "File uploaded"})
} catch(error) {
    next(error)
}
})

filesRouter.delete("/:fileName", async (req, res, next) => {
    try {
        const fileName = req.params.fileName
        await deleteFile(fileName)
        res.send({message: "File deleted"})
    } catch(error) {
        next(error)
    }
}
)
filesRouter.put("/:fileName", async (req, res, next) => {
    try {
        const fileName = req.params.fileName
        const fileArray = fileName.split(".")
        const index = fileArray.length-1
        const fileExtension =  fileArray[index]
        const newFileName = `${req.body.name}.${fileExtension}`
        await renameFile(fileName, newFileName)
        res.send({message: "File renamed"})
    } catch(error) {
        next(error)
    }
}
)


/*
Send a GET request to get all files or download a file.
Send a PUT request to rename a file.
Send a DELETE request to delete a file.
Send a POST request to upload a file

*/


export default filesRouter