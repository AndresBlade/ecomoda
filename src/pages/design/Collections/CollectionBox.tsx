import { useState } from 'react';
import { DeleteModal } from './DeleteModal';
import { UpdateModal } from './UpdateModal';
import Collection from './interfaces/Collections';

export const CollectionBox: React.FC<Collection> = ({id, collection, createdAt, standard_quantity}) => {
    
    const fechaActual = new Date(createdAt);
    const fecha = fechaActual.getFullYear().toString()

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDeleted, setIsOpenDeleted] = useState(false);
  
    const handleEditModal = () => setIsOpen(!isOpen);
    const handleDeleteModal = () => setIsOpenDeleted(!isOpenDeleted);

	return (
        <article className="products">
        <div className="product">   
            <img src="https://m.media-amazon.com/images/I/710iDM5hGPL._AC_SL1500_.jpg" alt="Producto 1"/>             
            <div className="product-details">
                <h3>{collection}</h3>
                    <p>5 prendas</p>
                    <p>{fecha}</p>
                    <p>Fabricación mínima: {standard_quantity}</p>
                    <div className="button-product">
                        <button onClick={handleEditModal}>Editar</button>
                        <button>Añadir prenda</button>
                        <button onClick={handleDeleteModal}>Borrar</button>
                    </div>
                    <DeleteModal isOpen={isOpenDeleted} setIsOpen={setIsOpenDeleted} />
                    <UpdateModal id={id} updatedAt={new Date} collection={collection} standard_quantity={standard_quantity} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
    </article>
    );
};
