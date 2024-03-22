import { useState } from 'react';
import { DeleteModal } from './DeleteModal';
import { UpdateModal } from './UpdateModal';
import size from "./interfaces/size";

export const SizeBox: React.FC<size> = ({ id, size }) => { 
    
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDeleted, setIsOpenDeleted] = useState(false);

    const handleEditModal = () => setIsOpen(!isOpen);
    const handleDeleteModal = () => setIsOpenDeleted(!isOpenDeleted);

	return (
    <article className="rectangulo">
        <div className="rectangulo-materiales categories">
            <div className="seccion">
                <label className="nombre">{size}</label>
                <label>ID: {id}</label>
            </div>

            <div className="seccion">
                <button onClick={handleEditModal}>Editar</button>

                <button onClick={handleDeleteModal}>Eliminar</button>       
            </div>
        </div>

        <UpdateModal 
            sizeId={id} 
            size={size} 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />

        <DeleteModal 
            id={id} 
            isOpen={isOpenDeleted} 
            setIsOpen={setIsOpenDeleted}/>
    </article>
    );
};
