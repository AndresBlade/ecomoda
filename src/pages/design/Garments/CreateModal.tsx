import { useContext } from 'react';
import { Modal } from '../../../components/ui/modal/Modal';
import { modalPropsCrud } from '../interfaces/modalPropsCRUD';
import { CreateForm } from './createForm';
import { GarmentDataContext } from '../context/garmentProps';


export const CreateModal: React.FC<modalPropsCrud> = ({isOpen, setIsOpen}) => {
    const { categoriesData, sizeData, collectionData } = useContext(GarmentDataContext);

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <section>
                <div className='modalMaterial__header'>
                    <h2>Nueva prenda</h2>
                    <span>Rellena los campos</span>
                </div>
                <article>
                    <CreateForm garmentTypes={categoriesData} sizes={sizeData} collections={collectionData} setIsOpen={setIsOpen}/>
                </article>
            </section>
        </Modal>
    )
}