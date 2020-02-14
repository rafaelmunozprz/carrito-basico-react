import React from 'react';

/**
 * @param Header componente JSX del header
 */
const Header = ({titulo})=>{
    
    return (
        <header>
            <h1 className="encabezado">
                {titulo}
            </h1>
        </header>        
    );
};

export default Header;