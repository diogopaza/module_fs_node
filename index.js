var fs = require('fs')

try{

    fs.unlinkSync('1.txt')
    console.log('Arquivo ecluido com sucesso')
}catch(err){
    console.log('Erro ao deletar file')
}