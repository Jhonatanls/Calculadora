let currentInput = 0;
const divPantalla = document.querySelector('#numeros-pantalla'),
      operations = ['+', '-', '*', '/'];

const inputValue = (value) => {
    if(Number.isInteger(value) && currentInput === 0){
        currentInput += value;
        divPantalla.innerText = currentInput;

    } else if (operations.includes(value)){
        currentInput += value;
        animarBoton(event.target);
    }
}

const limpiarPantalla = () => {
    currentInput = 0;
    divPantalla.innerText = '0';
}

const calcular = () => {
    try {
        currentInput = eval(currentInput);
        divPantalla.innerText = currentInput;
    } catch (error) {
        divPantalla.innerText = "Error";
    }
}

const animarBoton = (button) => {
    button.classList.add('operation');
}
          