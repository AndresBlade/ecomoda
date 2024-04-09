import { garmentsMaterials } from '../Garments/interfaces/GarmentMaterial';
import { GarmentMaterialWrapper } from '../Garments/interfaces/GarmentMaterialWrapper';

export const useGarmentMaterials = () => {
    
    const getAllGarmentsMaterials = (): Promise<GarmentMaterialWrapper> =>
        fetch('http://localhost:3000/api/garmentsmaterials/getallgarmentsmaterials').then(
            response => response.json() as Promise<GarmentMaterialWrapper>
        );
        
    // ------------------------------------------------------------------------

    const createGarmentMaterial = (data: string): Promise<GarmentMaterialWrapper> => {
        return fetch('http://localhost:3000/api/garmentsmaterials/creategarmentsmaterials', {
            body: data,
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
        }).then(response => response.json() as Promise<GarmentMaterialWrapper>);
      };

    // ------------------------------------------------------------------------

    const deleteGarmentsMaterials = (idgarmentsmaterials: number | undefined) =>
	fetch(`http://localhost:3000/api/garmentsmaterials/deletegarmentsmaterials/${idgarmentsmaterials}`, {
		method: 'DELETE',
	}).then(response => response.json());

    // ------------------------------------------------------------------------



    // ------------------------------------------------------------------------



  //---------------------------------------------------------------------------

    return { getAllGarmentsMaterials, deleteGarmentsMaterials, createGarmentMaterial };
};