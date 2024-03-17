import { useState } from 'react';
import { useCategory } from '../helpers/useCategory';
import { Modal } from '../../../components/ui/modal/Modal';
import { modalProps } from '../interfaces/modalProps';
import Alert from '@mui/material/Alert';
import categoryProps from '../interfaces/CategoryProps';

export const CreateModal: React.FC<modalProps> = ({isOpen, setIsOpen}) => {

    const { createCategory } = useCategory();

    const [name, setName] = useState('');
    const [errorMsg, setErrorMsg] = useState('invisibleMsg');


    const handleCreateCategory = () => {
        if (!name.trim()) {
            setErrorMsg('');
            setTimeout(() => setErrorMsg('invisibleMsg'), 3000);
            return;
        }

        const categoryData: categoryProps = {
            type: name,
        };

        createCategory(categoryData);
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
                    placeholder='Nombre de la categoria'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <button onClick={handleCreateCategory} 
                className='materiales_button'>Añadir Categoria</button>
            </article>
        </Modal>
    )
}