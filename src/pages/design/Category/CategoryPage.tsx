import { CategoryBox } from "./CategoryBox";
import { CreateModal } from './CreateModal';
import { useCategory } from "../helpers/useCategory";
import { useState, useEffect, useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import categoriesProps from "./interfaces/categories";
import { RefreshContext } from "../context/refresh";

export const CategoriesPage = () => {
    const {refresh} = useContext(RefreshContext);
    const { getAllCategories } = useCategory();
    const [loading, setLoading] = useState(true);
    const [allCategories, setAllCategories] = useState<categoriesProps[]>([]);

    const [isOpen, setIsOpen] = useState(false);
    const [searchCategories, setSearchCategory] = useState('');

    const handleCreateModal = () => {
        setIsOpen(!isOpen);
        setSearchCategory('');
    };

    useEffect(() => {
        setLoading(true);
        getAllCategories()
            .then(data => {
                const categoriesData = data.types;
                setAllCategories(categoriesData); 
            })
            .catch(error => {
                throw error; 
            })
            .finally(() => {
                setTimeout(() => setLoading(false), 800);
            });
    }, [refresh]);

    const filteredCategories = allCategories.filter(category =>
        category.type.toLowerCase().includes(searchCategories.toLowerCase())
    );

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

            <article>
                {loading ? 
                (<div className='NotFound'><CircularProgress color="primary" /></div>)
                : (
                    filteredCategories.length === 0 ? 
                    (<p className='NotFound'>No hay materiales disponibles</p>) :
                    (
                        filteredCategories?.map(categ => (
                            <CategoryBox
                                key={categ.id}
                                id={categ.id}
                                type={categ.type}
                            />
                        ))  
                    )
                )}
            </article>
        </section>
    );
};
