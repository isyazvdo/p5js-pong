//variaveis bolinha
let xbolinha = 300;   
let ybolinha = 192;
let diametro = 20;
let raio = diametro/2;

//velocidade bolinha
let velocidadexbolinha = 6;
let velocidadeybolinha = 6;

//variaveis raquete
let xraquete = 5;
let yraquete = 150;
let raquetecomprimento = 10;
let raquetealtura = 100;

//variaveis oponente
let xraqueteoponente = 585;
let yraqueteoponente = 150;
let velocidadeyoponente;

//variaveis do placar
let meuspontos = 0;
let pontosdooponente = 0;

function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(0);
  mostrabolinha();
  movimentabolinha();
  verificacolisaobolinha();
  mostraraquete(xraquete, yraquete); 
  mostraraquete (xraqueteoponente, yraqueteoponente); 
  movimentaminharaquete();
  verificacolisaoraquete();
  movimentaraqueteoponente();
  verificacolisaoraqueteoponente();
  incluiplacar();
  marcarponto();
}
function mostrabolinha() {
circle(xbolinha, ybolinha, diametro)
}
function movimentabolinha() {
 xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
}
function verificacolisaobolinha(){
  if(xbolinha > width || xbolinha - raio < 0) {velocidadexbolinha *= -1}
  if(ybolinha > height || ybolinha - raio < 0) {velocidadeybolinha *= -1}
}
function mostraraquete(x,y){  rect(x,y,raquetecomprimento,raquetealtura)
}
function movimentaminharaquete(){
  if (keyIsDown(UP_ARROW)) {yraquete -=10;}
   if (keyIsDown(DOWN_ARROW)) {yraquete +=10;}
}
function verificacolisaoraquete(){
  if (xbolinha - raio < xraquete + raquetecomprimento
     && ybolinha - raio < yraquete + raquetealtura
     && ybolinha + raio > yraquete)
    { velocidadexbolinha *= -1;}
}
function movimentaraqueteoponente(){
  velocidadeyoponente = ybolinha - yraqueteoponente - raquetecomprimento /2 -30;
  yraqueteoponente += velocidadeyoponente
}
function verificacolisaoraqueteoponente(){
  if (xbolinha > xraqueteoponente - raquetecomprimento
      && ybolinha - raio < yraqueteoponente + raquetealtura 
      && ybolinha + raio > yraqueteoponente)
  {velocidadexbolinha *= -1}
}
function incluiplacar(){
  fill(255)
  text(meuspontos, 265, 26)
  text(pontosdooponente, 340, 26)
}
function marcarponto(){
  if (xbolinha > 590){meuspontos += 1}
  if (xbolinha < 10) {pontosdooponente += 1}
}
