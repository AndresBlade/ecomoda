import { useContext, useState } from 'react';
import { Modal } from '../../../../components/ui/modal/Modal';
import { RefreshContext } from '../../context/refresh';
import { useGarmentMaterials } from '../../helpers';
import { updateGarmentMaterialProps } from '../interfaces/UpdateProps';

export const UpdateModal: React.FC<updateGarmentMaterialProps> = ({ id, isOpen, setIsOpen, quantity }) => {
    const { updateGarmentMaterial } = useGarmentMaterials();
    const { handleRefresh } = useContext(RefreshContext);

    const [updateQuantity, setUpdateQuantity] = useState<string>(quantity.toString());

    const handleUpdateMaterial = () => {
        const quantityInt = parseInt(updateQuantity);
        updateGarmentMaterial(id, quantityInt) 
            .then(() => {
                handleRefresh();
                setIsOpen(false);
            }).catch(error => {
                throw error;
            });
    };

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <article className='modalMaterial'>
                <div className='modalMaterial__header'>
                    <h2>Editar material de la prenda</h2>
                    <span>Edita la cantidad</span>
                </div>
                <input
                    className='garmentQuantity'
                    type="number"
                    value={updateQuantity}
                    onChange={(e) => setUpdateQuantity(e.target.value)}
                /> 
                <button onClick={handleUpdateMaterial}
                    className='materiales_button'>Editar material</button>
            </article>
        </Modal>
    )
}