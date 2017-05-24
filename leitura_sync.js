var fs = require('fs');
var leituraSync = function (arquivo) {
    console.log("Fazendo a leitura síncrona");
    var inicio = new Date().getTime();
    fs.readFileSync(arquivo);
    var fim = new Date().getTime();
    console.log("Bloqueio Síncrono... " +(fim-inicio) + " ms");
};
module.exports = leituraSync;