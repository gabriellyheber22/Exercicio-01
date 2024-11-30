//Anotações estão no notion
var minhaPromise = function () {

    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/gabriellyheber22');
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) { // O quatro informa se já retornou do servidor
                if(xhr.status === 200){ // Informa que a requisição deu certo
                   resolve(JSON.parse(xhr.responseText)) 
                }else{
                    reject('Erro na requisição');
                }
            }
        }

    })
}
minhaPromise()
.then(function(response){ //Método usado para lidar com o caso de sucesso
    console.log(response);
})
.catch(function(error){ //Método usado para lidar com o caso de erros
    console.warn(error);
});

