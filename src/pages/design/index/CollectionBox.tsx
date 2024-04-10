import { useState } from 'react';
import { Link } from 'react-router-dom';
import Collection from '../Collections/interfaces/Collections';

export const CollectionBox: React.FC<Collection> = ({id, garmentCount, collection, standard_quantity, imgUrl}) => {
    
   

	return (
    <div className="bloque-coleccion">
        <h3>Añadido recientemente</h3>
        <div className="cuadro-coleccion">
            <img src={imgUrl} alt="Imagen" className="imagen-producto"/>
            <div className="contenedor-coleccion">
                <div className="row">
                    <h3>Colección Pinky</h3>
                    <p className="texto-opacity">{`${garmentCount} prendas`}</p>
                    <button></button>
                </div>
                <div className="row">
                    <p className="texto-opacity">2024</p>
                </div>
                <div className="row">
                    <p className="texto-opacity">{`Fabricación Mínima: ${standard_quantity}`}</p>
                </div>
            </div>
        </div>
    </div>
    );
};
