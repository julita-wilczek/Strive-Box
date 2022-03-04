import fs from "fs-extra"
import {join} from "path"
import { readdirSync } from "fs"


const { writeFile, remove, rename} = fs
const folderPath = join(process.cwd(), "./public/files")

export const getPosts = () => readJSON(folderPath)
export const saveFiles = (filename, contentAsABuffer) => {writeFile(join(folderPath, filename), contentAsABuffer)}
export const deleteFile = (filename) => {remove(join(folderPath, filename))}
export const renameFile = (filename, newfilename) => {rename(join(folderPath, filename), join(folderPath, newfilename))}
export const readFiles = () => readdirSync(folderPath) 



/*

fs.readdir(__dirname, (err, files) => {
  if (err)
    console.log(err);
  else {
    console.log("\nCurrent directory filenames:");
    files.forEach(file => {
      console.log(file);
    })
  }
})



 fs.rename(path, newPath, (err, data) =>
          err
            ? rej(err)
            : res(data));


            
*/












/*


import fs from "fs-extra"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const {readJSON, writeJSON, writeFile} = fs
const getJSONPath = (filename) => join(join(dirname(fileURLToPath(import.meta.url)), "../data"), filename)
const postsJSONPath = getJSONPath("posts.json")
const authorsJSONPath = getJSONPath("authors.json")
const authorsPublicFolderPath = join(process.cwd(), "./public/img/authors") //cwd gives un the root folder, here "Back-end rest API"
const postsPublicFolderPath = join(process.cwd(), "./public/img/blogPosts")

export const getPosts = () => readJSON(postsJSONPath) // no need to parse, it's already included
export const getAuthors = () => readJSON(authorsJSONPath) // no need to parse, it's already included
export const updatePosts = (array) => writeJSON(postsJSONPath, array) // no need to stringify, it's already included
export const updateAuthors = (array) => writeJSON(authorsJSONPath, array) // no need to stringify, it's already included
export const saveAvatars = (filename, contentAsABuffer) => writeFile(join(authorsPublicFolderPath, filename), contentAsABuffer)

*/