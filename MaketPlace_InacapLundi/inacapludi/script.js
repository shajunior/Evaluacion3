let nombreDeUsuario = ""

const productos = [
    {
        id: 1,
        nombre:'Tablero de damas',
        precio: 3500,
        img: "./assets/p0001.png"
    },
    {
        id: 2,
        nombre: 'Tablero de Ajedrez',
        precio: 1500,
        img: "./assets/p0002.jpg"
    },
    {
        id: 3,
        nombre: 'Dungeons & Dragons 5ed, Manual del Jugador',
        precio: 4400,
        img: "./assets/p0003.jpg"
    },
    {
        id: 4,
        nombre: 'Scythe',
        precio: 10000,
        img: "./assets/p0004.png"
    },
    {
        id: 5,
        nombre: 'Juego Creativo',
        precio: 30000,
        img: "./assets/p0005.png"
    },
    {
        id: 6,
        nombre: 'Aventureros al Tren (Ticket to Ride)',
        precio: 70000,
        img: "./assets/p0006.png"
    },
    {
        id: 7,
        nombre: 'Dobble',
        precio: 90000,
        img: "./assets/p0007.png"
    },
    {
        id: 8,
        nombre: 'Catan, El Juego',
        precio: 150000,
        img: "./assets/p0008.png"
    },
    {
        id: 9,
        nombre: 'Arkham Horror',
        precio: 250000,
        img: "./assets/p0009.png"
    },
    {
        id: 10,
        nombre: 'Timeline - Eventos',
        precio: 350000,
        img: "./assets/p0010.png"
    }
    
]

const contenedorProductos = document.getElementById("listadoProductos")

productos.map((producto) => {
    let htmlProducto = `
        <div class="cardProducto" id="${producto.id}">
            <img src="${producto.img}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        </div>
    `
    contenedorProductos.innerHTML += htmlProducto
})

let carritoDeCompra = []

function agregarAlCarrito(idProducto) {
    carritoDeCompra.push(
        productos.find((producto) => producto.id == idProducto)
    );

    console.log(carritoDeCompra)
}

function verCarrito() {
    const dialogCarrito = document.getElementById("dialogCarrito")
    dialogCarrito.showModal();
    const listadoCarrito = document.getElementById("listadoCarrito")
    listadoCarrito.innerHTML = ""

    carritoDeCompra.map((producto) => {
        let htmlProducto = `
        <div class="cardProductoCarrito" id="${producto.id}">
            <img src="${producto.img}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        </div>
    `
        listadoCarrito.innerHTML += htmlProducto
    })
}

function cerrarCarrito() {
    const dialogCarrito = document.getElementById("dialogCarrito")
    dialogCarrito.close();
}

function iniciarSesion(){
    const nombreDeUsuario = document.getElementById("nombreDeUsuario").value

    if(nombreDeUsuario.length == 0){
        return
    }

    const inicioDeSesion = document.getElementById("inicioDeSesion")
    inicioDeSesion.innerHTML =""
    inicioDeSesion.innerHTML += `
        <h1>Bienvenid@ ${nombreDeUsuario}</h1>
    `
}