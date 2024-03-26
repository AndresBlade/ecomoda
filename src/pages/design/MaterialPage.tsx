import { MaterialBox } from './MaterialBox'
import { useMaterials } from './helpers/useMaterials';

export const MaterialsPage = () => {
    const materials = useMaterials();
	return (
        <body>
            <section>
                <div className="texto-materiales">
                    <h1>Materiales Disponibles</h1>
                </div>
                
                <article className='header_materiales'>
                    <button className='materiales_button'>Crear material</button>
                    <div className="buscador-materiales">
                        <input type="text" name="buscador" placeholder="Buscar"/>
                        <button type="submit"></button>
                    </div>
                </article>

                <article>
                    {materials?.map(material => (
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
