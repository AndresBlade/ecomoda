import { useCollection } from '../helpers/useCollection';
import { Modal } from '../../../components/ui/modal/Modal';
import { modalPropsCrud } from '../interfaces/modalPropsCRUD';
import { RefreshContext } from '../context/refresh';
import { useContext } from 'react';

export const DeleteModal: React.FC<modalPropsCrud> = ({id, isOpen, setIsOpen }) => {
    const { deleteCollection } = useCollection();
    const { handleRefresh } = useContext(RefreshContext)

    const handleDeleteCollection = () => {
        deleteCollection(id);
        handleRefresh();
        setIsOpen(false);
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <article>
                <div className='modalMaterial__header'>
                    <h2>¿Desea eliminar esta coleccion?</h2>
                    <span>No podrá recuperarse</span>
                </div>

                <div className='modalDelete'>
                    <button className='materiales_button' 
                    onClick={handleDeleteCollection}>Aceptar</button>

                    <button className='materiales_button' 
                    onClick={() => setIsOpen(false)}>Cancelar</button>
                </div>
            </article>
        </Modal>
    )
}