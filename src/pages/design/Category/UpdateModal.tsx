import { useState, useContext } from 'react';
import { useCategory } from '../helpers/useCategory';
import { Modal } from '../../../components/ui/modal/Modal';
import { updatePropsCategory } from './interfaces/UpdatePropsCategory';
import categoriesProps from './interfaces/categories';
import { RefreshContext } from '../context/refresh';
import Alert from '@mui/material/Alert';


export const UpdateModal: React.FC<updatePropsCategory> = ({type, categoryId, isOpen, setIsOpen}) => {
    const { updateCategories } = useCategory();
    const { handleRefresh } = useContext(RefreshContext)

    const [newName, setNewName] = useState(type);
    const [errorMsg, setErrorMsg] = useState('invisibleMsg');

    const handleUpdate = () => {
        if (!newName.trim()) {
            setErrorMsg('');
            setTimeout(() => setErrorMsg('invisibleMsg'), 3000);
            return;
        }

        const categoryData: categoriesProps = {
            type: newName,
        };

        updateCategories(categoryId, categoryData)
        .then(() => {
            handleRefresh(); 
            setIsOpen(false);
        })
        .catch(error => {
            throw error; 
        });
        setIsOpen(false);
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <article className='modalMaterial'>
                <div className='modalMaterial__header'>
                    <h2>Editar Categoria</h2>
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
                    placeholder={type}
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    />

                </div>

                <button onClick={handleUpdate} 
                className='materiales_button'>Editar material</button>
            </article>
        </Modal>
    )
}