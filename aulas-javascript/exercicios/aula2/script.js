function saoDiferentes(){    
    var num_1 = document.querySelector('#numero1').valueAsNumber;
    var num_2 = document.querySelector('#numero2').valueAsNumber;

    var resultado = document.createElement('div');
    
    if(num_1 != num_2){
        resultado.innerText = 'Os números são diferentes. Clique resetar para o próximo teste.'
        resultado.style.color = 'green'
    }else if(num_1 == num_2){
        resultado.innerText = 'Os números são iguais. Clique resetar para o próximo teste.'
        resultado.style.color = 'red'
    }
    resultado.className = 'resultado'
    document.body.append(resultado)
}

function resetar(){
    document.getElementById("numero1").valueAsNumber = 0;
    document.getElementById("numero2").valueAsNumber = 0;
    window.location.reload()
}

