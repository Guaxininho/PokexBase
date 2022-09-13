// FUNDOS
const fundoPlanta = "linear-gradient(to bottom, #c9fac6 0%,  #98fc91 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)";
const fundoLutador = "linear-gradient(to bottom, rgb(208, 147, 101) 0%, rgb(204, 130, 73) 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)";




const ListaDeOffTanks = [
// PLANTA
{
  cardFundo: fundoPlanta,
  icone: "./img/grass.png",
  icone2: "",
  nome: "Gogoat",
  cenario: "url(../img/fundoNature.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)",
  imagem: "./img/Gogoat.gif",
  elemento: "naturia",
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{
  cardFundo: fundoPlanta,
  icone: "./img/grass.png",
  icone2: "",
  nome: "Sceptile",
  cenario: "url(../img/fundoNature.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)",
  imagem: "./img/Sceptile.gif",
  elemento: "naturia",
  funcao: "offtank",
  level: "80",
  tier: "3"
},

// LUTADOR
{
  cardFundo: fundoLutador,
  icone: "./img/lutador.png",
  icone2: "",
  nome: "Elite Hitmontop",
  cenario:"url(../img/fundoLutador.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)",
  imagem: "./img/Elitehitmontop.gif",
  elemento: "lutador",
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{
  cardFundo: fundoLutador,
  icone: "./img/lutador.png",
  icone2: "",
  nome: "Mega Lopunny",
  cenario:"url(../img/fundoLutador.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)",
  imagem: "./img/MegaLopunny.gif",
  elemento: "lutador",
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// RAIBOLT
{
  cardFundo: "linear-gradient(to bottom, #f7e172 0%,  #e7d26d 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)",
  icone: "./img/eletrico.png",
  icone2: "",
  nome: "Electabuzz",
  cenario: "url(../img/fundoEletrico.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)",
  imagem: "./img/Electabuzz.gif",
  elemento: "elétrico",
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{
  cardFundo: "linear-gradient(to bottom, #f7e172 0%,  #e7d26d 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)",
  icone: "./img/eletrico.png",
  icone2: "",
  nome: "Light Ball Pikachu",
  cenario: "url(../img/fundoEletrico.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)",
  imagem: "./img/LightBallPikachu.gif",
  elemento: "elétrico",
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// FOGO 
{
  cardFundo: "linear-gradient(to bottom, #f7e172 0%,  #e7d26d 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)",
  icone: "./img/fogo.png",
  icone2: "",
  nome: "Arcanine",
  cenario: "url(../img/fundofogo.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)",
  imagem: "./img/Arcanine.gif",
  elemento: "fogo",
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{
  cardFundo: "linear-gradient(to bottom, #f7e172 0%,  #e7d26d 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)",
  icone: "./img/fogo.png",
  icone2: "",
  nome: "Magmar",
  cenario: "url(../img/fundoFogo.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)",
  imagem: "./img/Magmar.gif",
  elemento: "fogo",
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// ÁGUA
{
  icone: "./img/agua.png",
  icone2: "",
  nome: "Shiny Vaporeon",
  imagem: "./img/ShinyVaporeon.gif",
  elemento: "água",
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{
  icone: "./img/agua.png",
  icone2: "",
  nome: "Shiny Giant Magikarp",
  imagem: "./img/ShinyMagikarp.gif",
  elemento: "água",
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// PEDRA
{
  icone: "./img/Pedra.png",
  icone2: "",
  nome: "Shiny Golem",
  imagem: "./img/ShiGolem.gif",
  elemento: "pedra",
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{
  icone: "./img/Pedra.png",
  icone2: "./img/agua.png",
  nome: "Omastar",
  imagem: "./img/Omastar.gif",
  elemento: ["água","pedra"],
  funcao: "offtank",
  level: "80",
  tier: "3"
},

// VOADOR
{
  icone: "./img/voador.png",
  icone2: "",
  nome: "Shiny Fearow",
  imagem: "./img/ShiFearow.gif",
  elemento: ["normal","voador"],
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{ icone:"./img/voador.png",
  icone2:"./img/inseto.png",
  nome: "Shiny Beautifly",
  imagem: "./img/ShinyBeautifly.gif",
  elemento: ["voador", "inseto"],
  funcao: "offtank",
  level: "80",
  tier: "3"
},

// VENENO 
{ 
  icone:"./img/veneno.png",
  icone2: "",
  nome: "Shiny Arbok",
  imagem: "./img/ShinyArbok.gif",
  elemento: "veneno",
  funcao: "offtank",
  level: "80",
  tier: "3"
},
{
  icone:"./img/veneno.png",
  icone2: "",
  nome: "Shiny Qwilfish",
  imagem: "./img/ShinyQwilfish.gif",
  elemento: "veneno",
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// FADA
{
  icone:"./img/fada.png",
  icone2: "",
  nome: "Florges",
  imagem: "./img/Florges.gif",
  elemento: "fada",
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{
  icone:"./img/fada.png",
  icone2: "",
  nome: "Sylveon",
  imagem: "./img/Sylveon.gif",
  elemento: "fada",
  funcao: "offtank",
  level: "80",
  tier: "3"
},

// PSIQUICO
{
  icone:"./img/psiquico.png",
  icone2: "",
  nome: "Wobbuffet",
  imagem: "./img/Wobbuffet.gif",
  elemento: "psíquico",
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// DARK
{
  icone:"./img/dark.png",
  icone2: "",
  nome: "Mightyena",
  imagem: "./img/Mightyena.gif",
  elemento: "dark",
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// TERRA
{
  icone:"./img/terra.png",
  icone2: "./img/metal.png",
  nome: "Steelix",
  imagem: "./img/Steelix.gif",
  elemento: ["terra", "metal"],
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// METAL
{
  icone:"./img/metal.png",
  icone2: "",
  nome: "Shiny Forretress",
  imagem: "./img/ShinyForretress.gif",
  elemento: "metal",
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{
  icone:"./img/metal.png",
  icone2: "./img/psiquico.png",
  nome: "Metang",
  imagem: "./img/Metang.gif",
  elemento: ["metal", "psíquico"],
  funcao: "offtank",
  level: "80",
  tier: "3"
},
// GELO
{
  icone:"./img/gelo.png",
  icone2: "",
  nome: "Beartic",
  imagem: "./img/Beartic.gif",
  elemento: "gelo",
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// INSETO
{
  icone:"./img/inseto.png",
  icone2: "./img/voador.png",
  nome: "Vespiquen",
  imagem: "./img/vespiquen.gif",
  elemento: ["inseto", "voador"],
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{
  icone:"./img/inseto.png",
  icone2: "",
  nome: "Accelgor",
  imagem: "./img/Accelgor.gif",
  elemento: "inseto",
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// FANTASMA
{
  icone: "./img/fantasma.png",
  icone2: "",
  nome: "Cofagrigus",
  imagem: "./img/Cofagrigus.gif",
  elemento: "fantasma",
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{
  icone: "./img/fantasma.png",
  icone2: "",
  nome: "Mismagius",
  imagem: "./img/mismagius.gif",
  elemento: "fantasma",
  funcao: "offtank",
  level: "100",
  tier: "2"
}
];

// ZONA DE TESTE
const imagemPoke = document.querySelectorAll('.imagemPoke');
// imagemPoke.src = mismagius.imagem;
const nomePoke = document.querySelectorAll('.tituloPoke');
// nomePoke.textContent = mismagius.nome;
const iconePoke = document.querySelectorAll('.iconeElemento');
const iconePoke2 = document.querySelectorAll('.iconeElemento2');
const elementoPoke = document.querySelectorAll('.elemento');
const funcaoPoke = document.querySelectorAll('.funcao');
const levelPoke = document.querySelectorAll('.level');
const tierPoke = document.querySelectorAll('.tier');
const cards = document.querySelectorAll('.card');
const cenarios = document.querySelectorAll('.caixaDaImagem');

for (let i = 0; i < 8; i++) {
  cenarios[i].style.backgroundImage = ListaDeOffTanks[i].cenario;
  cards[i].style.backgroundImage = ListaDeOffTanks[i].cardFundo;
  iconePoke[i].src = ListaDeOffTanks[i].icone;
  imagemPoke[i].src = ListaDeOffTanks[i].imagem;
  nomePoke[i].textContent = ListaDeOffTanks[i].nome;
  elementoPoke[i].textContent = ListaDeOffTanks[i].elemento;
  funcaoPoke[i].textContent = ListaDeOffTanks[i].funcao;
  levelPoke[i].textContent = ListaDeOffTanks[i].level;
  tierPoke[i].textContent = ListaDeOffTanks[i].tier;
  if(ListaDeOffTanks[i].icone2 === ""){
    iconePoke2[i].classList.add("corta")
  } else {
    iconePoke2[i].src = ListaDeOffTanks[i].icone2;
  }
  
}

const search = document.querySelector('#inputPesquisa');
const listaVazia = [];


for (let i = 0; i < cards.length; i++) {
  search.addEventListener("input", (e)=> {
    let digitado = e.target.value.toLowerCase()
    const visivel = ListaDeOffTanks[i].nome.toLowerCase().includes(digitado)
      cards[i].classList.toggle("corta", !visivel)
  })

}