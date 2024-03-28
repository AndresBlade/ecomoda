import Size from '../interfaces/SizeProps';
import { sizeWrapper } from '../Size/interfaces/sizeWrapper';

export const useSize = () => {
    
    const getAllSizes = (): Promise<sizeWrapper> =>
        fetch('http://localhost:3000/api/sizes/getallsizes').then(
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

    const deleteSizes = (idsize: number | undefined) =>
	fetch(`http://localhost:3000/api/sizes/deletesize/${idsize}`, {
		method: 'DELETE',
	}).then(response => response.json());

    // ------------------------------------------------------------------------

    const updateSizes = (idsize: number | undefined, updatedData: Size): Promise<Size> =>
    fetch(`http://localhost:3000/api/sizes/updatesize/${idsize}`, {
        body: JSON.stringify(updatedData),
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json() as Promise<Size>)

    // ------------------------------------------------------------------------

    return { getAllSizes, createSizes, deleteSizes, updateSizes };
};