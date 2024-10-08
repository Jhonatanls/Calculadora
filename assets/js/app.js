let valor1 = 0,
    valor2 = 0,
    resultado,
    operador = "";

const divPantalla = document.querySelector('#numeros-pantalla'),
      botonesOperaciones = document.querySelectorAll('.boton-op');

divPantalla.innerText = 0;

const inputValue = (numero) => {
    let aux = parseFloat(divPantalla.innerText);
    if (aux === 0){
        divPantalla.innerText = numero;
    } else {
        divPantalla.innerText += numero
        
    }
}

const limpiarPantalla = () => {
    divPantalla.innerText = 0;
    valor1 = 0;
    operador = "";
}

const operaciones = (simbolo) => {
    operador = simbolo;
    if(valor1 === 0){
        valor1 = parseFloat(divPantalla.innerText);
        divPantalla.innerText = 0;
    } else {
        switch (operador) {
			case '+':
				valor2 = divPantalla.innerText;
				valor1 = parseFloat(valor1) + parseFloat(valor2);
				break;
			case '-':
				valor2 = divPantalla.innerText;
				valor1 = parseFloat(valor1) - parseFloat(valor2);
				break;
			case '/':
				valor2 = divPantalla.innerText;
				valor1 = parseFloat(valor1) / parseFloat(valor2);
				break;
			case '*':
				valor2 = divPantalla.innerText;
				valor1 = parseFloat(valor1) * parseFloat(valor2);
				break;
			default:
				resultado = valor1;
			break;
			}
            divPantalla.innerText = valor1;
			divPantalla.innerText = 0;
			valor2 = 0;
    }
}

const calcular = () => {
    switch (operador) {
    case '+':
        resultado = valor1 + parseFloat(divPantalla.innerText);
        divPantalla.innerText = resultado;
        break;
    case '-':
        resultado = valor1 - parseFloat(divPantalla.innerText);
        divPantalla.innerText= resultado;
        break;
    case '/':
        resultado = valor1 / parseFloat(divPantalla.innerText);
        divPantalla.innerText = resultado;
        break;
    case '*':
        resultado = valor1 * parseFloat(divPantalla.innerText);
        divPantalla.innerText = resultado;
        break;
    default:
        resultado = valor1;
        divPantalla.innerText = resultado;
    break;
    }
    valor1 = "";
    operador = "";
}

const punto = () => {
    divPantalla.innerText += ".";
}

const masMenos = () => {
    if (divPantalla.innerText == "") {
        divPantalla.innerText= "-";
    } else {
        divPantalla.innerText = "";
    }
}

const porcentaje = () => {
    valor2 = parseFloat(divPantalla.innerText);
    if (operador == "*") {
        resultado = (valor1 / 100) * valor2;
    }
    divPantalla.innerText = resultado;
}

const removerClase = () => {
    botonesOperaciones.forEach( button => {
        button.classList.remove('active');
    });
}

botonesOperaciones.forEach( button => {
    button.addEventListener('click', () => {
        removerClase();
        button.classList.add('active');
    });
});

const animarBoton = (button) => {
    button.classList.add('operation');
}
          