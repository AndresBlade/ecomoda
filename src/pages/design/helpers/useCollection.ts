import Collection from "../Collections/interfaces/Collections";
import CollectionUpdated from "../Collections/interfaces/CollectionsUpdated";
import { collectionsWrapper } from '../Collections/interfaces/collectionWrappe';

export const useCollection = () => {
    
    const getAllCollection = (): Promise<collectionsWrapper> =>
        fetch('http://localhost:3000/api/collection/getallcollection').then(
            response => response.json() as Promise<collectionsWrapper>
        );
        
    // ------------------------------------------------------------------------
    const createCollection = (collectionData: Collection): Promise<Collection> =>
	fetch('http://localhost:3000/api/collection/createcollection', {
		body: JSON.stringify(collectionData),
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	}).then(response => response.json() as Promise<Collection>);

    // ------------------------------------------------------------------------

    const deleteCollection = (collectionId: number | undefined) =>
	fetch(`http://localhost:3000/api/collection/deletecollection/${collectionId}`, {
		method: 'PUT',
	}).then(response => response.json());

    // ------------------------------------------------------------------------

    const updateCollection = (collectionId: number | undefined, updatedData: CollectionUpdated): Promise<CollectionUpdated> =>
    fetch(`http://localhost:3000/api/collection/updatecollection/${collectionId}`, {
        body: JSON.stringify(updatedData),
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json() as Promise<CollectionUpdated>)

    // ------------------------------------------------------------------------

    const getOneCollection = (id:string | undefined): Promise<collectionsWrapper> =>
        fetch(`http://localhost:3000/api/collection/getonecollection/${id}`).then(
            response => response.json() as Promise<collectionsWrapper>
        );

    // ------------------------------------------------------------------------

    return { getAllCollection, createCollection, deleteCollection, updateCollection, getOneCollection };
};