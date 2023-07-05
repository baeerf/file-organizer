import fs from "fs";

// Mudança de path, de tal pasta para a nova pasta criada.
// Buscar o path da pasta e substituir aqui no arquivo

export function moveFile(nameFile, folderDestination) {
  var oldPath = "/home/fulano.tal/Downloads/" + nameFile;
  var newPath = `/home/fulano.tal/Downloads/${folderDestination}/${nameFile}`;

  fs.renameSync(oldPath, newPath);
}
