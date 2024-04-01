import { useState, useEffect } from 'react';
import { useCategory, useCollection, useSize } from '../helpers/index';
import { Modal } from '../../../components/ui/modal/Modal';
import { modalPropsCrud } from '../interfaces/modalPropsCRUD';
import { CreateForm } from './createForm';
import categoriesProps from '../Category/interfaces/categories';
import sizeProps from '../Size/interfaces/size';
import Collection from '../Collections/interfaces/Collections';

export const CreateModal: React.FC<modalPropsCrud> = ({isOpen, setIsOpen}) => {
    //Aca consumiremos los fetch
    const { getAllCategories } = useCategory();
    const [categoriesData, setCategoriesData] = useState<categoriesProps[]>([]);

    const { getAllSizes } = useSize();
    const [sizeData, setSizeData] = useState<sizeProps[]>([]);

    const { getAllCollection } = useCollection();
    const [collectionData, setCollection] = useState<Collection[]>([])
    

    useEffect(() => {
        getAllCategories()
        .then(data => {
            const categoriesData = data.types;
            setCategoriesData(categoriesData); 
        })
        .catch(error => {
            throw error; 
        })
        getAllSizes()
        .then(data => {
            const sizeData = data.sizes;
            setSizeData(sizeData);
        })
        .catch(error => {
            throw error; 
        })
        getAllCollection()
        .then(data => {
            const collectionData = data.collections;
            setCollection(collectionData);
        })

        

    }, [])

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <section>
                <div className='modalMaterial__header'>
                    <h2>Nueva prenda</h2>
                    <span>Rellena los campos</span>
                </div>
                <article>
                    <CreateForm garmentTypes={categoriesData} sizes={sizeData} collections={collectionData} />
                </article>
            </section>
        </Modal>
    )
}