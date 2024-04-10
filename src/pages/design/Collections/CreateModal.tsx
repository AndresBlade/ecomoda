import { useState, useContext } from 'react';
import { useCollection } from '../helpers/useCollection';
import { Modal } from '../../../components/ui/modal/Modal';
import { modalPropsCrud } from '../interfaces/modalPropsCRUD';
import Collection from './interfaces/Collections';
import Alert from '@mui/material/Alert';
import { RefreshContext } from '../context/refresh';

export const CreateModal: React.FC<modalPropsCrud> = ({isOpen, setIsOpen}) => {
    const { createCollection } = useCollection();
    const { handleRefresh } = useContext(RefreshContext)

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [errorMsg, setErrorMsg] = useState('invisibleMsg');

    const handleCreateMaterial = () => {
        if (!name.trim()) {
            setErrorMsg('');
            setTimeout(() => setErrorMsg('invisibleMsg'), 3000);
            return;
        }
        const quantityValue = parseInt(quantity, 10);

        const collectionData: Collection = {
            collection: name,
            standard_quantity: quantityValue,
            createdAt: new Date
        };

        createCollection(collectionData)
        .then(() => {
            handleRefresh(); 
            setIsOpen(false);
        })
        .catch(error => {
            throw error; 
        }) 
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <article className='modalMaterial'>
                <div className='modalMaterial__header'>
                    <h2>Nueva colección</h2>
                    <span>Rellena los campos</span>
                    <span className={errorMsg}>
                        <Alert sx={{marginTop: 1, fontSize: 15}} 
                        severity="error">Campo de 'nombre' vacio</Alert>
                    </span>
                </div>
                <div className='modalMaterial__content'>
                    <input 
                    className='content__name'
                    type="text" 
                    placeholder='Nombre de la colección'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    
                    <input 
                    className='content__description'
                    type="text" 
                    placeholder='Cantidad estandar'
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <button onClick={handleCreateMaterial} 
                className='materiales_button'>Añadir material</button>

                <div className='importante-container'>
                    <h3>Importante</h3>
                    <div className='importante-msg'>
                        <li><p>La portada será la foto de la primera prenda</p></li>
                    </div>
                    <div className='importante-msg'>
                        <li><p>La fecha de creación no podrá ser modificada</p></li>
                    </div>
                </div>    
            </article>
        </Modal>
    )
}