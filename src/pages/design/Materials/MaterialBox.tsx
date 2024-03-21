import { materials } from './interfaces/Materials'
import { useState } from 'react';
import { DeleteModal } from './DeleteModal';
import { UpdateModal } from './UpdateModal';

export const MaterialBox: React.FC<materials> = ({ id, material, description, unit }) => {

    const sliderActive = unit === 'meters' ? 'sliderOn' : '';
        const [isOpen, setIsOpen] = useState(false);
        const [isOpenDeleted, setIsOpenDeleted] = useState(false);
      
        const handleEditModal = () => setIsOpen(!isOpen);
        const handleDeleteModal = () => setIsOpenDeleted(!isOpenDeleted);
    
	return (
    <article className="rectangulo">
        <div className="rectangulo-materiales">
            <div className="seccion">
                <label className="nombre">{material}</label>
                <label>ID: {id}</label>
            </div>

            <div className="seccion">
                <label className="descripcion-materiales">Descripción</label>
                <p className="descripcion-materiales">{description}</p>
            </div>

            <div className="seccion">
                <label className="medida-materiales">CM | M</label> 
                <label className="switch">
                    <span className={`slider round ${sliderActive}`}></span>
                </label>
            </div>

            <div className="seccion">
                <button onClick={handleEditModal}>Editar</button>

                <button onClick={handleDeleteModal}>Eliminar</button>       
            </div>
        </div>

        <UpdateModal 
            materialId={id} 
            material={material} 
            description={description}
            unit={unit}
            isOpen={isOpen} 
            setIsOpen={setIsOpen}
        />

        <DeleteModal materialId={id} isOpen={isOpenDeleted} setIsOpen={setIsOpenDeleted}/>
    </article>
    );
};
