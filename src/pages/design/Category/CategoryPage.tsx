import { CategoryBox } from "./CategoryBox";
import { CreateModal } from './CreateModal';
import { useCategory } from "../helpers/useCategory";
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export const CategoriesPage = () => {

    const { category } = useCategory();

    const [isOpen, setIsOpen] = useState(false);
    const [searchCategories, setSearchCategory] = useState('');

    const handleCreateModal = () => {
        setIsOpen(!isOpen);
        setSearchCategory('');
    };

	return (
        <section>
            <div className="texto-materiales">
                <h1>Categorias Disponibles</h1>
            </div>
            
            <article className='header_materiales'>
                <button onClick={handleCreateModal} className='materiales_button'>Crear categoria</button>
                <CreateModal isOpen={isOpen} setIsOpen={setIsOpen}/>

                <div className="buscador-materiales">
                    <input type="text" name="buscador" placeholder="Buscar"
                    value={searchCategories}
                    onChange={(e) => setSearchCategory(e.target.value)}
                    />
                    <button type="submit"></button>
                </div>
            </article>

            <article className="gridBox">
            {
                    (
                        category?.map(categ => (
                            <CategoryBox
                                key={categ.id}
                                id={categ.id}
                                type={categ.type}
                            />
                        ))  
                    )
                }
            </article>
        </section>
    );
};
