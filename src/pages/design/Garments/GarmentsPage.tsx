
export const GarmentsPage = () => {
	return (
        <section>
            <div className="texto-materiales">
                <h1>Prendas Disponibles</h1>
                    
            </div>
                 <div className="cuadricula-prenda">
                    <div className="cuadrante">
                        <img src="https://indiwoman.files.wordpress.com/2012/05/mr520.jpg" alt="Imagen 1" className="imagen-producto"/>
                            <div className="texto-cuadrante">
                                <h3>Vestido Blanco</h3>
                                <h5>Vestido</h5>    
                                <h5 className="texto-talla">Talla S</h5>
                                <button className="boton"></button>
                            </div>
                    </div>
                    <div className="cuadrante">
                        <img src="https://indiwoman.files.wordpress.com/2012/05/mr520.jpg" alt="Imagen 1" className="imagen-producto"/>
                            <div className="texto-cuadrante">
                                <h3>Vestido Blanco</h3>
                                <h5>Vestido</h5>    
                                <h5 className="texto-talla">Talla S</h5>
                                <button className="boton"></button>
                            </div>
                    </div>
                    <div className="cuadrante">
                        <img src="https://indiwoman.files.wordpress.com/2012/05/mr520.jpg" alt="Imagen 1" className="imagen-producto"/>
                            <div className="texto-cuadrante">
                                <h3>Vestido Blanco</h3>
                                <h5>Vestido</h5>    
                                <h5 className="texto-talla">Talla S</h5>
                                <button className="boton"></button>
                            </div>
                    </div>
                    <div className="cuadrante">
                        <img src="https://indiwoman.files.wordpress.com/2012/05/mr520.jpg" alt="Imagen 1" className="imagen-producto"/>
                            <div className="texto-cuadrante">
                                <h3>Vestido Blanco</h3>
                                <h5>Vestido</h5>    
                                <h5 className="texto-talla">Talla S</h5>
                                <button className="boton"></button>
                            </div>
                    </div>
                    
                    
                 </div>
                 <div className="filtro">
                      <div className="filtro-titulo">Filtrar</div>
                      <div className="filtro-opciones">
                        <div className="filtro-seccion">
                          <span className="filtro-seccion-titulo">Tallas</span>
                          <label className="filtro-label">
                            <input type="checkbox" className="filtro-checkbox" /> S
                          </label>
                          <label className="filtro-label">
                            <input type="checkbox" className="filtro-checkbox" /> M
                          </label>
                          <label className="filtro-label">
                            <input type="checkbox" className="filtro-checkbox" /> L
                          </label>
                          <label className="filtro-label">
                            <input type="checkbox" className="filtro-checkbox" /> XL
                          </label>
                        </div>
                        <div className="filtro-seccion">
                          <span className="filtro-seccion-titulo">Tipos de Prenda</span>
                          <label className="filtro-label">
                            <input type="checkbox" className="filtro-checkbox" /> Camisas
                          </label>
                          <label className="filtro-label">
                            <input type="checkbox" className="filtro-checkbox" /> Pantalones
                          </label>
                          <label className="filtro-label">
                            <input type="checkbox" className="filtro-checkbox" /> Vestidos
                          </label>
                          <label className="filtro-label">
                            <input type="checkbox" className="filtro-checkbox" /> Faldas
                          </label>
                          <label className="filtro-label">
                            <input type="checkbox" className="filtro-checkbox" /> Frenelas
                          </label>
                          <label className="filtro-label">
                            <input type="checkbox" className="filtro-checkbox" />  Shorts 
                          </label>
                        </div>
                      </div>
                      <button className="btn-filtros">Aplicar filtros</button>
                    </div>
                                              
        </section>
    );
};
