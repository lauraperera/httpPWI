/*Como abrir um servidor http*/

//chamar módulo do js
const http = require("http")

//estrutura da rota
http.createServer(function(req, res){
    res.end("hello world")
}).listen(8081) //função listen pra dizer qual porta está utilizando

console.log("Servidor rodando na porta 8081...")

/*Pra acessar: browser>localhost:8081*/