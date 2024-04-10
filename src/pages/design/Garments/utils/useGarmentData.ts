import { useEffect, useState } from 'react';
import { useCategory, useCollection, useSize } from '../../helpers/index';
import categoriesProps from '../../Category/interfaces/categories';
import sizeProps from '../../Size/interfaces/size';
import Collection from '../../Collections/interfaces/Collections';

export const useGarmentData = () => {
    const { getAllCategories } = useCategory();
    const { getAllSizes } = useSize();
    const { getAllCollection } = useCollection();

    const [categoriesData, setCategoriesData] = useState<categoriesProps[]>([]);
    const [sizeData, setSizeData] = useState<sizeProps[]>([]);
    const [collectionData, setCollection] = useState<Collection[]>([]);

    useEffect(() => {
        getAllCategories()
        .then(data => {
            const categoriesData = data.types;
            setCategoriesData(categoriesData); 
        }).catch(error => { throw error; })

        getAllSizes()
        .then(data => {
            const sizeData = data.sizes;
            setSizeData(sizeData);
        }).catch(error => { throw error; })

        getAllCollection()
        .then(data => {
            const collectionData = data.collections;
            setCollection(collectionData);
        }).catch(error => { throw error; })
    }, [])

    return { categoriesData, sizeData, collectionData };
};