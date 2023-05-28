const http = require('http');
const rupiah = require('rupiah-format')
const host = '127.0.0.1'
const port = 3002

// Request = data masuk dari luar
// response = data keluar dari sistem

const server = http.createServer(function (request, response) {

    const nama = "al fathi";
    let uang = 50000;
    let jajan = 15000;
    let sisa = uang - jajan;
    
    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)
    
    const hasil = `saya jajan sebanyak ${jajan}, uang saya tadinya ${uang}, sekarang menjadi ${sisa}.`;
    
    response.statusCode = 200;
    response.end(hasil);

});
server.listen(port, host, '', function () {
    console.log(`server menyala di ${host}:${port}`);
});