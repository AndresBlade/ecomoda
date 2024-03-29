import { useState } from 'react';
import { DeleteModal } from '../Category/DeleteModal';
import { UpdateModal } from '../Category/UpdateModal';
import categoriesProps from "./interfaces/categories";

export const CategoryBox: React.FC<categoriesProps> = ({ id, type }) => { 
    
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDeleted, setIsOpenDeleted] = useState(false);

    const handleEditModal = () => setIsOpen(!isOpen);
    const handleDeleteModal = () => setIsOpenDeleted(!isOpenDeleted);

	return (
    <article className="rectangulo">
        <div className="rectangulo-materiales categories">
            <div className="seccion">
                <label className="nombre">{type}</label>
                <label>ID: {id}</label>
            </div>

            <div className="seccion">
                <button onClick={handleEditModal}>Editar</button>

                <button onClick={handleDeleteModal}>Eliminar</button>       
            </div>
        </div>

        <UpdateModal 
            categoryId={id} 
            type={type} 
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
