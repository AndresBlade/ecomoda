import { useState, useEffect } from "react";
import { useGarment } from "../../helpers";
import { getGarment } from "../interfaces/Garment";
import { useParams } from 'react-router-dom';
import { GarmentBox } from './GarmentBox';
import { MaterialsBox } from "./MaterialsBox";
import { CreateModal } from "./CreateModal";

export const GarmentDetails = () => {
    const { getOneGarment } = useGarment()
    const [garmentData, setGarmentData] = useState<getGarment | null>(null); 
    const [isOpen, setIsOpen] = useState(false);
    
    const { idgarment } = useParams();

    const handleCreateModal = () => setIsOpen(!isOpen);

//Falta hacer fetch de GetMaterialGarment, Delete y Update 

    useEffect(() => {
        getOneGarment(idgarment)
            .then(data => {
                const garmentData = data.garments;
                console.log(garmentData)
                setGarmentData(garmentData)
            })
            .catch(error => {
                throw error; 
            });
    }, []);

    return (
        <section>
            <h1>{`Detalles de ${garmentData?.garment}`}</h1>
            <article className="collectionDetails-container">
                {garmentData && (
                    <GarmentBox 
                        id={garmentData.id}
                        garment={garmentData.garment}
                        pattern={garmentData.pattern}
                        type={garmentData.GarmentTypeModel.type}
                        collection={garmentData.CollectionModel.collection}
                        size={garmentData.SizeModel.size}
                        images={garmentData.GarmentImagenModels}
                    />
                )}
                <h2>{`Materiales para fabricar ${garmentData?.garment}`}</h2>
                <button className='materiales_button' onClick={handleCreateModal}>Añadir Materiales</button>
                <CreateModal setIsOpen={setIsOpen} isOpen={isOpen} />

                <div className="cuadricula-prenda">
                    <MaterialsBox material="Botones" unit="unit" quantity={10}/>
                    <MaterialsBox material="Tela de terciopelo" unit="meters" quantity={3}/>
                    <MaterialsBox material="Hilo pavilo" unit="meters" quantity={4}/>
                    <MaterialsBox material="Botones" unit="unit" quantity={10}/>
                    <MaterialsBox material="Botones" unit="unit" quantity={10}/>
                    <MaterialsBox material="Botones" unit="unit" quantity={10}/>
                </div>
            </article>
        </section>
    );
}