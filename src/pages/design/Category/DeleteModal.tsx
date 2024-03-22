import { useContext } from 'react';
import { useCategory } from '../helpers/useCategory';
import { Modal } from '../../../components/ui/modal/Modal';
import { RefreshContext } from '../context/refresh';
import { modalPropsCrud } from '../interfaces/modalPropsCRUD';


export const DeleteModal: React.FC<modalPropsCrud> = ({id, isOpen, setIsOpen}) => {
    const { deleteCategories } = useCategory();
    const { handleRefresh } = useContext(RefreshContext)

    const handleDeleteCategory = () => {
        deleteCategories(id);
        handleRefresh();
        setIsOpen(false);
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <article>
                <div className='modalMaterial__header'>
                    <h2>¿Desea eliminar esta categoria?</h2>
                    <span>No podrá recuperarse</span>
                </div>

                <div className='modalDelete'>
                    <button className='materiales_button' 
                    onClick={handleDeleteCategory}>Aceptar</button>

                    <button className='materiales_button' 
                    onClick={() => setIsOpen(false)}>Cancelar</button>
                </div>
            </article>
        </Modal>
    )
}