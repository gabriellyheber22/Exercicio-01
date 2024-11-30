//Anotações estão no notion
axios.get('https://api.github.com/users/gustavolachman')
.then(function(response){ //Método usado para lidar com o caso de sucesso
    console.log(response);
})
.catch(function(error){// Método usado para lidar com o caso de erros
    console.warn(error);
});

