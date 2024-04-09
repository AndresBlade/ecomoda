import { Link } from 'react-router-dom';
import { CollectionBox } from './CollectionBox';
import { GarmentBox } from './GarmentBox';

export const DesignPage = () => {
	return (
        <section>
            <div className="design-index">
                <div className="coleccion-materiales">
                    <h2>Nuevas Colecciones</h2>
                    <CollectionBox  id={1} garmentCount={3} collection={'Primavera'} 
                    standard_quantity={4} imgUrl={'https://i.ibb.co/cDLnTvT/Sin-t-sstulo.png'} 
                    countCollection={3}
                    />
                    <h3>{`Colecciones totales ${1}`}</h3>
                    <Link to={'colecciones'}><h5>Ver todas las colecciones 🡢</h5></Link> 
                </div>
                
               <div className="prendas-materiales">
                 <div className="bloque-prendas">
                    <div className="cuadrante-index">
                        <GarmentBox garment={'Camisa'} />
                        <GarmentBox garment={'Pantalon'} />
                        <GarmentBox garment={'Blusa'} />
                    </div>
                    <h3>{`Prendas totales ${3}`}</h3>
                    <Link to={'prendas'}><h5>Ver todas las prendas 🡢</h5></Link> 
                </div>
     

                 <div className="bloque-añadidos-recientes">
                    <div className="bloque-añadidos">
                        <h2>Materiales</h2>
                        <h3>Añadidos recientemente</h3>
                        <nav className="materiales-recientes">
                        <Link to={'materiales'}><h5>Ver todas los materiales 🡢</h5></Link> 
                        <ul>
                                <li>
                                    <h4>Algodón</h4>
                                    <h5>Es suave, transpirable y cómodo, ideal para ropa de verano y ropa interior.</h5>
                                </li>
                                <li>
                                <h4>Seda</h4>
                                    <h5>Suave y lujosa al tacto. Se utiliza en ropa de alta gama como vestidos y blusas.</h5>
                                </li>
                                <li>
                                    <h4>Botones de Plástico</h4>
                                    <h5>Pequeños botones de plástico con cuatro agujeros, hechos de poliacrilonitrilo.</h5>
                                </li>
                            </ul>
                            </nav>
                        </div>
                 </div>
               </div>
            </div>
        </section>
    );
};
