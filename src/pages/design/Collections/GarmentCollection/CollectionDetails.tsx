import { useState, useEffect } from "react";
import { useCollection } from "../../helpers";
import Collection from '../interfaces/Collections';
import { useParams, Link } from 'react-router-dom';
import { getURL } from "../../Garments/utils/getUrl";
import { CollectionBox } from "./CollectionBox";
import { GarmentBox } from "./GarmentsBox";

export const CollectionsDetails = () => {
    const { getOneCollection } = useCollection();
    const [collectionData, setCollectionData] = useState<Collection | null>(null); 
    const { collectionId } = useParams();

    useEffect(() => {
        getOneCollection(collectionId)
            .then(data => {
                const collectionData = data.collections;
                setCollectionData(collectionData);
            })
            .catch(error => {
                throw error; 
            });
    }, []);

    const firstGarmentImage = collectionData?.GarmentModels?.[0]?.GarmentImagenModels?.[1]?.URL || 'http://localhost:3000/default/not-found.webp';
    const imageUrl = getURL(firstGarmentImage);
    return (
        <section>
        <h1>{`Prendas de ${collectionData?.collection}`}</h1>
        <article className="collectionDetails-container">
            {collectionData && (
                <CollectionBox collection={collectionData.collection} 
                createdAt={collectionData.createdAt} 
                standard_quantity={collectionData.standard_quantity} 
                imgUrl={imageUrl}
                garmentCount={collectionData.GarmentModels?.length}
                /> 
            )}
            <div className="cuadricula-prenda">
                {collectionData?.GarmentModels && collectionData.GarmentModels.map((garment, index) => (
                    <GarmentBox
                        key={index}
                        garment={garment.garment}
                        pattern={garment.pattern || ""}
                        type={garment.GarmentTypeModel?.type || ""}
                        size={garment.SizeModel?.size || ""}
                        collection={collectionData.collection}
                        imageUrl={garment.GarmentImagenModels?.[1]?.URL || "http://localhost:3000/default/not-found.webp"}
                    />
                ))}
            </div>
        </article>
        <Link className="details button-collection" to={'/diseno/prendas'}>Ver todas las prendas</Link>
    </section>
    );
}