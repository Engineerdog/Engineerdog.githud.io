const canvas = document.getElementById("canvas"); 
const ctx = canvas.getContext('2d'); 
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight; 
const arrayCaracteres = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z", "£", "¥", "§",
    "¤","€","$","±","µ","Ø","×","≥","Æ","☠"
];

const codigoArray = []; 
const conteoCodigo = 100;
const fontSize = 18;
const numeroColumna = canvas.width / fontSize;
let frame = 0;
class Matrix {
    constructor(x, y) {
        this.y = y
        this.x = x
    }
    dibujar(ctx) {
        this.valor = arrayCaracteres[Math.floor(Math.random() * (arrayCaracteres.length - 1))].toUpperCase()
        this.velocidad = Math.random() * fontSize * 3 / 4 + fontSize * 3 / 4
        ctx.fillStyle = "rgba(0,255,0)"
        ctx.font = fontSize + "px comic-sans" 
        ctx.fillText(this.valor, this.x, this.y) 
        this.y += this.velocidad
        if (this.y > canvas.height) {
            this.x = Math.floor((Math.random() * numeroColumna) * fontSize)
            this.y = 0
            this.velocidad = (-Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4
        }
    }
}

let actualizar = () => {
    if (codigoArray.length < conteoCodigo) { 
        let matrix = new Matrix(Math.floor(Math.random() * numeroColumna) * fontSize, 0) 
        codigoArray.push(matrix) 
    }
    ctx.fillStyle = "rgba(0,0,0,0.05)" 
    ctx.fillRect(0, 0, canvas.width, canvas.height) 
    for (let i = 0; i < codigoArray.length && frame % 2 == 0; i++) {
        codigoArray[i].dibujar(ctx) 
    }
    requestAnimationFrame(actualizar)
    frame++
}

actualizar();

let listElements = document.querySelectorAll('.list_button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});



