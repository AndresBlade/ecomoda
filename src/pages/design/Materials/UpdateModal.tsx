import { useContext, useState } from 'react';
import { useMaterials } from '../helpers/useMaterials';
import { Modal } from '../../../components/ui/modal/Modal';
import { materials } from './interfaces/Materials';
import { updateProps } from './interfaces/UpdateProps';
import Alert from '@mui/material/Alert';
import { RefreshContext } from '../context/refresh';

export const UpdateModal: React.FC<updateProps> = ({materialId, material, description, unit, isOpen, setIsOpen}) => {
    const { updateMaterial } = useMaterials();
    const { handleRefresh } = useContext(RefreshContext)
    const unitCurrent = unit === 'meters' ? true : false;

    const [form, setForm] = useState({
    newName: material,
    newDescription: description,
    newIsMeters: unitCurrent
    });

    const [errorMsg, setErrorMsg] = useState('invisibleMsg');

    const handleUpdateMaterial = () => {
        if (!form.newName.trim()) {
            setErrorMsg('');
            setTimeout(() => setErrorMsg('invisibleMsg'), 3000);
            return;
        }

        const materialData: materials = {
            material: form.newName,
            description: form.newDescription,
            unit: form.newIsMeters ? 'meters' : 'unit'
        };

        updateMaterial(materialId, materialData)
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
                    <h2>Editar Material</h2>
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
                    placeholder={material}
                    value={form.newName}
                    onChange={(e) => setForm({...form, newName: e.target.value })}
                    />
                    
                    <input 
                    className='content__description'
                    type="text" 
                    placeholder={description}
                    value={form.newDescription}
                    onChange={(e) => setForm({...form, newDescription: e.target.value })}
                    />

                    <div className='unit'>
                        <div className='content__unit'>
                            <h2>M / CM</h2>
                            <label className="switch">
                                <input 
                                    type="checkbox"
                                    checked={form.newIsMeters}
                                    onChange={(e) => setForm({...form, newIsMeters: e.target.checked })}
                                    />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <button onClick={handleUpdateMaterial} 
                className='materiales_button'>Editar material</button>
            </article>
        </Modal>
    )
}