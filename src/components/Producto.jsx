import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {
    const {nombre, precio, id} = producto;
    //Agregar producto al carrito
    const seleccionarProducto = (id) =>{
        const producto = productos.filter(producto=> producto.id===id)[0];
        //El state solo se modifica mediante su modificador NUNCA
        //por asignacion
        agregarProducto([
            ...carrito,
            producto
        ]);
    }

    //Eliminar producto
    const eliminarProducto = (id) =>{
        const productos = carrito.filter(producto => producto.id !== id)
        //Colocar producto en el state
        agregarProducto(productos);
    }
    return (
        <div>
            <h2 id={id}>{`Producto: ${nombre}, Precio: $${precio}`}</h2>            
            {
                productos
                ?
                    <button
                        type="button"
                        onClick={()=> seleccionarProducto(id)}
                    >
                        Comprar
                    </button>
                :
                    <button
                        type="button"
                        onClick={()=>eliminarProducto(id)}
                    >
                        Eliminar
                    </button>
            }
        </div>
    );
};

export default Producto;