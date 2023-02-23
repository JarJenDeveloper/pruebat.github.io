const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btnCalcular = document.getElementById('btn-calcular');
const pResult = document.getElementById('result')

form.addEventListener('submit', sumarInput);



function sumarInput(e){
    e.preventDefault();
   const sumaInputs = input1.value + input2.value;
   pResult.innerText = 'Resultado: ' + sumaInputs;
}



