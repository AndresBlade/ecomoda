import { MaterialBox } from './MaterialBox';
import { useMaterials } from '../helpers/useMaterials';
import { CreateModal } from './CreateModal';
import { useState, useEffect, useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { materials } from './interfaces/Materials';
import { RefreshContext } from '../context/refresh';

export const MaterialsPage = () => {
    const {refresh} = useContext(RefreshContext)
    const { getAllMaterials } = useMaterials();
    const [loading, setLoading] = useState(true);
    const [allMaterials, setAllMaterials] = useState<materials[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleCreateModal = () => {
        setIsOpen(!isOpen);
        setSearchTerm('');
    };

    useEffect(() => {
        setLoading(true);
        getAllMaterials()
            .then(data => {
                const materialsData = data.materials;
                setAllMaterials(materialsData); 
            })
            .catch(error => {
                throw error; 
            })
            .finally(() => {
                setTimeout(() => setLoading(false), 800);
            });
    }, [refresh]);

    const filteredMaterials = allMaterials.filter(material =>
        material.material.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section>
            <div className="texto-materiales">
                <h1>Materiales Disponibles</h1>
            </div>
            <article className='header_materiales'>
                <button className='materiales_button' onClick={handleCreateModal}>Crear material</button>
                <CreateModal isOpen={isOpen} setIsOpen={setIsOpen}/>
                <div className="buscador-materiales">
                    <input
                        type="text"
                        name="buscador"
                        placeholder="Buscar"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit"></button>
                </div>
            </article>
            <article>
                {loading ? 
                (<div className='NotFound'><CircularProgress color="primary" /></div>)
                : (
                    filteredMaterials.length === 0 ? 
                    (<p className='NotFound'>No hay categorias existentes</p>) :
                    (
                        filteredMaterials.map(material => (
                            <MaterialBox
                                key={material.id}
                                id={material.id}
                                material={material.material}
                                description={material.description}
                                unit={material.unit}
                            />
                        ))  
                    )
                )}
            </article>
        </section>
    );
};