let currentInput = "";
const divPantalla = document.querySelector('#numeros-pantalla');

const inputValue = (value) => {
    currentInput += value;
    divPantalla.innerText = currentInput;
}

const limpiarPantalla = () => {
    currentInput = "";
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
          