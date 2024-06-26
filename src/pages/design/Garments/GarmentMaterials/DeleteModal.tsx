import { RefreshContext } from '../../context/refresh';
import { useContext } from 'react';
import { useGarmentMaterials } from '../../helpers';
import { Modal } from '../../../../components/ui/modal/Modal';
import { modalPropsCrud } from '../../interfaces/modalPropsCRUD';

export const DeleteModal: React.FC<modalPropsCrud> = ({id, isOpen, setIsOpen }) => {
    const { deleteGarmentsMaterials } = useGarmentMaterials();
    const { handleRefresh } = useContext(RefreshContext)

    const handleDeleteMaterialGarment = () => {
        deleteGarmentsMaterials(id);
        handleRefresh();
        setIsOpen(false);
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <article>
                <div className='modalMaterial__header'>
                    <h2>¿Desea desligar este material de esta prenda?</h2>
                    <span>No podrá recuperarse</span>
                </div>

                <div className='modalDelete'>
                    <button className='materiales_button' 
                    onClick={handleDeleteMaterialGarment}>Aceptar</button>

                    <button className='materiales_button' 
                    onClick={() => setIsOpen(false)}>Cancelar</button>
                </div>
            </article>
        </Modal>
    )
}