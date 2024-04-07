import {Garment} from "../Garments/interfaces/Garment";
import { GarmentWrapper } from '../Garments/interfaces/GarmentWrapper';

export const useGarment = () => {
    
    const getAllGarments = (): Promise<GarmentWrapper> =>
        fetch('http://localhost:3000/api/garment/getallgarments').then(
            response => response.json() as Promise<GarmentWrapper>
        );
        
    // ------------------------------------------------------------------------
    const createGarment = (data: FormData): Promise<Garment> => {
      return fetch('http://localhost:3000/api/garment/creategarment', {
        body: data,
        method: 'POST',
      }).then(response => response.json() as Promise<Garment>);
    };

    // ------------------------------------------------------------------------

    const deleteGarment = (garmentId: number | undefined) =>
	fetch(`http://localhost:3000/api/garment/deletegarment/${garmentId}`, {
		method: 'PUT',
	}).then(response => response.json());

    // ------------------------------------------------------------------------

    const updateGarment = (garmentId: number | undefined, updatedData: Garment): Promise<Garment> =>
    fetch(`http://localhost:3000/api/garment/updategarment/${garmentId}`, {
        body: JSON.stringify(updatedData),
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json() as Promise<Garment>)

    // ------------------------------------------------------------------------

    return { getAllGarments, createGarment, deleteGarment, updateGarment };
};