const botaoAjudante = document.querySelector('#butonajudante');

const inputElemento = document.querySelector('#elementoAjudante');
const inputElemento2 = document.querySelector('#elementoAjudante2');
const inputNome = document.querySelector('#nomeAjudante');
const inputFuncao = document.querySelector('#funcaoAjudante');
const inputLevel = document.querySelector('#levelAjudante');
const inputTier = document.querySelector('#tierAjudante');

const resultadoAjudante = document.querySelector('#resultadoAjudante');
let vazioBom;
const botaoCopiar = document.querySelector("#copyAjudante");
const textoCopiadoMsg = document.querySelector("#textoCopiado");


// resultadoAjudante.value = inputElemento.value;
botaoCopiar.addEventListener('click', ()=>{
  navigator.clipboard.writeText(resultadoAjudante.textContent)
  textoCopiadoMsg.classList.remove('corta')
  setTimeout(function(){
    textoCopiadoMsg.classList.add('corta')}, 1000)

})





botaoAjudante.addEventListener('click', ()=>{
  if (inputElemento2.value === ""){
    vazioBom = `""`
   } else {
     vazioBom = `"./img/${inputElemento2.value}.png"`
   }
  // resultadoAjudante.value = inputElemento.value;
  let clan;
  if(inputElemento.value === "fogo"){
    clan = "volcanic" 
  } else if (inputElemento.value === "agua") {
    clan = "seavell"
  } else {
    clan = "nada"
  }



  resultadoAjudante.innerHTML = 
  `{ <br />
    elemento: "${inputElemento.value}", <br />
    clan: ${clan},<br />
    cardFundo: "fundo${inputElemento.value.charAt(0).toUpperCase() + inputElemento.value.slice(1)}",<br />
    icone: "./img/${inputElemento.value}.png",<br />
    icone2: ${vazioBom},<br />
    nome: "${inputNome.value}",<br />
    cenario: cenario${inputElemento.value.charAt(0).toUpperCase() + inputElemento.value.slice(1)},<br />
    funcao: "${inputFuncao.value.toLowerCase()}",<br />
    level: "${inputLevel.value}",<br />
    tier: "${inputTier.value}"<br />
  }`
}
)

