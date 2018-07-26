var fs = require('fs')

  /*
try{

  
    fs.unlinkSync('1.txt')
    console.log('Arquivo ecluido com sucesso')
}catch(err){
    console.log('Erro ao deletar file')
   

    }


    fs.unlink('1.txt', function(err){
        console.log('excluido com sucesso')
    })
 */

 fs.rename('teste/2.txt', '3.txt', function(err){
     if (err) console.log('Deu erro')
        
 })