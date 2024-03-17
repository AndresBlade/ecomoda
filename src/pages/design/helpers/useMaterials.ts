import { useState, useEffect } from 'react';
import { materialProps } from "../interfaces/Materials";

export const useMaterials = () => {
    const [materials, setMaterials] = useState<materialProps[]>([]);
    const [refresh, setRefresh] = useState<boolean>(true);
    const [loading, setLoading] = useState(true);

    const handleRefresh = () => {
        setRefresh(!refresh);
    };    

/*     const getAllMaterials = async () => {
        try {
            setLoading(true); 
            const response = await fetch('http://localhost:3000/api/materials/getallmaterial');
            if (!response.ok) {
                throw new Error('Error al obtener los materiales');
            }
            const data = await response.json();
            const materialsData = data.materials;
            setMaterials(materialsData);
        } catch (error) {
            console.error('Error al obtener los materiales', error);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 800); 
        }
    }; */

    const getAllMaterials = () => {
        setLoading(true);
    
        fetch('http://localhost:3000/api/materials/getallmaterial')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los materiales');
                }
                return response.json();
            })
            .then(data => {
                const materialsData = data.materials;
                setMaterials(materialsData);
                console.log(materials)
            })
            .catch(error => {
                console.error('Error al obtener los materiales', error);
                throw error;
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 800);
            });
    };

    useEffect(() => {
        getAllMaterials();
    }, [refresh]);
 
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
        } catch (error) {
            console.error('Error al eliminar el material:', error);
        }
    };

    const updateMaterial = async (materialId: number | undefined, updatedData: materialProps) => {
        try {
            const response = await fetch(`http://localhost:3000/api/materials/updatematerial/${materialId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(updatedData)
            });
            
            if (!response.ok) {
                throw new Error('Error al editar el material');
            }
        } catch (error) {
            console.error('Error al editar el material:', error);
        }
    };

    const searchMaterials = (searchTerm: string) => {
        return materials.filter(material =>
            material.material.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };


    return { materials, loading, getAllMaterials, createMaterial, deleteMaterial, updateMaterial, searchMaterials, handleRefresh };
};