//creo costante main


const contenedorProductos = document.getElementById('contenedor-productos')





stockProductos.forEach((producto) => {
    const div = document.createElement('div') //creo un foreach que busque cada producto de la lista y les cree un div
    div.classList.add('producto') // a ese div le ponga un class producto y cada dato que quiero en ese div
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>Talle: ${producto.talle}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>

    `
    contenedorProductos.appendChild(div)  //sirve para el div con el html

   

    const boton = document.getElementById(`agregar${producto.id}`)


    //Por cada elemento de mi array, creo un div, lo cuelgo, le pongo un id particular, una vez colgado
    //le hago un get element by id (el de agregar) Obtengo el elemento y a dicho elemento le agregamos
    //el add event listener

    boton.addEventListener('click', () => {
        //esta funcion ejecuta el agregar el carrito con la id del producto
        agregarAlCarrito(producto.id)
        //
    })
})