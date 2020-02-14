import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components//Carrito';

function App() {
    //Listado de productos
    const [productos, guardarProductos] = useState([
        {
            id: 1,
            nombre: 'Camisa React JS',
            precio: 50
        },
        {
            id: 2,
            nombre: 'Camisa Angular JS',
            precio: 45
        },
        {
            id: 3,
            nombre: 'Camisa Vue JS',
            precio: 40
        },
        {
            id: 4,
            nombre: 'Camisa JS',
            precio: 35
        },
        {
            id: 5,
            nombre: 'Camisa Node JS',
            precio: 30
        }
    ]);

    //State para un carrito de compras
    //El primer valor hace referencia al valor del state 
    //y el segundo es la funcion para modificarlo
    const [carrito, agregarProducto] = useState([])
    //Objetener fecha
    const fecha = new Date().getFullYear();
    return (
        <Fragment>
            <Header titulo="Tienda Virtual" numero={20} />
            <h1>Lista de Productos</h1>
            {productos.map(producto => (
                <Producto
                    key={producto.id}
                    producto={producto}
                    productos={productos}
                    carrito={carrito}
                    agregarProducto={agregarProducto}                    
                />
            ))}

            <Carrito
                carrito={carrito}
                agregarProducto={agregarProducto}
            />
            <Footer fecha={fecha} />
        </Fragment>
    );
}

export default App;
