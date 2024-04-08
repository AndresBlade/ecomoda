import { useContext } from 'react';
import { Modal } from '../../../../components/ui/modal/Modal';
import { modalPropsCrud } from '../../interfaces/modalPropsCRUD';
import { GarmentDataContext } from '../../context/garmentProps';
import { MaterialInput } from './MaterialInput';

export const CreateModal: React.FC<modalPropsCrud> = ({isOpen, setIsOpen}) => {
    const { materialData } = useContext(GarmentDataContext);
    console.log(materialData)
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <section>
                <div className='modalMaterial__header'>
                    <h2>Asigna los materiales a la prenda</h2>
                    <span>Junto a su cantidad</span>
                </div>
                <article>
                    <MaterialInput 
                        materials={materialData}
                    />
                </article>
            </section>
        </Modal>
    )
}