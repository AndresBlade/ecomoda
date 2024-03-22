import { SizeBox } from "./SizeBox";
import { CreateModal } from './CreateModal';
import { useSize } from "../helpers/useSize";
import { useState, useEffect, useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import size from "./interfaces/size";
import { RefreshContext } from "../context/refresh";

export const SizePage = () => {
    const {refresh} = useContext(RefreshContext);
    const { getAllSizes } = useSize();
    const [loading, setLoading] = useState(true);
    const [allSizes, setAllSizes] = useState<size[]>([]);

    const [isOpen, setIsOpen] = useState(false);
    const [searchSizes, setSearchSizes] = useState('');

    const handleCreateModal = () => {
        setIsOpen(!isOpen);
        setSearchSizes('');
    };

    useEffect(() => {
        setLoading(true);
        getAllSizes()
            .then(data => {
                const sizeData = data.sizes;
                setAllSizes(sizeData); 
            })
            .catch(error => {
                throw error; 
            })
            .finally(() => {
                setTimeout(() => setLoading(false), 800);
            });
    }, [refresh]);

    const filteredSizes = allSizes.filter(size =>
        size.size.toLowerCase().includes(searchSizes.toLowerCase())
    );

	return (
        <section>
            <div className="texto-materiales">
                <h1>Tallas Existentes</h1>
            </div>
            
            <article className='header_materiales'>
                <button onClick={handleCreateModal} className='materiales_button'>Crear categoria</button>
                <CreateModal isOpen={isOpen} setIsOpen={setIsOpen}/>

                <div className="buscador-materiales">
                    <input type="text" name="buscador" placeholder="Buscar"
                    value={searchSizes}
                    onChange={(e) => setSearchSizes(e.target.value)}
                    />
                    <button type="submit"></button>
                </div>
            </article>

            <article>
                {loading ? 
                (<div className='NotFound'><CircularProgress color="primary" /></div>)
                : (
                    filteredSizes.length === 0 ? 
                    (<p className='NotFound'>No hay tallas existentes</p>) :
                    (
                        filteredSizes?.map(size => (
                            <SizeBox
                                key={size.id}
                                id={size.id}
                                size={size.size}
                            />
                        ))  
                    )
                )}
            </article>
        </section>
    );
};
