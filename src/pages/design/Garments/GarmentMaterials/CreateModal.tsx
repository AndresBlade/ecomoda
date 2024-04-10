import { useContext, useEffect, useState } from 'react';
import { Modal } from '../../../../components/ui/modal/Modal';
import { modalPropsCrud } from '../../interfaces/modalPropsCRUD';
import { MaterialInput } from './MaterialInput';
import { useParams } from 'react-router-dom';
import { useGarmentMaterials } from '../../helpers';
import { materials } from '../../Materials/interfaces/Materials';
import { RefreshContext } from '../../context/refresh';


export const CreateModal: React.FC<modalPropsCrud> = ({isOpen, setIsOpen}) => {
    const { refresh } = useContext(RefreshContext)
    const {getUnusedGarmentMaterial} = useGarmentMaterials()
    const [materialUnusedData, setUnusedMaterial] = useState<materials[]>([]);
    const { idgarment } = useParams();

    useEffect(() => {
        getUnusedGarmentMaterial(parseInt(idgarment))
            .then(data => {
                const materialsData = data.unusedMaterials;
                setUnusedMaterial(materialsData);
            })
            .catch(error => {
                throw error; 
            });
    }, [refresh]);

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <section>
                <div className='modalMaterial__header'>
                    <h2>Asigna los materiales a la prenda</h2>
                    <span>Junto a su cantidad</span>
                </div>
                <article>
                    <MaterialInput 
                        materials={materialUnusedData}
                        setIsOpen={setIsOpen}
                    />
                </article>
            </section>
        </Modal>
    )
}