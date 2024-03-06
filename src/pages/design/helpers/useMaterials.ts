import { useState, useEffect } from 'react';
import { materialProps } from "../interfaces/Materials";

export const useMaterials = () => {
    const [materials, setMaterials] = useState<materialProps[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/materials/getallmaterial')
            .then((response) => response.json())
            .then((data) => {
                const materialsData = data.materials; 
                setMaterials(materialsData); 
            });
    }, []);

    return materials;
};