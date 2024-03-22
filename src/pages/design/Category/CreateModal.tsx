import { useState, useContext } from 'react';
import { useCategory } from '../helpers/useCategory';
import { Modal } from '../../../components/ui/modal/Modal';
import { modalProps } from '../interfaces/modalProps';
import Alert from '@mui/material/Alert';
import categoriesProps from "./interfaces/categories";
import { RefreshContext } from '../context/refresh';

export const CreateModal: React.FC<modalProps> = ({isOpen, setIsOpen}) => {

    const { createCategories } = useCategory();
    const {handleRefresh} = useContext(RefreshContext)

    const [name, setName] = useState('');
    const [errorMsg, setErrorMsg] = useState('invisibleMsg');

    const handleCreateCategory = () => {
        if (!name.trim()) {
            setErrorMsg('');
            setTimeout(() => setErrorMsg('invisibleMsg'), 3000);
            return;
        }

        const categoryData: categoriesProps = {
            type: name,
        };

        createCategories(categoryData)
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
                    <h2>Nueva Categoria</h2>
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