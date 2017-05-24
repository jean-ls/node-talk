/**
 * Created by Jean desenvolvimento on 24/05/2017.
 */
var http = require('https');
var fs = require('fs');
var leituraAsync = require('./leitura_async');
var leituraSync = require('./leitura_sync');
var arquivo = './node.msi';
var stream = fs.createWriteStream(arquivo);
var download = "https://nodejs.org/dist/v6.10.3/node-v6.10.3-x64.msi";
http.get(download, function (res) {
    console.log('fazendo o download do node.js');
    res.on("data", function (data) {
        stream.write(data);
    });
    res.on("end", function () {
        stream.end();
        console.log("Download finalizado!");
        leituraAsync(arquivo);
        leituraSync(arquivo);
    });
});