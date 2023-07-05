import { createFolder } from "./service/createFolder";
import { getLocalFiles } from "./service/getLocalFiles";
import { moveFile } from "./service/moveFile";

async function app() {
  console.clear();
  const folders = [
    {
      name: "Images",
      formatter: [
        "jpg",
        "img",
        "svg",
        "jpeg",
        "JPG",
        "jfif",
        "avif",
        "png",
        "mp4",
        "mp3",
      ],
    },
    {
      name: "Compressed",
      formatter: ["zip", "rar", "7z"],
    },
    {
      name: "Installers",
      formatter: ["deb", "tar.xz", "tar.gz"],
    },
    {
      name: "Documents",
      formatter: ["pdf", "xlsx", "ods", "xls", "docx", "json"],
    },
  ];
  const files = getLocalFiles();

  for (var i = 0; i < folders.length; i++) {
    if (!files.includes(folders[i].name)) {
      createFolder(folders[i].name);
    }
  }

  for (var posicaofile = 0; posicaofile < files.length; posicaofile++) {
    const currentFile = files[posicaofile];
    const formatterFile = currentFile.split(".")[1];
    for (var posicaopasta = 0; posicaopasta < folders.length; posicaopasta++) {
      const currentFolder = folders[posicaopasta];
      for (
        var posicaoformato = 0;
        posicaoformato < folders[posicaopasta].formatter.length;
        posicaoformato++
      ) {
        const currentFormatter = currentFolder.formatter[posicaoformato];
        if (currentFile.includes(currentFormatter)) {
          moveFile(currentFile, currentFolder.name);
        }
      }
    }
  }
}

app();
