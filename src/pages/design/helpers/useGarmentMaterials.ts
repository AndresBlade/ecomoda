import { GarmentMaterialWrapper } from '../Garments/interfaces/GarmentMaterialWrapper';
import { materialWrapper } from '../Materials/interfaces/materialsWrapper';

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

    const updateGarmentMaterial = (id: number | undefined, quantity: number): Promise<GarmentMaterialWrapper> => {
        const data = {
            quantity: quantity
        };
    
        return fetch(`http://localhost:3000/api/garmentsmaterials/updategarmentsmaterials/${id}`, {
            body: JSON.stringify(data),
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        }).then(response => response.json() as Promise<GarmentMaterialWrapper>);
    };

    // ------------------------------------------------------------------------

    const deleteGarmentsMaterials = (idgarmentsmaterials: number | undefined) =>
	fetch(`http://localhost:3000/api/garmentsmaterials/deletegarmentsmaterials/${idgarmentsmaterials}`, {
		method: 'PUT',
	}).then(response => response.json());

    // ------------------------------------------------------------------------

    const getOneGarmentMaterial = (id:string | undefined): Promise<GarmentMaterialWrapper> =>
    fetch(`http://localhost:3000/api/garmentsmaterials/getonegarmentsmaterials/${id}`).then(
        response => response.json() as Promise<GarmentMaterialWrapper>
    );

    // ------------------------------------------------------------------------

    const getUnusedGarmentMaterial = (id:string | undefined): Promise<materialWrapper> =>
    fetch(`http://localhost:3000/api/garmentsmaterials/getunusedgarmentsmaterials/${id}`).then(
        response => response.json() as Promise<materialWrapper>
    );

  //---------------------------------------------------------------------------

    return { 
        getAllGarmentsMaterials, 
        deleteGarmentsMaterials, 
        createGarmentMaterial,
        getOneGarmentMaterial, 
        getUnusedGarmentMaterial, 
        updateGarmentMaterial };
};