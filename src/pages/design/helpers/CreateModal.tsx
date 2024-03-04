import { useState } from 'react';
import { useMaterials } from './useMaterials';
import { Modal } from '../../../components/ui/modal/Modal';
import { modalProps } from '../interfaces/modalProps';
import { materialProps } from '../interfaces/Materials';
import Alert from '@mui/material/Alert';

export const CreateModal: React.FC<modalProps> = ({isOpen, setIsOpen}) => {

    const { createMaterial } = useMaterials();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isMeters, setIsMeters] = useState(false);
    const [errorMsg, setErrorMsg] = useState('invisibleMsg');


    const handleCreateMaterial = () => {
        if (!name.trim()) {
            setErrorMsg('');
            setTimeout(() => setErrorMsg('invisibleMsg'), 3000);
            return;
        }

        const materialData: materialProps = {
            material: name,
            description: description,
            unit: isMeters ? 'meters' : 'unit'
        };

        createMaterial(materialData);
        setIsOpen(false);
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <article className='modalMaterial'>
                <div className='modalMaterial__header'>
                    <h2>Nuevo Material</h2>
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
                    placeholder='Nombre del Material'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    
                    <input 
                    className='content__description'
                    type="text" 
                    placeholder='Descripción'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />

                    <div className='unit'>
                        <div className='content__unit'>
                            <h2>M / CM</h2>
                            <label className="switch">
                                <input 
                                    type="checkbox"
                                    checked={isMeters}
                                    onChange={(e) => setIsMeters(e.target.checked)}
                                    />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <button onClick={handleCreateMaterial} 
                className='materiales_button'>Añadir material</button>
            </article>
        </Modal>
    )
}