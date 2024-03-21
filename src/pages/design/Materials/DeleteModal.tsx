import { useMaterials } from '../helpers/useMaterials';
import { Modal } from '../../../components/ui/modal/Modal';
import { modalPropsCrud } from '../interfaces/modalPropsCRUD';
import { RefreshContext } from './context/refresh';
import { useContext } from 'react';

export const DeleteModal: React.FC<modalPropsCrud> = ({materialId, isOpen, setIsOpen }) => {
    const { deleteMaterial } = useMaterials();
    const { refresh, setRefresh } = useContext(RefreshContext)

    const handleRefresh = () => setRefresh(!refresh);

    const handleDeleteMaterial = () => {
        deleteMaterial(materialId);
        handleRefresh();
        setIsOpen(false);
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <article>
                <div className='modalMaterial__header'>
                    <h2>¿Desea eliminar este material?</h2>
                    <span>No podrá recuperarse</span>
                </div>

                <div className='modalDelete'>
                    <button className='materiales_button' 
                    onClick={handleDeleteMaterial}>Aceptar</button>

                    <button className='materiales_button' 
                    onClick={() => setIsOpen(false)}>Cancelar</button>
                </div>
            </article>
        </Modal>
    )
}