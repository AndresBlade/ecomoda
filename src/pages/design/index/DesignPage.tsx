
export const DesignPage = () => {
	return (
        <section>
            <div className="design-index">
                <div className="coleccion-materiales">
                    <div className="bloque-coleccion">
                            <h2>Primavera</h2>
                            <h3>Nueva Colección</h3>
                            <div className="cuadro-coleccion">
                            <img src="https://i.ibb.co/cDLnTvT/Sin-t-sstulo.png" alt="Imagen 1" className="imagen-producto"/>
                            <div className="contenedor-coleccion">
                                    <div className="row">
                                        <h3>Colección Pinky</h3>
                                        <p className="texto-opacity">5 prendas</p>
                                        <button></button>
                                    </div>
                                    <div className="row">
                                        <p className="texto-opacity">2024</p>
                                    </div>
                                    <div className="row">
                                        <p className="descripcion-coleccion">Prendas comódas que se caracteriza por su alegría y vivacidad. Con colores brillantes, diseños innovadores, esta colección captura la alegría de la temporada.z</p>
                                    </div>
                                    <div className="row">
                                        <p className="texto-opacity">Fabricación Mínima: 5</p>
                                    </div>
                                    <div className="row">
                                            <div className="coleccion-button">
                                                <button>Editar</button>
                                                <button>Añadir Prenda</button>
                                            </div>
                                    </div>
                                    </div>
                            </div>
                            <h5>Ver todas las colecciones 🡢</h5>      
                    </div>
                    
                    <div className="bloque-materiales-disp">
                        <h3>Materiales disponibles para prendas</h3>
                        <img src="https://casatextil.com.co/cdn/shop/files/Telas_por_rollos.JPGcom.png?v=1699924368&width=1420" alt="Imagen 1" className="imagen-producto"/>
                        <h5>Ver todos las materiales 🡢</h5> 
                    </div>
                </div>
                
               <div className="prendas-materiales">
                 <div className="bloque-prendas">
                         <h2>Prendas</h2>
                         <h3>Añadido recientemente</h3>
                         <div className="cuadrante-index">
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
                             <div>
                                 <button className="boton-prendas">🡢</button>
                             </div>
                         </div>
                         <h5>Ver todas las prendas 🡢</h5>
                           
                 </div>
                 <div className="bloque-materiales-recientes">
                    <h2>Materiales</h2>
                    <h3>Añadido recientemente</h3>
                    <div className="materiales-recientes">
                        <h4>Algodón</h4>
                        <h5>Es suave, transpirable y cómodo, ideal para ropa de verano y ropa interior.</h5>
                    </div>
                    <div className="materiales-recientes">
                        <h4>Seda</h4>
                        <h5>Suave y lujosa al tacto. Se utiliza en ropa de alta gama como vestidos y blusas.</h5>
                    </div>
                    <div className="materiales-recientes">
                        <h4>Botones de Plástico</h4>
                        <h5>Pequeños botones de plástico con cuatro agujeros, hechos de poliacrilonitrilo.</h5>
                    </div>
                 </div>
               </div>
            </div>
        </section>
    );
};
