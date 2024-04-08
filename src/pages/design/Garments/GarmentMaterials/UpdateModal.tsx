import { useContext, useState } from 'react';
import { useGarment } from '../helpers/useGarment';
import { Modal } from '../../../../components/ui/modal/Modal';
import Alert from '@mui/material/Alert';
import { RefreshContext } from '../../context/refresh';
import { GarmentDataContext } from '../../context/garmentProps';

export const UpdateModal: React.FC<updateProps> = ({garmentId, garment, isOpen, setIsOpen}) => {
    const { updateGarment } = useGarment();
    const { handleRefresh } = useContext(RefreshContext);
    const { collectionData, categoriesData, sizeData } = useContext(GarmentDataContext)
    const [form, setForm] = useState({
    newName: garment,
    newCollection: '0',
    newGarmentType: '0',
    newSize: '0'
    });

    const [errorMsg, setErrorMsg] = useState('invisibleMsg');

    const handleUpdateGarment = () => {
        if (!form.newName.trim()) {
            setErrorMsg('');
            setTimeout(() => setErrorMsg('invisibleMsg'), 3000);
            return;
        }

        const collectionId = parseInt(form.newCollection)
        const sizeId = parseInt(form.newSize)
        const typeId = parseInt(form.newGarmentType)

        const garmentData: Garment = {
            garment: form.newName,
            collection_id: collectionId,
            garment_type_id: typeId,
            size_id: sizeId
        };

        updateGarment(garmentId, garmentData)
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
                    <h2>Editar Prenda</h2>
                    <span>Edita los campos que quieras, por los momentos no se puede editar imagenes</span>
                    <span className={errorMsg}>
                        <Alert sx={{marginTop: 1, fontSize: 15}} severity="error">Campo de 'nombre' vacio</Alert>
                    </span>
                </div>
                <div className='modalMaterial__content'>
                    <input
                        className='content__name'
                        type="text"
                        placeholder='Nombre de la prenda'
                        value={form.newName}
                        onChange={(e) => setForm({...form, newName: e.target.value })}
                    />

                    <select
                        className='formData_input'
                        value={form.newCollection}
                        onChange={(e) => setForm({...form, newCollection: e.target.value })}
                    >
                        <option value="">Seleccionar colección...</option>
                        {collectionData.map(collection => (
                            <option key={collection.id} value={collection.id}>{collection.collection}</option>
                        ))}
                    </select>

                    <select
                        className='formData_input'
                        value={form.newSize}
                        onChange={(e) => setForm({...form, newSize: e.target.value })}
                    >
                        <option value="">Seleccionar talla...</option>
                        {sizeData.map(size => (
                            <option key={size.id} value={size.id}>{size.size}</option>
                        ))}
                    </select>

                    <select
                        className='formData_input'
                        value={form.newGarmentType}
                        onChange={(e) => setForm({...form, newGarmentType: e.target.value })}
                    >
                        <option value="">Seleccionar tipo de prenda...</option>
                        {categoriesData.map(type => (
                            <option key={type.id} value={type.id}>{type.type}</option>
                        ))}
                    </select>
                </div>

                <button onClick={handleUpdateGarment} className='materiales_button'>Editar prenda</button>
            </article>
        </Modal>
    )
}