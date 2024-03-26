export const CollectionBox = () => {
	return (
        <article className="products">
        <div className="product">   
            <img src="https://m.media-amazon.com/images/I/710iDM5hGPL._AC_SL1500_.jpg" alt="Producto 1"/>             
            <div className="product-details">
                <h3>Colección Pinky</h3>
                    <p>5 prendas</p>
                    <p>2024</p>
                    <p>Fabricación mínima: 5</p>
                    <div className="button-product">
                        <button>Editar</button>
                        <button>Añadir prenda</button>
                        <button>Borrar</button>
                    </div>
            </div>
        </div>
    </article>
    );
};
