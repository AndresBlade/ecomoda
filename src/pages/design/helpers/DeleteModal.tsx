import { useMaterials } from './useMaterials';
import { Modal } from '../../../components/ui/modal/Modal';
import { modalProps } from '../interfaces/modalProps';

interface DeleteModalProps extends modalProps {
    materialId: number | undefined
}

export const DeleteModal: React.FC<DeleteModalProps> = ({materialId, isOpen, setIsOpen}) => {
    const { deleteMaterial } = useMaterials();

    const handleDeleteMaterial = () => {
        deleteMaterial(materialId);
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