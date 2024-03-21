import { materials } from "../Materials/interfaces/Materials";
import { materialWrapper } from "../Materials/interfaces/materialsWrapper";

export const useMaterials = () => {
    
    const getAllMaterials = (): Promise<materialWrapper> =>
        fetch('http://localhost:3000/api/materials/getallmaterial').then(
            response => response.json() as Promise<materialWrapper>
        );
        
    // ------------------------------------------------------------------------
    const createMaterial = (materialData: materials): Promise<materials> =>
	fetch('http://localhost:3000/api/materials/creatematerial', {
		body: JSON.stringify(materialData),
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	}).then(response => response.json() as Promise<materials>);

    // ------------------------------------------------------------------------

    const deleteMaterial = (materialId: number | undefined) =>
	fetch(`http://localhost:3000/api/materials/deletematerial/${materialId}`, {
		method: 'DELETE',
	}).then(response => response.json());

    // ------------------------------------------------------------------------

    const updateMaterial = (materialId: number | undefined, updatedData: materials): Promise<materials> =>
    fetch(`http://localhost:3000/api/materials/updatematerial/${materialId}`, {
        body: JSON.stringify(updatedData),
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json() as Promise<materials>)

    // ------------------------------------------------------------------------

    return { getAllMaterials, createMaterial, deleteMaterial, updateMaterial };
};