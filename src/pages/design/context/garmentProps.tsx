import { createContext, ReactNode } from 'react';
import { useGarmentData } from '../Garments/utils/useGarmentData';
import categoriesProps from '../Category/interfaces/categories';
import Size from '../interfaces/SizeProps';
import Collection from '../Collections/interfaces/Collections';

interface GarmentDataContextProps {
    categoriesData: categoriesProps[];
    sizeData: Size[];
    collectionData: Collection[];
}

export const GarmentDataContext = createContext<GarmentDataContextProps>({
    categoriesData: [],
    sizeData: [],
    collectionData: [],
});

export const GarmentDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { categoriesData, sizeData, collectionData } = useGarmentData();

    return (
        <GarmentDataContext.Provider value={{ categoriesData, sizeData, collectionData }}>
            {children}
        </GarmentDataContext.Provider>
    )
}