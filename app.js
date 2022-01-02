const caracteres = document.querySelectorAll('.button-basic');
const space = document.querySelector('.space-writer')
var paragraph = document.getElementById('paragraph')

//caracteres
const Q = document.getElementById('Q');
const W = document.getElementById('W');
const E = document.getElementById('E');
const R = document.getElementById('R');
const T = document.getElementById('T');
const Z = document.getElementById('Z');
const U = document.getElementById('U');
const I = document.getElementById('I');
const O = document.getElementById('O');
const P = document.getElementById('P');
const Ç = document.getElementById('Ç');
const apagar = document.getElementById('apagar');

const A = document.getElementById('A');
const S = document.getElementById('S');
const D = document.getElementById('D');
const F = document.getElementById('F');
const G = document.getElementById('G');
const H = document.getElementById('H');
const J = document.getElementById('J');
const K = document.getElementById('K');
const L = document.getElementById('L');

const Y = document.getElementById('Y');
const X = document.getElementById('X');
const C = document.getElementById('C');
const V = document.getElementById('V');
const B = document.getElementById('B');
const N = document.getElementById('N');
const M = document.getElementById('M');
const virgula = document.getElementById('virgula');
const ponto = document.getElementById('ponto');
const traco = document.getElementById('traco');

const barra_de_espaco = document.getElementById('barra_de_espaço');
const emoji = document.getElementById('emoji');

var str = "";


Q.addEventListener('click', () =>
{
    paragraph.textContent += "Q"
    paragraph.style.color = "white"
    str += "Q"
})

W.addEventListener('click', () =>
{
    paragraph.textContent += "W"
    paragraph.style.color = "white"
    str += "W"
})

E.addEventListener('click', () =>
{
    paragraph.textContent += "E"
    paragraph.style.color = "white"
    str += "E"
})
R.addEventListener('click', () =>
{
    paragraph.textContent += "R"
    paragraph.style.color = "white"
    str += "R"
})

T.addEventListener('click', () =>
{
    paragraph.textContent += "T"
    paragraph.style.color = "white"
    str += "T"
})

Z.addEventListener('click', () =>
{
    paragraph.textContent += "Z"
    paragraph.style.color = "white"
    str += "Z"
})
U.addEventListener('click', () =>
{
    paragraph.textContent += "U"
    paragraph.style.color = "white"
    str += "U"
})

I.addEventListener('click', () =>
{
    paragraph.textContent += "I"
    paragraph.style.color = "white"
    str += "I"
})

O.addEventListener('click', () =>
{
    paragraph.textContent += "O"
    paragraph.style.color = "white"
    str += "O"
})
P.addEventListener('click', () =>
{
    paragraph.textContent += "P"
    paragraph.style.color = "white"
    str += "P"
})

Ç.addEventListener('click', () =>
{
    paragraph.textContent += "Ç"
    paragraph.style.color = "white"
    str += "Ç"
})

apagar.addEventListener('click', () =>
{
    paragraph.style.color = "white";
    str = str.slice(0,-1)
    paragraph.innerText = str
})

A.addEventListener('click', () =>
{
    paragraph.textContent += "A"
    paragraph.style.color = "white"
    str += "A"
})
S.addEventListener('click', () =>
{
    paragraph.textContent += "S"
    paragraph.style.color = "white"
    str += "S"
})

D.addEventListener('click', () =>
{
    paragraph.textContent += "D"
    paragraph.style.color = "white"
    str += "D"
})

F.addEventListener('click', () =>
{
    paragraph.textContent += "F"
    paragraph.style.color = "white"
    str += "F"
})
G.addEventListener('click', () =>
{
    paragraph.textContent += "G"
    paragraph.style.color = "white"
    str += "G"
})

H.addEventListener('click', () =>
{
    paragraph.textContent += "H"
    paragraph.style.color = "white"
    str += "H"
})

J.addEventListener('click', () =>
{
    paragraph.textContent += "J"
    paragraph.style.color = "white"
    str += "J"
})
K.addEventListener('click', () =>
{
    paragraph.textContent += "K"
    paragraph.style.color = "white"
    str += "K"
})

L.addEventListener('click', () =>
{
    paragraph.textContent += "L"
    paragraph.style.color = "white"
    str += "L"
})

Y.addEventListener('click', () =>
{
    paragraph.textContent += "Y"
    paragraph.style.color = "white"
    str += "Y"
})
X.addEventListener('click', () =>
{
    paragraph.textContent += "X"
    paragraph.style.color = "white"
    str += "X"
})

C.addEventListener('click', () =>
{
    paragraph.textContent += "C"
    paragraph.style.color = "white"
    str += "C"
})

V.addEventListener('click', () =>
{
    paragraph.textContent += "V"
    paragraph.style.color = "white"
    str += "V"
})

B.addEventListener('click', () =>
{
    paragraph.textContent += "B"
    paragraph.style.color = "white"
    str += "B"
})

N.addEventListener('click', () =>
{
    paragraph.textContent += "N"
    paragraph.style.color = "white"
    str += "N"
})
M.addEventListener('click', () =>
{
    paragraph.textContent += "M"
    paragraph.style.color = "white"
    str += "M"
})

virgula.addEventListener('click', () =>
{
    paragraph.textContent += ","
    paragraph.style.color = "white"
    str += ","
})

ponto.addEventListener('click', () =>
{
    paragraph.textContent += "."
    paragraph.style.color = "white"
    str += "."
})
traco.addEventListener('click', () =>
{
    paragraph.textContent += "-"
    paragraph.style.color = "white"
    str += "-"
})

barra_de_espaco.addEventListener('click', () =>
{
    paragraph.textContent += "  "
    paragraph.style.color = "white"
    str += "  "
})

emoji.addEventListener('click', () =>
{
    paragraph.textContent += ":-)"
    paragraph.style.color = "white"
    str += ":-)"
})