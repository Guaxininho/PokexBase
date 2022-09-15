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
let vazioRuim;


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
   if (inputLevel.value === "80"){
    vazioRuim = "3"
   } else if(inputLevel.value === "100"){
    vazioRuim = "2"
   }else {
    vazioRuim = inputTier.value
   }

  // resultadoAjudante.value = inputElemento.value;
  let clan;
  if(inputElemento.value === "fogo"){
    clan = "volcanic" 
  } else if (inputElemento.value === "agua" || inputElemento.value === "gelo" ) {
    clan = "seavell"
  }  else if (inputElemento.value === "pedra" || inputElemento.value === "terra" ) {
    clan = "orebound"
  }  else if (inputElemento.value === "pedra" || inputElemento.value === "terra" ) {
    clan = "orebound"
  } else if (inputElemento.value === "planta" || inputElemento.value === "inseto" ) {
    clan = "naturia"
  } else if (inputElemento.value === "lutador" || inputElemento.value === "normal" ) {
    clan = "gardestrike"
  } else if (inputElemento.value === "fantasma" || inputElemento.value === "veneno" || inputElemento.value === "dark" ) {
    clan = "malefic"
  } else if (inputElemento.value === "cristal" || inputElemento.value === "metal" ) {
    clan = "ironhard"
  } else if (inputElemento.value === "voador" || inputElemento.value === "dragao" ) {
    clan = "wingeon"
  } else if (inputElemento.value === "eletrico") {
    clan = "raibolt"
  } else if (inputElemento.value === "psiquico" || inputElemento.value === "fada" ) {
    clan = "psycraft"
  } 
  
  
  else {
    clan = "nada"
  }



  resultadoAjudante.innerHTML = 
  `{ <br />
    elemento: "${inputElemento.value}", <br />
    clan: "${clan}",<br />
    cardFundo: fundo${inputElemento.value.charAt(0).toUpperCase() + inputElemento.value.slice(1)},<br />
    icone: "./img/${inputElemento.value}.png",<br />
    icone2: ${vazioBom},<br />
    nome: "${inputNome.value}",<br />
    cenario: cenario${inputElemento.value.charAt(0).toUpperCase() + inputElemento.value.slice(1)},<br />
    imagem: "./img/${inputNome.value.charAt(0).toUpperCase() + inputNome.value.slice(1)}.gif",<br />
    funcao: "${inputFuncao.value.toLowerCase()}",<br />
    level: "${inputLevel.value}",<br />
    tier: "${vazioRuim}"<br />
  }`
}
)

