import React from 'react';
import '../assets/css/carrito.css';
import Producto from './Producto';

const Carrito = ({carrito, agregarProducto}) => (
    <div className="carrito">
        <h2>
            Carrito de compras
            {carrito.length === 0 
            ?<p>No hay elementos</p>
            :carrito.map(producto=>(
                <Producto
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    agregarProducto={agregarProducto}
                />
            ))}
        </h2>
    </div>
);

export default Carrito;