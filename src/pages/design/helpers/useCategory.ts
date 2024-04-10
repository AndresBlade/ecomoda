import categoriesProps from '../Category/interfaces/categories';
import { categoriesWrapper } from '../Category/interfaces/categoriesWrapper';

export const useCategory = () => {
    
    const getAllCategories = (): Promise<categoriesWrapper> =>
        fetch('http://localhost:3000/api/GarmentType/getalltype').then(
            response => response.json() as Promise<categoriesWrapper>
        );
        
    // ------------------------------------------------------------------------
    const createCategories = (categoryData: categoriesProps): Promise<categoriesProps> =>
	fetch('http://localhost:3000/api/GarmentType/createtype', {
		body: JSON.stringify(categoryData),
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	}).then(response => response.json() as Promise<categoriesProps>);

    // ------------------------------------------------------------------------

    const deleteCategories = (categoryId: number | undefined) =>
	fetch(`http://localhost:3000/api/GarmentType/deletetype/${categoryId}`, {
		method: 'PUT',
	}).then(response => response.json());

    // ------------------------------------------------------------------------

    const updateCategories = (categoryId: number | undefined, updatedData: categoriesProps): Promise<categoriesProps> =>
    fetch(`http://localhost:3000/api/GarmentType/updatetype/${categoryId}`, {
        body: JSON.stringify(updatedData),
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json() as Promise<categoriesProps>)

    // ------------------------------------------------------------------------

    return { getAllCategories, createCategories, deleteCategories, updateCategories };
};