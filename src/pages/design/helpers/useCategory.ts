import { useState, useEffect } from 'react';
import categoryProps from '../interfaces/CategoryProps';

export const useCategory = () => {
    const [category, setCategory] = useState<categoryProps[]>([]);
    const [loading, setLoading] = useState(true);

    const getAllCategories = async () => {
        setLoading(true);
    
        fetch('http://localhost:3000/api/GarmentType/getalltype')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener las categorias');
                }
                return response.json();
            })
            .then(data => {
                const categoriesData = data.types;
                setCategory(categoriesData);
                console.log(categoriesData)
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
        getAllCategories();
    }, []);
 
    const createCategory = async (categoryData: categoryProps) => {
        try {
            const response = await fetch('http://localhost:3000/api/GarmentType/createtype', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(categoryData)
            });
            
            if (!response.ok) {
                throw new Error('Error al crear la categoria');
            }
        } catch (error) {
            console.error('Error al crear el categoria:', error);
        }
    }; 

    const deleteCategory = async (categoryId: number | undefined) => {
        try {
            const response = await fetch(`'http://localhost:3000/api/GarmentType/deletetype'/${categoryId}`, {
                method: 'DELETE',
            });
            
            if (!response.ok) {
                throw new Error('Error al eliminar el material');
            }
        } catch (error) {
            console.error('Error al eliminar el material:', error);
        }
    };
    const updateCategory = async (categoryId: number | undefined, updatedData: categoryProps) => {
        try {
            const response = await fetch(`http://localhost:3000/api/GarmentType/updatetype/${categoryId}`, {
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

/*     const searchCategory = (searchTerm: string) => {
        return category.filter(categ =>
            categ.type.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }; */


    return { category, loading, getAllCategories, createCategory, deleteCategory, updateCategory };
};