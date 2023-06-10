function calculaMedia() { 
    var input = document.getElementById("inputValues").value;
    var numeros = input.split(",");

    var soma = 0, i;
    for (i = 0; i < numeros.length; i++) {
      soma += parseFloat(numeros[i]);
    }

    var media = soma / numeros.length;
    
    document.getElementById("result").innerHTML = "A média dos números é: " + media.toFixed(2); 
  }

window.onload = init;