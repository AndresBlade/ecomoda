import { MaterialBox } from './MaterialBox'
import { useMaterials } from './helpers/useMaterials';
import { Modal } from '../../components/ui/modal/Modal';
import { useState } from 'react';

export const MaterialsPage = () => {
    const getMaterials = useMaterials();

    const [isOpen, setIsOpen] = useState(false);
      
    const handleCreateModal = () => {
      setIsOpen(!isOpen);
    };

	return (
        <body>
            <section>
                <div className="texto-materiales">
                    <h1>Materiales Disponibles</h1>
                </div>
                
                <article className='header_materiales'>
                    <button className='materiales_button' onClick={handleCreateModal}>Crear material</button>
                    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                        <article>
                            <p>cositas</p>
                        </article>
                    </Modal>
                    <div className="buscador-materiales">
                        <input type="text" name="buscador" placeholder="Buscar"/>
                        <button type="submit"></button>
                    </div>
                </article>

                <article>
                    {getMaterials?.map(material => (
                        <MaterialBox
                            key={material.id}
                            id={material.id}
                            material={material.material}
                            description={material.description}
                            unit={material.unit}
                        />
                    ))}
                </article>
            </section>
        </body>
    );
};
