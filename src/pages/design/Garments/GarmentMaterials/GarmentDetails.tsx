import { useState, useEffect, useContext } from 'react';
import { useGarment, useGarmentMaterials } from "../../helpers";
import { getGarment } from "../interfaces/Garment";
import { useParams } from 'react-router-dom';
import { GarmentBox } from './GarmentBox';
import { MaterialsBox } from "./MaterialsBox";
import { CreateModal } from "./CreateModal";
import { garmentsMaterials } from "../interfaces/GarmentMaterial";
import { RefreshContext } from "../../context/refresh";

export const GarmentDetails = () => {
    const { getOneGarment } = useGarment()
    const { refresh } = useContext(RefreshContext)
    const { getOneGarmentMaterial } = useGarmentMaterials()
    const [garmentData, setGarmentData] = useState<getGarment | null>(null); 
    const [materialsGarmentData, setMaterialsGarment] = useState<garmentsMaterials[]| null>(null); 
    const [isOpen, setIsOpen] = useState(false);
    
    const { idgarment } = useParams();

    const handleCreateModal = () => setIsOpen(!isOpen);

    useEffect(() => {
        getOneGarment(idgarment)
            .then(data => {
                const garmentData = data.garments;
                setGarmentData(garmentData);
            })
            .catch(error => {
                throw error; 
            });
        getOneGarmentMaterial(idgarment)
            .then(data => {
                const garmentMaterialData = data.garmentsMaterials;
                setMaterialsGarment(garmentMaterialData)
            })
            .catch(error => {
                throw error; 
            });
    }, [refresh]);


    return (
        <section>
            <h1>{`Detalles de ${garmentData?.garment}`}</h1>
            <article className="collectionDetails-container">
                {garmentData && (
                    <GarmentBox 
                        id={garmentData.id}
                        garment={garmentData.garment}
                        pattern={garmentData.pattern}
                        type={garmentData.GarmentTypeModel?.type ?? 'N/A'}                        
                        collection={garmentData.CollectionModel?.collection ?? 'N/A'}
                        size={garmentData.SizeModel?.size ?? 'N/A'}
                        images={garmentData.GarmentImagenModels}
                    />
                )}
                <h2>{`Materiales para fabricar ${garmentData?.garment}`}</h2>
                <button className='materiales_button' onClick={handleCreateModal}>Añadir Materiales</button>
                <CreateModal setIsOpen={setIsOpen} isOpen={isOpen} />

                <div className="cuadricula-prenda">
                    {materialsGarmentData && materialsGarmentData.map(material => (
                        <MaterialsBox 
                        key={material.id}
                        id={material.id}
                        material={material.MaterialModel?.material} 
                        unit={material.MaterialModel?.unit} 
                        quantity={material.quantity}/>
                    ))}
                </div>
            </article>
        </section>
    );
}