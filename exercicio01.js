const fs = require("fs");

function lerArquivo(pathArquivo) {
  fs.readFile(pathArquivo, "utf8", (err, data) => {
    if (err) {
      console.log("Erro ao ler arquivo");
      return;
    }
    console.log("conteudo", data);
  });
}

function escreverNoArquivo(pathArquivo,conteudo) {
  fs.writeFile(pathArquivo, conteudo, "utf8", (err) => {
    if (err) {
      console.log("Erro ao escrever no arquivo", err);
      return;
    }
    console.log("conteúdo inserido");
  });
}

module.exports = {lerArquivo, escreverNoArquivo}