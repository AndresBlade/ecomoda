import { useCategory } from '../helpers/useCategory';
import { Modal } from '../../../components/ui/modal/Modal';
import { deletePropsCategory } from '../interfaces/DeletePropsCat';


export const DeleteModal: React.FC<deletePropsCategory> = ({categoryId, isOpen, setIsOpen}) => {
    const { deleteCategory } = useCategory();

    const handleDeleteCategory = () => {
        deleteCategory(categoryId);
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