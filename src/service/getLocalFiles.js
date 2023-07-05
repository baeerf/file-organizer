import fs from "fs"

// Local onde ira buscar os arquivos
// Buscar o path da pasta e substituir aqui no arquivo

export function getLocalFiles(){
    const files = fs.readdirSync("/home/fulano.tal/Downloads")
    return files;
}