import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DeleteModal } from './DeleteModal';
import { UpdateModal } from './UpdateModal';
import Collection from './interfaces/Collections';

export const CollectionBox: React.FC<Collection> = ({id, garmentCount, collection, createdAt, standard_quantity, imgUrl}) => {
    
    const fechaActual = new Date(createdAt);
    const fecha = fechaActual.getFullYear().toString()

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDeleted, setIsOpenDeleted] = useState(false);
  
    const handleEditModal = () => setIsOpen(!isOpen);
    const handleDeleteModal = () => setIsOpenDeleted(!isOpenDeleted);

	return (
        <article className="products">
        <div className="product">   
            <img src={imgUrl} alt={`imagen de coleccion de ${collection}`} />             
            <div className="product-details">
                <h3>{collection}</h3>
                    <p>{`${garmentCount} prendas`}</p>
                    <p>{fecha}</p>
                    <p>Fabricación mínima: {standard_quantity}</p>
                    <div className="button-product">
                        <button onClick={handleEditModal}>Editar</button>
                        <Link className='button-collection' to={`${id}`}>Ver prendas</Link>
                        <button onClick={handleDeleteModal}>Borrar</button>
                    </div>
                    <DeleteModal isOpen={isOpenDeleted} setIsOpen={setIsOpenDeleted} />
                    <UpdateModal id={id} updatedAt={new Date} collection={collection} standard_quantity={standard_quantity} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
    </article>
    );
};
