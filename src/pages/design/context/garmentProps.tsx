import { createContext, ReactNode } from 'react';
import { useGarmentData } from '../Garments/utils/useGarmentData';
import categoriesProps from '../Category/interfaces/categories';
import Size from '../interfaces/SizeProps';
import Collection from '../Collections/interfaces/Collections';
import { materials } from '../Materials/interfaces/Materials';

interface GarmentDataContextProps {
    categoriesData: categoriesProps[];
    sizeData: Size[];
    collectionData: Collection[];
    materialData: materials[];
}

export const GarmentDataContext = createContext<GarmentDataContextProps>({
    categoriesData: [],
    sizeData: [],
    collectionData: [],
    materialData: []
});

export const GarmentDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { categoriesData, sizeData, collectionData, materialData } = useGarmentData();

    return (
        <GarmentDataContext.Provider value={{ categoriesData, sizeData, collectionData, materialData }}>
            {children}
        </GarmentDataContext.Provider>
    )
}