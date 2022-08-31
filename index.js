let cafes = [
    {
        nombre: "latte",
        descripción: "café y leche",
        tamaño: "grande",
        precio: 350,
        id: 01,
    },
    {
        nombre: "capu",
        descripción: "café, leche, espuma",
        tamaño: "mediano",
        precio: 350,
        id: 02,
    },
    {
        nombre: "moka",
        descripción: "café, leche, chocolate",
        tamaño: "grande",
        precio: 400,
        id: 03, 
    },
    {
        nombre: "flatwhite",
        descripción: "cafe doble y leche",
        tamaño: "mediano",
        precio: 450,
        id: 04,
    }
]

//const prompt = require("prompt-sync")({siginit: true});
let pregunta = 0;

do{
    pregunta = parseInt(prompt("Si queres un: latte elegí 1, capu 2, moka 3, flatwhite 4"));
}
while(pregunta !=1 && pregunta !=2 && pregunta !=3 && pregunta !=4);

function cafeElegido (indice){
    alert("tu café contiene: " + cafes[indice-1].descripción);
}

for(i=0; i<cafes.length; i++){
    console.log("el café" + cafes[i].nombre + "contiene" + cafes[i].descripción + "y cuesta");
}