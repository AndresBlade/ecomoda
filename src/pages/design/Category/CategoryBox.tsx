import { useState } from 'react';
import { DeleteModal } from '../helpers/DeleteModal';
import { UpdateModal } from '../helpers/UpdateModal';
import categoryProps from '../interfaces/CategoryProps';

export const CategoryBox: React.FC<categoryProps> = ({ id, type }) => {    
	return (
    <article className="rectangulo">
        <div className="rectangulo-materiales categories">
            <div className="seccion">
                <label className="nombre">{type}</label>
                <label>ID: {id}</label>
            </div>

            <div className="seccion">
                <button>Editar</button>

                <button>Eliminar</button>       
            </div>
        </div>
    </article>
    );
};
