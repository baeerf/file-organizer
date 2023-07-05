import fs from "fs";

// Criar uma pasta para certo tipo de arquivo
// Exemplo: Pasta de imagem só vai imagem e assim por diante

// Buscar o path da pasta e substituir aqui no arquivo

export function createFolder(name) {
  return fs.mkdirSync("/home/fulano.tal/Downloads/" + name);
}
