import { MaterialBox } from './MaterialBox'
import { useMaterials } from './helpers/useMaterials';
import { CreateModal } from './helpers/CreateModal'
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';


export const MaterialsPage = () => {

    const { searchMaterials, loading } = useMaterials();

    const [isOpen, setIsOpen] = useState(false);
    const [searchMaterial, setSearchMaterial] = useState('');

    const handleCreateModal = () => {
        setIsOpen(!isOpen);
        setSearchMaterial('');
    };

    const filteredMaterials = searchMaterials(searchMaterial)

	return (
        <section>
            <div className="texto-materiales">
                <h1>Materiales Disponibles</h1>
            </div>
            
            <article className='header_materiales'>
                <button className='materiales_button' onClick={handleCreateModal}>Crear material</button>
                <CreateModal isOpen={isOpen} setIsOpen={setIsOpen}/>
                <div className="buscador-materiales">
                    <input type="text" name="buscador" placeholder="Buscar"
                    value={searchMaterial}
                    onChange={(e) => setSearchMaterial(e.target.value)}
                    />
                    <button type="submit"></button>
                </div>
            </article>

            <article>
                {loading ? 
                (<div className='NotFound'><CircularProgress color="primary" /></div>)
                : (
                    filteredMaterials.length === 0 ? 
                    (<p className='NotFound'>No hay materiales disponibles</p>) :
                    (
                        filteredMaterials?.map(material => (
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
