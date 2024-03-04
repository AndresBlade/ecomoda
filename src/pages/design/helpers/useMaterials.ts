import { useState, useEffect } from 'react';
import { materialProps } from "../interfaces/Materials";

export const useMaterials = () => {
    const [materials, setMaterials] = useState<materialProps[]>([]);
    const [updateGet, setUpdateGet] = useState<number>(0); 

    const getAllMaterials = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/materials/getallmaterial')
            if (!response.ok) {
                throw new Error('Error al obtener los materiales');
            }
            const data = await response.json();
            const materialsData = data.materials;
            setMaterials(materialsData);
            } 
            catch (error) {
                console.error('Error al obtener los materiales', error);
            }
    };

    useEffect(() => {
        getAllMaterials();
    }, [updateGet]);
 
    const createMaterial = async (materialData: materialProps) => {
        try {
            const response = await fetch('http://localhost:3000/api/materials/creatematerial', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(materialData)
            });
            
            if (!response.ok) {
                throw new Error('Error al crear el material');
            }
            setUpdateGet(prev => prev + 1);
        } catch (error) {
            console.error('Error al crear el material:', error);
        }
    }; 

    const deleteMaterial = async (materialId: number | undefined) => {
        try {
            const response = await fetch(`http://localhost:3000/api/materials/deletematerial/${materialId}`, {
                method: 'DELETE',
            });
            
            if (!response.ok) {
                throw new Error('Error al eliminar el material');
            }
            setUpdateGet(prev => prev + 1);
        } catch (error) {
            console.error('Error al eliminar el material:', error);
        }
    };

    return { materials, getAllMaterials, createMaterial, deleteMaterial };
};