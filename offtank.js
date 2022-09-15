// VARIAVEIS DE FUNDO DAS CARTAS
const fundoPlanta = "linear-gradient(to bottom, #74d76d 0%,  #78e071 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)";
const fundoLutador = "linear-gradient(to bottom, rgb(208, 147, 101) 0%, rgb(204, 130, 73) 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)";
const fundoEletrico = "linear-gradient(to bottom, #f7e172 0%,  #e7d26d 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)";
const fundoFogo = "linear-gradient(to bottom, #F26745 0%,  #e06040 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)";
const fundoAgua = "linear-gradient(to bottom, #5EBFED 0%,  #5CC8F2 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)";
const fundoPedra = "linear-gradient(to bottom, #bdbdbde7 0%,  #bbb3b0e7 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)";
const fundoVoador = "linear-gradient(to bottom, #B8D9D9 0%,  #c5e8e8 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)";
const fundoVeneno = "linear-gradient(to bottom, #7F58A6 0%,  #A884BF 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)";
const fundoFada = "linear-gradient(to bottom, #DB4D83 0%,  #E37299 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)";
const fundoPsiquico = "linear-gradient(to bottom, #c986c7 0%,  #B77AB5 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)";
const fundoDark = "linear-gradient(to bottom, #50807a 0%,  #578a84 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)";
const fundoTerra = "linear-gradient(to bottom, #E2B460 0%,  #E9BD67 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)";
const fundoMetal = "linear-gradient(to bottom, #A5ADB0 0%,  #ABBBC0 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)";
const fundoGelo = "linear-gradient(to bottom, #78CEF1 0%,  #BCE6F9 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)";
const fundoInseto = "linear-gradient(to bottom, #96C464 0%,   #9ccd67 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)";
const fundoFantasma = "linear-gradient(to bottom, #BF78BB 0%,  #9C53A6 100%), linear-gradient(to bottom, rgb(255, 188, 3) 0%, rgb(255, 187, 0) 100%)";

// VARIAVEIS DE CENÁRIOS

const cenarioPlanta = "url(../img/fundoNature.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)";
const cenarioLutador = "url(../img/fundoLutador.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)";
const cenarioEletrico = "url(../img/fundoEletrico.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)";
const cenarioFogo = "url(../img/fundoFogo.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)";
const cenarioAgua = "url(../img/fundoAgua.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)";
const cenarioPedra = "url(../img/fundoPedra.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)";
const cenarioVoador = "url(../img/fundoVoador.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)";
const cenarioVeneno = "url(../img/fundoVeneno.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)";
const cenarioFada = "url(../img/fundoFada.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)";
const cenarioPsiquico = "url(../img/fundoPsiquico.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)";
const cenarioDark = "url(../img/fundoDark.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)";
const cenarioTerra = "url(../img/fundoTerra.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)";
const cenarioMetal = "url(../img/fundoMetal.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)";
const cenarioGelo = "url(../img/fundoGelo.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)";
const cenarioInseto = "url(../img/fundoInseto.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)";
const cenarioFantasma = "url(../img/fundoFantasma.png), linear-gradient(to bottom,  rgb(255, 205, 3) 0%, yellow 100%)";




const ListaDeOffTanks = [
// PLANTA
{
  clan: "naturia",
  cardFundo: fundoPlanta,
  icone: "./img/grass.png",
  icone2: "",
  nome: "Gogoat",
  cenario: cenarioPlanta,
  imagem: "./img/Gogoat.gif",
  elemento: "naturia",
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{
  clan: "naturia",
  cardFundo: fundoPlanta,
  icone: "./img/grass.png",
  icone2: "",
  nome: "Sceptile",
  cenario: cenarioPlanta,
  imagem: "./img/Sceptile.gif",
  elemento: "naturia",
  funcao: "offtank",
  level: "80",
  tier: "3"
},

// LUTADOR
{
  clan: "gardestrike",
  cardFundo: fundoLutador,
  icone: "./img/lutador.png",
  icone2: "",
  nome: "Elite Hitmontop",
  cenario: cenarioLutador,
  imagem: "./img/Elitehitmontop.gif",
  elemento: "lutador",
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{
  elemento: "lutador",
  clan: "gardestrike",
  cardFundo: fundoLutador,
  icone: "./img/lutador.png",
  icone2: "",
  nome: "Mega Lopunny",
  cenario: cenarioLutador,
  imagem: "./img/MegaLopunny.gif",
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// RAIBOLT
{
  clan: "raibolt",
  cardFundo: fundoEletrico,
  icone: "./img/eletrico.png",
  icone2: "",
  nome: "Electabuzz",
  cenario: cenarioEletrico,
  imagem: "./img/Electabuzz.gif",
  elemento: "elétrico",
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{
  clan: "raibolt",
  cardFundo: fundoEletrico,
  icone: "./img/eletrico.png",
  icone2: "",
  nome: "Light Ball Pikachu",
  cenario: cenarioEletrico,
  imagem: "./img/LightBallPikachu.gif",
  elemento: "elétrico",
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// FOGO 
{
  clan: "volcanic",
  cardFundo: fundoFogo,
  icone: "./img/fogo.png",
  icone2: "",
  nome: "Arcanine",
  cenario: cenarioFogo,
  imagem: "./img/Arcanine.gif",
  elemento: "fogo",
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{
  clan: "volcanic",
  cardFundo: fundoFogo,
  icone: "./img/fogo.png",
  icone2: "",
  nome: "Magmar",
  cenario: cenarioFogo,
  imagem: "./img/Magmar.gif",
  elemento: "fogo",
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// ÁGUA
{
  clan: "seavell",
  cardFundo: fundoAgua,
  icone: "./img/agua.png",
  icone2: "",
  nome: "Shiny Vaporeon",
  cenario: cenarioAgua,
  imagem: "./img/ShinyVaporeon.gif",
  elemento: "água",
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{
  clan: "seavell",
  cardFundo: fundoAgua,
  icone: "./img/agua.png",
  icone2: "",
  nome: "Shiny Giant Magikarp",
  cenario: cenarioAgua,
  imagem: "./img/ShinyMagikarp.gif",
  elemento: "água",
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// PEDRA
{
  clan: "orebound",
  cardFundo: fundoPedra,
  icone: "./img/Pedra.png",
  icone2: "",
  nome: "Shiny Golem",
  cenario: cenarioPedra,
  imagem: "./img/ShiGolem.gif",
  elemento: "pedra",
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{
  clan: "orebound seavell",
  cardFundo: fundoPedra,
  icone: "./img/Pedra.png",
  icone2: "./img/agua.png",
  nome: "Omastar",
  cenario: cenarioPedra,
  imagem: "./img/Omastar.gif",
  elemento: ["água / pedra"],
  funcao: "offtank",
  level: "80",
  tier: "3"
},

// VOADOR
{
  clan: "wingeon",
  cardFundo: fundoVoador,
  icone: "./img/voador.png",
  icone2: "",
  nome: "Shiny Fearow",
  cenario: cenarioVoador,
  imagem: "./img/ShiFearow.gif",
  elemento: ["normal","voador"],
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{ 
  clan: "wingeon naturia",
  cardFundo: fundoVoador,
  icone:"./img/voador.png",
  icone2:"./img/inseto.png",
  nome: "Shiny Beautifly",
  cenario: cenarioVoador,
  imagem: "./img/ShinyBeautifly.gif",
  elemento: ["voador", "inseto"],
  funcao: "offtank",
  level: "80",
  tier: "3"
},

// VENENO 
{ 
  clan: "malefic",
  cardFundo: fundoVeneno,
  icone:"./img/veneno.png",
  icone2: "",
  nome: "Shiny Arbok",
  cenario: cenarioVeneno,
  imagem: "./img/ShinyArbok.gif",
  elemento: "veneno",
  funcao: "offtank",
  level: "80",
  tier: "3"
},
{
  clan: "malefic",
  cardFundo: fundoVeneno,
  icone:"./img/veneno.png",
  icone2: "",
  nome: "Shiny Qwilfish",
  cenario: cenarioVeneno,
  imagem: "./img/ShinyQwilfish.gif",
  elemento: "veneno",
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// FADA
{
  clan: "psycraft",
  cardFundo: fundoFada,
  icone:"./img/fada.png",
  icone2: "",
  nome: "Florges",
  cenario: cenarioFada,
  imagem: "./img/Florges.gif",
  elemento: "fada",
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{
  clan: "psycraft",
  cardFundo: fundoFada,
  icone:"./img/fada.png",
  icone2: "",
  nome: "Sylveon",
  cenario: cenarioFada,
  imagem: "./img/Sylveon.gif",
  elemento: "fada",
  funcao: "offtank",
  level: "80",
  tier: "3"
},

// PSIQUICO
{
  clan: "psycraft",
  cardFundo: fundoPsiquico,
  icone:"./img/psiquico.png",
  icone2: "",
  nome: "Wobbuffet",
  cenario: cenarioPsiquico,
  imagem: "./img/Wobbuffet.gif",
  elemento: "psíquico",
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// DARK
{
  clan: "malefic",
  cardFundo: fundoDark,
  icone:"./img/dark.png",
  icone2: "",
  nome: "Mightyena",
  cenario: cenarioDark,
  imagem: "./img/Mightyena.gif",
  elemento: "dark",
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// TERRA
{
  clan: "orebound ironhard",
  cardFundo: fundoTerra,
  icone:"./img/terra.png",
  icone2: "./img/metal.png",
  nome: "Steelix",
  cenario: cenarioTerra,
  imagem: "./img/Steelix.gif",
  elemento: ["terra", "metal"],
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// METAL
{
  clan: "ironhard",
  cardFundo: fundoMetal,
  icone:"./img/metal.png",
  icone2: "",
  nome: "Shiny Forretress",
  cenario: cenarioMetal,
  imagem: "./img/ShinyForretress.gif",
  elemento: "metal",
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{ clan: "ironhard psycraft",
  cardFundo: fundoMetal,
  icone:"./img/metal.png",
  icone2: "./img/psiquico.png",
  nome: "Metang",
  cenario: cenarioMetal,
  imagem: "./img/Metang.gif",
  elemento: ["metal", "psíquico"],
  funcao: "offtank",
  level: "80",
  tier: "3"
},
// GELO
{
  clan: "seavell",
  cardFundo: fundoGelo,
  icone:"./img/gelo.png",
  icone2: "",
  nome: "Beartic",
  cenario: cenarioGelo,
  imagem: "./img/Beartic.gif",
  elemento: "gelo",
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// INSETO
{
  clan: "naturia wingeon",
  cardFundo: fundoInseto,
  icone:"./img/inseto.png",
  icone2: "./img/voador.png",
  nome: "Vespiquen",
  cenario: cenarioInseto,
  imagem: "./img/vespiquen.gif",
  elemento: ["inseto", "voador"],
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{
  clan: "naturia",
  cardFundo: fundoInseto,
  icone:"./img/inseto.png",
  icone2: "",
  nome: "Accelgor",
  cenario: cenarioInseto,
  imagem: "./img/Accelgor.gif",
  elemento: "inseto",
  funcao: "offtank",
  level: "100",
  tier: "2"
},

// FANTASMA
{
  clan: "malefic",
  cardFundo: fundoFantasma,
  icone: "./img/fantasma.png",
  icone2: "",
  nome: "Cofagrigus",
  cenario: cenarioFantasma,
  imagem: "./img/Cofagrigus.gif",
  elemento: "fantasma",
  funcao: "offtank",
  level: "100",
  tier: "2"
},
{ clan: "malefic",
  cardFundo: fundoFantasma,
  icone: "./img/fantasma.png",
  icone2: "",
  nome: "Mismagius",
  cenario: cenarioFantasma,
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

for (let i = 0; i < ListaDeOffTanks.length; i++) {
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

const listaDeBotoesClans = document.querySelectorAll('.iconeFiltro');



 let conferido;    //VARIAVEL QUE RETORNA SE É TRUE OU FALSE SE CONTÉM O NOME DO ITEM CLICADO NA LISTA DE CARDS
 let itemClicado;  //VARIAVEL QUE GUARDA O NOME DO ITEM CLICADO

 // i esta baseado no numero de icones de clan
 // quando clica em um


for (let i = 0; i < listaDeBotoesClans.length; i++) {
  listaDeBotoesClans[i].addEventListener('click', ()=>{
    if(listaDeBotoesClans[i].classList.contains("pressionado")){
      for (let l = 0; l < cards.length; l++) {
        cards[l].classList.remove("corta")
      }
      listaDeBotoesClans[i].classList.remove("pressionado")
    } else{
      listaDeBotoesClans[i].classList.add("pressionado")
      itemClicado = listaDeBotoesClans[i].classList[1]
      for (let j = 0; j < cards.length; j++) {
        conferido = ListaDeOffTanks[j].clan.includes(itemClicado)
        cards[j].classList.toggle("corta", !conferido)   
      }
    }
  })


}

// PEGAR OS QUE JA ESTAO FILTRADOS E SE ALGUM BOTAO TA PRESSIONADO VER SÓ DENTRO DAQUELE BOTAO O PROXIMO BOTAO



