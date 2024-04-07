import { FiltersBox } from './FiltersBox';
import { CollectionBox } from './CollectionBox';
import { useCollection } from '../helpers/useCollection';
import { CreateModal } from './CreateModal';
import { useState, useEffect, useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Collection from './interfaces/Collections';
import { RefreshContext } from '../context/refresh';
import { getURL } from '../Garments/utils/getUrl';

export const CollectionsPage = () => {
    const {refresh} = useContext(RefreshContext)
    const { getAllCollection } = useCollection();
    const [loading, setLoading] = useState(true);
    const [allCollection, setAllCollection] = useState<Collection[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleCreateModal = () => {
        setIsOpen(!isOpen);
        setSearchTerm('');
    };

    useEffect(() => {
        setLoading(true);
        getAllCollection()
            .then(data => {
                const collectionData = data.collections;
                const modifiedCollection = collectionData.map(collection => {
                    const { id, collection: collectionName, standard_quantity, createdAt } = collection;

                    const firstGarmentImage = collection.GarmentModels?.[0]?.GarmentImagenModels?.[1]?.URL || 'http://localhost:3000/default/not-found.webp';
                    const imageUrl = getURL(firstGarmentImage)

                    const countGarment = collection.GarmentModels?.length
                    return {
                        id: id,
                        collection: collectionName,
                        standard_quantity: standard_quantity,
                        createdAt: createdAt,
                        imgUrl: imageUrl,
                        garmentCount: countGarment
                    };
                });
                setAllCollection(modifiedCollection); 
            })
            .catch(error => {
                throw error; 
            })
            .finally(() => {
                setTimeout(() => setLoading(false), 800);
            });
    }, [refresh]);

    const filteredCollection = allCollection.filter(collection =>
        collection.collection.toLowerCase().includes(searchTerm.toLowerCase())
    );

	return (
        <section>
            <div className="texto-materiales">
                <h1>Colecciones Disponibles</h1>
            </div>

            <article className='header_materiales'>
                <button className='materiales_button' onClick={handleCreateModal}>Crear colecciones</button>
                <CreateModal isOpen={isOpen} setIsOpen={setIsOpen}/>
                <div className="buscador-materiales">
                    <input
                        type="text"
                        name="buscador"
                        placeholder="Buscar"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit"></button>
                </div>
            </article>

            <article className="collectionsContainer">
                <FiltersBox />
                {loading ? 
                (<div className='NotFound'><CircularProgress color="primary" /></div>)
                : (
                    filteredCollection.length === 0 ? 
                    (<p className='NotFound'>No hay Colecciones existentes</p>) :
                    (
                        filteredCollection.map(collection => (
                            <CollectionBox
                                key={collection.id}
                                id={collection.id}
                                collection={collection.collection}
                                standard_quantity={collection.standard_quantity}
                                createdAt={collection.createdAt}
                                imgUrl={collection.imgUrl}
                                garmentCount={collection.garmentCount}
                            />
                        ))  
                    )
                )}
            </article>
        </section>
    );
};
