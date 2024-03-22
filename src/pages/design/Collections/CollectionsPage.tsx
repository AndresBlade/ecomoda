
export const CollectionsPage = () => {
	return (
        <body>
            <section>
                <div className="texto-materiales">
                    <h1>Colecciones Disponibles</h1>
                </div>

                <div className="filters">
                    <h2>Filtros</h2>
                    <div className="filter">
                        <div className="filter-item">
                            <h3>Fecha</h3>
                            <input type="date"/>
                        </div>
                        <div className="filter-item">
                            <h3>Tallas</h3>
                            <select>
                            <option value="">Selecciona...</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            </select>
                        </div>
                        <div filter-item>
                            <h3>Tipo de Prenda</h3>
                            <select>
                            <option value="">Selecciona...</option>
                            <option value="camisas">Camisas</option>
                            <option value="pantalones">Pantalones</option>
                            </select>
                        </div>
                    </div>
                </div>
        <div className="container">
            <div className="products">
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
                                     
            </div>
      
        </div>

            </section>
        </body>
    );
};
