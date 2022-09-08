


class Cafe {
    constructor(nombre, descripción, tamaño, precio, id){
        this.nombre = nombre;
        this.descripción = descripción;
        this.tamaño = tamaño;
        this.precio = precio;
        this.id = id;
        this.cambiarPrecio = (nuevoPrecio) => {
            this.precio = nuevoPrecio
        }
    }
}



let cafe1 = new Cafe("latte", "café y leche", "grande", 450, 01);
let cafe2 = new Cafe("capu", "café, leche y espuma", "mediano", 450, 01);
let cafe3 = new Cafe("moka", "café, leche y chocolate", "grande", 450, 01);
let cafe4 = new Cafe("flatwhite", "cafe doble y leche", "mediano", 500, 04);





let cafes = [
    {
        nombre: "latte",
        descripción: "café y leche",
        tamaño: "grande",
        precio: 450,
        id: 01,
    },
    {
        nombre: "capu",
        descripción: "café, leche, espuma",
        tamaño: "mediano",
        precio: 450,
        id: 02,
    },
    {
        nombre: "moka",
        descripción: "café, leche, chocolate",
        tamaño: "grande",
        precio: 450,
        id: 03, 
    },
    {
        nombre: "flatwhite",
        descripción: "cafe doble y leche",
        tamaño: "mediano",
        precio: 500,
        id: 04,
    }
]

console.log(Cafe);

let totalCompra = 0
let productos = []
let carrito = []
let seguirComprando = true
let pregunta = 0;
let decision = 0;
let pregunta1 = 0;
let pregunta2 = 0;

do{
    pregunta =  Number(prompt("Si queres un: latte elegí 1, capu 2, moka 3, flatwhite 4"));
}
while(pregunta !=1 && pregunta !=2 && pregunta !=3 && pregunta !=4);

function cafeElegido (indice){
    alert("tu café contiene: " + cafes[indice-1].descripción);
}


/*for(i=0; i<cafes.length; i++){
    console.log("El café " + cafes[i].nombre + " contiene: " + cafes[i].descripción + " y cuesta: $" + cafes[i].precio);
}*/

cafeElegido(pregunta);

pregunta1 = Number(prompt("Si queres comprar un latte elegí 1, capu 2, moka 3, flatwhite 4"));

while (seguirComprando === true) {
    if (pregunta1 === 1) {
      carrito.push(productos[0])
    } else if (pregunta1 === 2) {
      carrito.push(productos[1])
    } else if (pregunta1 === 3) {
      carrito.push(productos[2])
    } else if (pregunta1 === 4) {
      carrito.push(productos[3])
    } else {
      pregunta1 = parseInt(
        prompt(
          'ingresa un producto existente: 1.Latte - 2.Capu - 3.Moka - 4.Flatwhite'
        )
      )
      continue
      }

      function cafeElegido (indice){
        alert("has comprado: " + cafes[indice-1].nombre + cafes[indice-1].precio);
      }
      cafeElegido(pregunta1);
    }


/*decision = Number(prompt('Queres seguir agregando productos? 1.Si - 2.No'))
if (decision === 1) {
  pregunta2 = Number(
    prompt(
      'Ingresa el numero del producto que quieres comprar: 1.Latte - 2.Capu - 3.Moka - 4.Flatwhite'
    )
  )
} else if (decision === 2) {
  seguirComprando = false
}





/*for(let i=0;i<carrito.length;i++){
    totalCompra = totalCompra +carrito[i].precio
  }*/

carrito.push(productos);


console.log(carrito);