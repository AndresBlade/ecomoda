import Size from '../interfaces/SizeProps';
import { sizeWrapper } from '../Size/interfaces/sizeWrapper';

export const useSize = () => {
    
    const getAllSizes = (): Promise<sizeWrapper> =>
        fetch('http://localhost:3000/api/sizes/getallsize').then(
            response => response.json() as Promise<sizeWrapper>
        );
        
    // ------------------------------------------------------------------------
    const createSizes = (categoryData: Size): Promise<Size> =>
	fetch('http://localhost:3000/api/sizes/createsize', {
		body: JSON.stringify(categoryData),
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	}).then(response => response.json() as Promise<Size>);

    // ------------------------------------------------------------------------

    const deleteSizes = (sizeId: number | undefined) =>
	fetch(`http://localhost:3000/api/sizes/deletesize/${sizeId}`, {
		method: 'DELETE',
	}).then(response => response.json());

    // ------------------------------------------------------------------------

    const updateSizes = (sizeId: number | undefined, updatedData: Size): Promise<Size> =>
    fetch(`http://localhost:3000/api/sizes/updatesize/${sizeId}`, {
        body: JSON.stringify(updatedData),
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json() as Promise<Size>)

    // ------------------------------------------------------------------------

    return { getAllSizes, createSizes, deleteSizes, updateSizes };
};