// imporotante o modulo path nativo do Nodejs
// requie vem do commonJs , É como o Nodejs Importa e exporta módulos ("arquivo")
const { log } = require('console')
var path = require('path')

var filename = path.basename('/teste/teste.js')

console.log('nome do arquivo' ,filename);

var folder = path.dirname('teste.js')

console.log('nome da pasta',folder);