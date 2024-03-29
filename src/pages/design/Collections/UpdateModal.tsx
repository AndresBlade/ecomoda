import { useContext, useState } from 'react';
import { useCollection } from '../helpers/useCollection';
import { Modal } from '../../../components/ui/modal/Modal';
import CollectionUpdated from './interfaces/CollectionsUpdated';
import { updateProps } from './interfaces/updateProps';
import Alert from '@mui/material/Alert';
import { RefreshContext } from '../context/refresh';

export const UpdateModal: React.FC<updateProps> = ({id, collection, standard_quantity, updatedAt, isOpen, setIsOpen}) => {
    const { updateCollection } = useCollection();
    const { handleRefresh } = useContext(RefreshContext)

    const [form, setForm] = useState({
    newName: collection,
    newStandard: standard_quantity,
    });
    
    const [errorMsg, setErrorMsg] = useState('invisibleMsg');

    const handleUpdateMaterial = () => {
        if (!form.newName.trim()) {
            setErrorMsg('');
            setTimeout(() => setErrorMsg('invisibleMsg'), 3000);
            return;
        }

        const collectionData: CollectionUpdated  = {
            collection: form.newName,
            standard_quantity: form.newStandard,
            updatedAt: updatedAt
        };

        updateCollection(id, collectionData)
        .then(() => {
            handleRefresh(); 
            setIsOpen(false);
        }).catch(error => {
            throw error; 
        });
        setIsOpen(false);
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <article className='modalMaterial'>
                <div className='modalMaterial__header'>
                    <h2>Editar Colección</h2>
                    <span>Edita los campos que quieras</span>
                    <span className={errorMsg}>
                        <Alert sx={{marginTop: 1, fontSize: 15}} 
                        severity="error">Campo de 'nombre' vacio</Alert>
                    </span>
                </div>
                <div className='modalMaterial__content'>
                    <input 
                    className='content__name'
                    type="text" 
                    placeholder={collection}
                    value={form.newName}
                    onChange={(e) => setForm({...form, newName: e.target.value })}
                    />
                    
                    <input 
                    className='content__description'
                    type="text" 
                    value={form.newStandard}
                    onChange={(e) => setForm({...form, newStandard: e.target.value })}
                    />
                </div>

                <button onClick={handleUpdateMaterial} 
                className='materiales_button'>Editar Colección</button>
            </article>
        </Modal>
    )
}