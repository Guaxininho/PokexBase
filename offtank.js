for (let i = 0; i < 102; i++) {
let criacao = document.createElement("div");
criacao.className = "cardsRoot";
criacao.innerHTML = `<figure class="card">
<div class="flexboxicon">
  <h1 class="tituloPoke"></h1>
  <img class="iconeElemento" src="" />
  <img class="iconeElemento2" src="" />
</div>
<div class="caixaDaImagem">
  <img class="imagemPoke" src="a">
  <figure class="boxLevel">lvl <span class="level"></span></figure>
</div>
<h3 class="elemento"></h3>
<div class="flexboxIcone">
  <img class="iconfuncao" src="./img/offtank.png"/>
  <h3 class="funcao"></h3>
</div>
<h3 class="tierMudanca">Tier: <span class="tier"></span></h3>
</figure>`;
document.querySelector("#gridCards").appendChild(criacao);
}

// O CRIA CARTAS
const rootDosCards = document.querySelectorAll('.cardsRoot');

// for (let i = 0; i < 38; i++) {
//   rootDosCards[i].innerHTML =
//   `${arrayDeConteudo}`
//   }



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
  icone: "./img/planta.png",
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
  icone: "./img/planta.png",
  icone2: "",
  nome: "Sceptile",
  cenario: cenarioPlanta,
  imagem: "./img/Sceptile.gif",
  elemento: "naturia",
  funcao: "offtank",
  level: "80",
  tier: "3"
},
{ 
  elemento: "planta", 
  clan: "naturia wingeon",
  cardFundo: fundoPlanta,
  icone: "./img/planta.png",
  icone2: "./img/voador.png",
  nome: "Tropius",
  cenario: cenarioPlanta,
  imagem: "./img/Tropius.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},
{ 
  elemento: "planta", 
  clan: "naturia",
  cardFundo: fundoPlanta,
  icone: "./img/planta.png",
  icone2: "./img/veneno.png",
  nome: "Roserade",
  cenario: cenarioPlanta,
  imagem: "./img/Roserade.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},
{ 
  elemento: "planta", 
  clan: "naturia",
  cardFundo: fundoPlanta,
  icone: "./img/planta.png",
  icone2: "./img/inseto.png",
  nome: "Wormadam",
  cenario: cenarioPlanta,
  imagem: "./img/Wormadam.gif",
  funcao: "cde",
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
{ 
  elemento: "eletrico", 
  clan: "raibolt ",
  cardFundo: fundoEletrico,
  icone: "./img/eletrico.png",
  icone2: "",
  nome: "Shiny Elekid",
  cenario: cenarioEletrico,
  imagem: "./img/ShinyElekid.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},
{ 
  elemento: "eletrico", 
  clan: "raibolt ",
  cardFundo: fundoEletrico,
  icone: "./img/eletrico.png",
  icone2: "",
  nome: "Shiny Electrode",
  cenario: cenarioEletrico,
  imagem: "./img/ShinyElectrode.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},
{ 
  elemento: "eletrico", 
  clan: "raibolt ",
  cardFundo: fundoEletrico,
  icone: "./img/eletrico.png",
  icone2: "",
  nome: "Manectric",
  cenario: cenarioEletrico,
  imagem: "./img/Manectric.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},
{ 
  elemento: "eletrico", 
  clan: "raibolt ",
  cardFundo: fundoEletrico,
  icone: "./img/eletrico.png",
  icone2: "",
  nome: "Raichu",
  cenario: cenarioEletrico,
  imagem: "./img/Raichu.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},
{ 
  elemento: "eletrico", 
  clan: "raibolt ",
  cardFundo: fundoEletrico,
  icone: "./img/eletrico.png",
  icone2: "",
  nome: "Jolteon",
  cenario: cenarioEletrico,
  imagem: "./img/Jolteon.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
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
{ 
  elemento: "veneno", 
  clan: "malefic ",
  cardFundo: fundoVeneno,
  icone: "./img/veneno.png",
  icone2: "",
  nome: "Shiny Weezing",
  cenario: cenarioVeneno,
  imagem: "./img/ShinyWeezing.gif",
  funcao: "tank",
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
{ 
  elemento: "inseto", 
  clan: "naturia malefic",
  cardFundo: fundoInseto,
  icone: "./img/inseto.png",
  icone2: "./img/veneno.png",
  nome: "Mega Beedrill",
  cenario: cenarioInseto,
  imagem: "./img/MegaBeedrill.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},
{ 
  elemento: "inseto", 
  clan: "naturia ",
  cardFundo: fundoInseto,
  icone: "./img/inseto.png",
  icone2: "",
  nome: "Shiny Kricketune",
  cenario: cenarioInseto,
  imagem: "./img/ShinyKricketune.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},
{ 
  elemento: "inseto", 
  clan: "naturia ",
  cardFundo: fundoInseto,
  icone: "./img/inseto.png",
  icone2: "",
  nome: "Kricketune",
  cenario: cenarioInseto,
  imagem: "./img/Kricketune.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},
{ 
  elemento: "inseto", 
  clan: "naturia malefic",
  cardFundo: fundoInseto,
  icone: "./img/inseto.png",
  icone2: "./img/veneno.png",
  nome: "Shiny Beedrill",
  cenario: cenarioInseto,
  imagem: "./img/ShinyBeedrill.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
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
},
{ 
  elemento: "inseto", 
  clan: "naturia ",
  cardFundo: fundoInseto,
  icone: "./img/inseto.png",
  icone2: "",
  nome: "Shiny Shuckle",
  cenario: cenarioInseto,
  imagem: "./img/ShinyShuckle.gif",
  funcao: "tank",
  level: "100",
  tier: "2"
},
{ 
  elemento: "psiquico", 
  clan: "psycraft ",
  cardFundo: fundoPsiquico,
  icone: "./img/psiquico.png",
  icone2: "",
  nome: "Shiny Grumpig",
  cenario: cenarioPsiquico,
  imagem: "./img/ShinyGrumpig.gif",
  funcao: "tank",
  level: "100",
  tier: "2"
},
{ 
  elemento: "planta", 
  clan: "naturia ",
  cardFundo: fundoPlanta,
  icone: "./img/planta.png",
  icone2: "",
  nome: "Leafeon",
  cenario: cenarioPlanta,
  imagem: "./img/Leafeon.gif",
  funcao: "tank",
  level: "80",
  tier: "3"
},
{ 
  elemento: "pedra", 
  clan: "orebound ",
  cardFundo: fundoPedra,
  icone: "./img/pedra.png",
  icone2: "",
  nome: "Big Onix",
  cenario: cenarioPedra,
  imagem: "./img/BigOnix.gif",
  funcao: "tank",
  level: "100",
  tier: "2"
},
{ 
  elemento: "dark", 
  clan: "malefic",
  cardFundo: fundoDark,
  icone: "./img/dark.png",
  icone2: "",
  nome: "Alolan Persian",
  cenario: cenarioDark,
  imagem: "./img/AlolanPersian.gif",
  funcao: "tank",
  level: "80",
  tier: "3"
},
{ 
  elemento: "fantasma", 
  clan: "malefic ",
  cardFundo: fundoFantasma,
  icone: "./img/fantasma.png",
  icone2: "",
  nome: "Dusclops",
  cenario: cenarioFantasma,
  imagem: "./img/Dusclops.gif",
  funcao: "tank",
  level: "100",
  tier: "2"
},
{ 
  elemento: "fada", 
  clan: "psycraft ",
  cardFundo: fundoFada,
  icone: "./img/fada.png",
  icone2: "",
  nome: "Clefable",
  cenario: cenarioFada,
  imagem: "./img/Clefable.gif",
  funcao: "tank",
  level: "80",
  tier: "3"
},
{ 
  elemento: "voador", 
  clan: "wingeon ",
  cardFundo: fundoVoador,
  icone: "./img/voador.png",
  icone2: "./img/dragao.png",
  nome: "Dragonite",
  cenario: cenarioVoador,
  imagem: "./img/Dragonite.gif",
  funcao: "tank",
  level: "100",
  tier: "2"
},
{ 
  elemento: "metal", 
  clan: "ironhard ",
  cardFundo: fundoMetal,
  icone: "./img/metal.png",
  icone2: "",
  nome: "Shiny Klinklang",
  cenario: cenarioMetal,
  imagem: "./img/ShinyKlinklang.gif",
  funcao: "tank",
  level: "100",
  tier: "2"
},
{ 
  elemento: "terra", 
  clan: "orebound ",
  cardFundo: fundoTerra,
  icone: "./img/terra.png",
  icone2: "",
  nome: "Mudsdale",
  cenario: cenarioTerra,
  imagem: "./img/Mudsdale.gif",
  funcao: "tank",
  level: "100",
  tier: "2"
},
// NOVOS
{ 
  nome: "Sawk",
  clan: "gardestrike ",
  elemento: "lutador ", 
  cardFundo: fundoLutador,
  icone: "./img/lutador.png",
  icone2: "",
  cenario: cenarioLutador,
  imagem: "./img/Sawk.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},

{ 
  nome: "Champion Primeape",
  clan: "gardestrike ",
  elemento: "lutador ", 
  cardFundo: fundoLutador,
  icone: "./img/lutador.png",
  icone2: "",
  cenario: cenarioLutador,
  imagem: "./img/ChampionPrimeape.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},


{ 
  nome: "Sirfetch'd",
  clan: "gardestrike ",
  elemento: "lutador ", 
  cardFundo: fundoLutador,
  icone: "./img/lutador.png",
  icone2: "",
  cenario: cenarioLutador,
  imagem: "./img/Sirfetch.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Poliwrath",
  clan: "gardestrike ",
  elemento: "lutador ", 
  cardFundo: fundoLutador,
  icone: "./img/lutador.png",
  icone2: "",
  cenario: cenarioLutador,
  imagem: "./img/Poliwrath.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Lucario",
  clan: "ironhard gardestrike",
  elemento: "metal lutador", 
  cardFundo: fundoMetal,
  icone: "./img/metal.png",
  icone2: "./img/lutador.png",
  cenario: cenarioMetal,
  imagem: "./img/Lucario.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Shiny Lucario",
  clan: "ironhard ",
  elemento: "metal ", 
  cardFundo: fundoMetal,
  icone: "./img/metal.png",
  icone2: "",
  cenario: cenarioMetal,
  imagem: "./img/ShinyLucario.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},

{ 
  nome: "Magneton",
  clan: "ironhard raibolt",
  elemento: "metal eletrico", 
  cardFundo: fundoMetal,
  icone: "./img/metal.png",
  icone2: "./img/eletrico.png",
  cenario: cenarioMetal,
  imagem: "./img/Magneton.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Klinklang",
  clan: "ironhard ",
  elemento: "metal ", 
  cardFundo: fundoMetal,
  icone: "./img/metal.png",
  icone2: "",
  cenario: cenarioMetal,
  imagem: "./img/Klinklang.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Bronzong",
  clan: "ironhard psycraft",
  elemento: "metal psiquico", 
  cardFundo: fundoMetal,
  icone: "./img/metal.png",
  icone2: "./img/psiquico.png",
  cenario: cenarioMetal,
  imagem: "./img/Bronzong.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Ampharos",
  clan: "raibolt ",
  elemento: "eletrico ", 
  cardFundo: fundoEletrico,
  icone: "./img/eletrico.png",
  icone2: "",
  cenario: cenarioEletrico,
  imagem: "./img/Ampharos.gif",
  funcao: "tank",
  level: "80",
  tier: "3"
},

{ 
  nome: "Shiny Magby",
  clan: "volcanic ",
  elemento: "fogo ", 
  cardFundo: fundoFogo,
  icone: "./img/fogo.png",
  icone2: "",
  cenario: cenarioFogo,
  imagem: "./img/ShinyMagby.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},

{ 
  nome: "Ninetales",
  clan: "volcanic ",
  elemento: "fogo ", 
  cardFundo: fundoFogo,
  icone: "./img/fogo.png",
  icone2: "",
  cenario: cenarioFogo,
  imagem: "./img/Ninetales.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Flareon",
  clan: "volcanic ",
  elemento: "fogo ", 
  cardFundo: fundoFogo,
  icone: "./img/fogo.png",
  icone2: "",
  cenario: cenarioFogo,
  imagem: "./img/Flareon.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Typhlosion",
  clan: "volcanic ",
  elemento: "fogo ", 
  cardFundo: fundoFogo,
  icone: "./img/fogo.png",
  icone2: "",
  cenario: cenarioFogo,
  imagem: "./img/Typhlosion.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Gyarados",
  clan: "seavell wingeon",
  elemento: "agua voador", 
  cardFundo: fundoAgua,
  icone: "./img/agua.png",
  icone2: "./img/voador.png",
  cenario: cenarioAgua,
  imagem: "./img/Gyarados.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},

{ 
  nome: "Shiny Kingler",
  clan: "seavell ",
  elemento: "agua ", 
  cardFundo: fundoAgua,
  icone: "./img/agua.png",
  icone2: "",
  cenario: cenarioAgua,
  imagem: "./img/ShinyKingler.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},

{ 
  nome: "Vaporeon",
  clan: "seavell ",
  elemento: "agua ", 
  cardFundo: fundoAgua,
  icone: "./img/agua.png",
  icone2: "",
  cenario: cenarioAgua,
  imagem: "./img/Vaporeon.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Feraligatr",
  clan: "seavell ",
  elemento: "agua ", 
  cardFundo: fundoAgua,
  icone: "./img/agua.png",
  icone2: "",
  cenario: cenarioAgua,
  imagem: "./img/Feraligatr.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Azumarill",
  clan: "seavell psycraft",
  elemento: "agua fada", 
  cardFundo: fundoAgua,
  icone: "./img/agua.png",
  icone2: "./img/fada.png",
  cenario: cenarioAgua,
  imagem: "./img/Azumarill.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Lapras",
  clan: "seavell seavell",
  elemento: "gelo agua", 
  cardFundo: fundoGelo,
  icone: "./img/gelo.png",
  icone2: "./img/agua.png",
  cenario: cenarioGelo,
  imagem: "./img/Lapras.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},

{ 
  nome: "Abomasnow",
  clan: "seavell naturia",
  elemento: "gelo planta", 
  cardFundo: fundoGelo,
  icone: "./img/gelo.png",
  icone2: "./img/planta.png",
  cenario: cenarioGelo,
  imagem: "./img/Abomasnow.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},

{ 
  nome: "Glalie",
  clan: "seavell ",
  elemento: "gelo ", 
  cardFundo: fundoGelo,
  icone: "./img/gelo.png",
  icone2: "",
  cenario: cenarioGelo,
  imagem: "./img/Glalie.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Glaceon",
  clan: "seavell ",
  elemento: "gelo ", 
  cardFundo: fundoGelo,
  icone: "./img/gelo.png",
  icone2: "",
  cenario: cenarioGelo,
  imagem: "./img/Glaceon.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Vanilluxe",
  clan: "seavell ",
  elemento: "gelo ", 
  cardFundo: fundoGelo,
  icone: "./img/gelo.png",
  icone2: "",
  cenario: cenarioGelo,
  imagem: "./img/Vanilluxe.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Shiny Delibird",
  clan: "seavell wingeon",
  elemento: "gelo voador", 
  cardFundo: fundoGelo,
  icone: "./img/gelo.png",
  icone2: "./img/voador.png",
  cenario: cenarioGelo,
  imagem: "./img/ShinyDelibird.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Rampardos",
  clan: "orebound ",
  elemento: "pedra ", 
  cardFundo: fundoPedra,
  icone: "./img/pedra.png",
  icone2: "",
  cenario: cenarioPedra,
  imagem: "./img/Rampardos.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},

{ 
  nome: "Golem",
  clan: "orebound orebound",
  elemento: "pedra terra", 
  cardFundo: fundoPedra,
  icone: "./img/pedra.png",
  icone2: "./img/terra.png",
  cenario: cenarioPedra,
  imagem: "./img/Golem.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Solrock",
  clan: "orebound ",
  elemento: "pedra psy", 
  cardFundo: fundoPedra,
  icone: "./img/pedra.png",
  icone2: "./img/psy.png",
  cenario: cenarioPedra,
  imagem: "./img/Solrock.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Hippowdon",
  clan: "orebound ",
  elemento: "terra ", 
  cardFundo: fundoTerra,
  icone: "./img/terra.png",
  icone2: "",
  cenario: cenarioTerra,
  imagem: "./img/Hippowdon.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},

{ 
  nome: "Shiny Donphan",
  clan: "orebound ",
  elemento: "terra ", 
  cardFundo: fundoTerra,
  icone: "./img/terra.png",
  icone2: "",
  cenario: cenarioTerra,
  imagem: "./img/ShinyDonphan.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},

{ 
  nome: "Alolan Dugtrio",
  clan: "orebound ironhard",
  elemento: "terra metal", 
  cardFundo: fundoTerra,
  icone: "./img/terra.png",
  icone2: "./img/metal.png",
  cenario: cenarioTerra,
  imagem: "./img/AlolanDugtrio.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Nidoqueen",
  clan: "orebound ",
  elemento: "terra poison", 
  cardFundo: fundoTerra,
  icone: "./img/terra.png",
  icone2: "./img/poison.png",
  cenario: cenarioTerra,
  imagem: "./img/Nidoqueen.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Rhydon",
  clan: "orebound orebound",
  elemento: "terra pedra", 
  cardFundo: fundoTerra,
  icone: "./img/terra.png",
  icone2: "./img/pedra.png",
  cenario: cenarioTerra,
  imagem: "./img/Rhydon.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Shiny Noctowl",
  clan: "wingeon gardestrike",
  elemento: "voador normal", 
  cardFundo: fundoVoador,
  icone: "./img/voador.png",
  icone2: "./img/normal.png",
  cenario: cenarioVoador,
  imagem: "./img/ShinyNoctowl.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},

{ 
  nome: "Crobat",
  clan: "wingeon ",
  elemento: "voador poison", 
  cardFundo: fundoVoador,
  icone: "./img/voador.png",
  icone2: "./img/poison.png",
  cenario: cenarioVoador,
  imagem: "./img/Crobat.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Staraptor",
  clan: "wingeon gardestrike",
  elemento: "voador normal", 
  cardFundo: fundoVoador,
  icone: "./img/voador.png",
  icone2: "./img/normal.png",
  cenario: cenarioVoador,
  imagem: "./img/Staraptor.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Togetic",
  clan: "psycraft wingeon",
  elemento: "fada voador", 
  cardFundo: fundoFada,
  icone: "./img/fada.png",
  icone2: "./img/voador.png",
  cenario: cenarioFada,
  imagem: "./img/Togetic.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Granbull",
  clan: "psycraft ",
  elemento: "fada ", 
  cardFundo: fundoFada,
  icone: "./img/fada.png",
  icone2: "",
  cenario: cenarioFada,
  imagem: "./img/Granbull.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Alolan Raichu",
  clan: "psycraft raibolt",
  elemento: "fada eletrico", 
  cardFundo: fundoFada,
  icone: "./img/fada.png",
  icone2: "./img/eletrico.png",
  cenario: cenarioFada,
  imagem: "./img/AlolanRaichu.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},

{ 
  nome: "Espeon",
  clan: "psycraft ",
  elemento: "psiquico ", 
  cardFundo: fundoPsiquico,
  icone: "./img/psiquico.png",
  icone2: "",
  cenario: cenarioPsiquico,
  imagem: "./img/Espeon.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Mr. Mime",
  clan: "psycraft ",
  elemento: "psiquico ", 
  cardFundo: fundoPsiquico,
  icone: "./img/psiquico.png",
  icone2: "",
  cenario: cenarioPsiquico,
  imagem: "./img/Mr.Mime.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Xatu",
  clan: "psycraft wingeon",
  elemento: "psiquico voador", 
  cardFundo: fundoPsiquico,
  icone: "./img/psiquico.png",
  icone2: "./img/voador.png",
  cenario: cenarioPsiquico,
  imagem: "./img/Xatu.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Gengar",
  clan: "malefic malefic",
  elemento: "fantasma veneno", 
  cardFundo: fundoFantasma,
  icone: "./img/fantasma.png",
  icone2: "./img/veneno.png",
  cenario: cenarioFantasma,
  imagem: "./img/Gengar.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},

{ 
  nome: "Banette",
  clan: "malefic ",
  elemento: "fantasma ", 
  cardFundo: fundoFantasma,
  icone: "./img/fantasma.png",
  icone2: "",
  cenario: cenarioFantasma,
  imagem: "./img/Banette.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Mimikyu",
  clan: "malefic psycraft",
  elemento: "fantasma fada", 
  cardFundo: fundoFantasma,
  icone: "./img/fantasma.png",
  icone2: "./img/fada.png",
  cenario: cenarioFantasma,
  imagem: "./img/Mimikyu.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},

{ 
  nome: "Alolan Muk",
  clan: "malefic ",
  elemento: "veneno noturno", 
  cardFundo: fundoVeneno,
  icone: "./img/veneno.png",
  icone2: "./img/noturno.png",
  cenario: cenarioVeneno,
  imagem: "./img/AlolanMuk.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},

{ 
  nome: "Seviper",
  clan: "malefic ",
  elemento: "veneno ", 
  cardFundo: fundoVeneno,
  icone: "./img/veneno.png",
  icone2: "",
  cenario: cenarioVeneno,
  imagem: "./img/Seviper.gif",
  funcao: "cde",
  level: "100",
  tier: "2"
},

{ 
  nome: "Nidoking",
  clan: "malefic orebound",
  elemento: "veneno terra", 
  cardFundo: fundoVeneno,
  icone: "./img/veneno.png",
  icone2: "./img/terra.png",
  cenario: cenarioVeneno,
  imagem: "./img/Nidoking.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Muk",
  clan: "malefic ",
  elemento: "veneno ", 
  cardFundo: fundoVeneno,
  icone: "./img/veneno.png",
  icone2: "",
  cenario: cenarioVeneno,
  imagem: "./img/Muk.gif",
  funcao: "cde",
  level: "80",
  tier: "3"
},

{ 
  nome: "Pyroar Female",
  clan: "volcanic gardestrike",
  elemento: "fogo normal", 
  cardFundo: fundoFogo,
  icone: "./img/fogo.png",
  icone2: "./img/normal.png",
  cenario: cenarioFogo,
  imagem: "./img/PyroarFemale.gif",
  funcao: "tank",
  level: "100",
  tier: "2"
},

{ 
  nome: "Blastoise",
  clan: "seavell ",
  elemento: "agua ", 
  cardFundo: fundoAgua,
  icone: "./img/agua.png",
  icone2: "",
  cenario: cenarioAgua,
  imagem: "./img/Blastoise.gif",
  funcao: "tank",
  level: "80",
  tier: "3"
},



];



// ZONA DE TESTE
const imagemPoke = document.querySelectorAll('.imagemPoke');
// imagemPoke.src = mismagius.imagem;
const nomePoke = document.querySelectorAll('.tituloPoke');
// nomePoke.textContent = mismagius.nome;
const iconePoke = document.querySelectorAll('.iconeElemento');
const iconePoke2 = document.querySelectorAll('.iconeElemento2');
const clanPoke = document.querySelectorAll('.elemento');
const funcaoPoke = document.querySelectorAll('.funcao');
const levelPoke = document.querySelectorAll('.level');
const tierPoke = document.querySelectorAll('.tier');
const cards = document.querySelectorAll('.cardsRoot');
const cardsCor = document.querySelectorAll('.card');
const cenarios = document.querySelectorAll('.caixaDaImagem');
const tituloDoSite = document.querySelector('#tituloDoSite');

for (let i = 0; i < ListaDeOffTanks.length; i++) {
  cenarios[i].style.backgroundImage = ListaDeOffTanks[i].cenario;
  cardsCor[i].style.backgroundImage = ListaDeOffTanks[i].cardFundo;
  iconePoke[i].src = ListaDeOffTanks[i].icone;
  imagemPoke[i].src = ListaDeOffTanks[i].imagem;
  nomePoke[i].textContent = ListaDeOffTanks[i].nome;
  clanPoke[i].textContent = ListaDeOffTanks[i].clan;
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
      itemClicado = listaDeBotoesClans[i].classList[1]
      for (let j = 0; j < cards.length; j++) {
        conferido = ListaDeOffTanks[j].clan.includes(itemClicado)
        cards[j].classList.toggle("corta", !conferido)   
      }
    
  })


}

tituloDoSite.addEventListener('click', ()=>{
  for (let c = 0; c < cards.length; c++) {
    cards[c].classList.remove('corta');  
    
  }
  
})

// PESQUISAR SOBRE ESTES CONCEITOS:

// - LANDPAGE
// - ADWORDS
// - FACEBOOK (FACEBOOK PIXEL CODE)
// - CAROUSEL

// FAZER O TAGUEAMENTO DO SITE POKEXBASE COM ANALYTCS
// FAZER O TAGUEAMENTO DO SITE POKEXBASE COM FACEBOOK PIXEL CODE
// RESOLVER O SAMESITE NO CONSOLE

// POSSO MELHORAR ISSO AQUI COM LOOP, MAS VOU FAZER DEPOIS
listaDeBotoesClans[0].addEventListener('click', ()=>{
  gtag('event', 'orebound', {
    eventCategory: 'engagement',
    eventLabel: 'clan_orebound'
  })
}
)

listaDeBotoesClans[1].addEventListener('click', ()=>{
  gtag('event', 'volcanic', {
    eventCategory: 'engagement',
    eventLabel: 'clan_volcanic'
  })
})

listaDeBotoesClans[2].addEventListener('click', ()=>{
  gtag('event', 'naturia', {
    eventCategory: 'engagement',
    eventLabel: 'clan_naturia'
  })
})

listaDeBotoesClans[3].addEventListener('click', ()=>{
  gtag('event', 'gardestrike', {
    eventCategory: 'engagement',
    eventLabel: 'clan_gardestrike'
  })
})

listaDeBotoesClans[4].addEventListener('click', ()=>{
  gtag('event', 'malefic', {
    eventCategory: 'engagement',
    eventLabel: 'clan_malefic'
  })
})

listaDeBotoesClans[5].addEventListener('click', ()=>{
  gtag('event', 'ironhard', {
    eventCategory: 'engagement',
    eventLabel: 'clan_ironhard'
  })
})

listaDeBotoesClans[6].addEventListener('click', ()=>{
  gtag('event', 'wingeon', {
    eventCategory: 'engagement',
    eventLabel: 'clan_wingeon'
  })
})

listaDeBotoesClans[7].addEventListener('click', ()=>{
  gtag('event', 'raibolt', {
    eventCategory: 'engagement',
    eventLabel: 'clan_raibolt'
  })
})

listaDeBotoesClans[8].addEventListener('click', ()=>{
  gtag('event', 'psycraft', {
    eventCategory: 'engagement',
    eventLabel: 'clan_psycraft'
  })
})

listaDeBotoesClans[9].addEventListener('click', ()=>{
  gtag('event', 'seavell', {
    eventCategory: 'engagement',
    eventLabel: 'clan_seavell'
  })
})

const tituloo = document.querySelector('#tituloDoSite');

tituloDoSite.addEventListener('click', ()=>{
  console.log("Alguém me clicou")
})

// INICIO DOS FILTROS