let productos = []
let carrito = []

class Cafe {
    constructor(nombre, descripción, tamaño, precio, img, id){
        this.nombre = nombre;
        this.descripción = descripción;
        this.tamaño = tamaño;
        this.precio = precio;
        this.img = img;
        this.id = id;
    }
        desplegarProductos(){
          const card = `
          <div class="card">
              <p>${this.nombre}</p>
              <div>
                  <img class='imgProducto' src=${this.img} alt="foto del producto"/>
              </div>
              <div>
                  <p>$${this.precio}</p>
              </div>
              <div class="btn-container">
                  <button id=${this.id} class='btnAgregar'>AGRGEGAR AL CARRITO</button>
              </div>
          </div>
      ` 
      const container = document.getElementById("container")
      container.innerHTML += card
    
        }
      agregarEvento(){
        const btnAgregar = document.getElementById(this.id);
        btnAgregar.onclick = exito // Se agraga librería Sweet alert
        function exito(){ 

          Swal.fire({
            title: "Éxito",
            text: "Producto agregado",
            icon: "success"
          })
        }

        const productoEncontrado = productos.find(product => product.id == this.id);
        btnAgregar.addEventListener('click', () => agregarAlCarrito(productoEncontrado));
          
      }
    }

let cafe1 = new Cafe("latte", "café y leche", "grande", 450, "./Imagenes/latte.jpg", 01);
let cafe2 = new Cafe("capu", "café, leche y espuma", "mediano", 450, "./Imagenes/capu.jpg", 02);
let cafe3 = new Cafe("moka", "café, leche y chocolate", "grande", 450, "./Imagenes/moka.jpg", 03);
let cafe4 = new Cafe("flatwhite", "cafe doble y leche", "mediano", 500, "./Imagenes/flatwhite.jpg", 04);

productos.push(cafe1, cafe2, cafe3, cafe4);

productos.forEach(e => {
  e.desplegarProductos()
})
productos.forEach(e => {
  e.agregarEvento()
})

function agregarAlCarrito(producto) {
  console.log("haciendo click en agregar al carrito"); //Se agrega evento haciendo click en agregar al carrito
  let enCarrito = carrito.find(prod => prod.id == producto.id)
  
  if(!enCarrito){
      carrito.push({...producto, cantidad: 1}) //Operadores avanzados: Spread
  } else {
      let carritoFiltrado = carrito.filter(prod => prod.id != producto.id)
      carrito = [...carritoFiltrado, { ...enCarrito, cantidad: enCarrito.cantidad + 1}] //Operadores avanzados: Spread 
  } 

  contador.innerHTML =  carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
  
}
const contador = document.getElementById('cartCounter')
contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)


const datos = (clave, valor) => { localStorage.setItem(clave, valor) }; //Se almacenan datos en Local Storage
datos("cafe", JSON.stringify(productos));


const almacenados = JSON.parse(localStorage.getItem("cafe")); //Se recuperan datos almacenados
const data = [];

for(const objeto of almacenados)
data.push(new Cafe(objeto));

console.log(almacenados);