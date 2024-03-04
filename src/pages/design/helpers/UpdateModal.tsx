import { useState } from 'react';
import { useMaterials } from './useMaterials';
import { Modal } from '../../../components/ui/modal/Modal';
import { materialProps } from '../interfaces/Materials';
import { updateProps } from '../interfaces/UpdateProps';
import Alert from '@mui/material/Alert';

export const UpdateModal: React.FC<updateProps> = ({materialId, material, description, unit, isOpen, setIsOpen}) => {
    const { updateMaterial } = useMaterials();

    const unitCurrent = unit === 'meters' ? true : false;

    const [newName, setNewName] = useState(material);
    const [newDescription, setNewDescription] = useState(description);
    const [newIsMeters, setNewIsMeters] = useState(unitCurrent);
    const [errorMsg, setErrorMsg] = useState('invisibleMsg');


    const handleUpdateMaterial = () => {
        if (!newName.trim()) {
            setErrorMsg('');
            setTimeout(() => setErrorMsg('invisibleMsg'), 3000);
            return;
        }

        const materialData: materialProps = {
            material: newName,
            description: newDescription,
            unit: newIsMeters ? 'meters' : 'unit'
        };

        updateMaterial(materialId, materialData);
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
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    />
                    
                    <input 
                    className='content__description'
                    type="text" 
                    placeholder={description}
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    />

                    <div className='unit'>
                        <div className='content__unit'>
                            <h2>M / CM</h2>
                            <label className="switch">
                                <input 
                                    type="checkbox"
                                    checked={newIsMeters}
                                    onChange={(e) => setNewIsMeters(e.target.checked)}
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