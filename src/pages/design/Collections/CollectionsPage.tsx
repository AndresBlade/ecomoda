import { FiltersBox } from './FiltersBox';
import { CollectionBox } from './CollectionBox';

export const CollectionsPage = () => {
	return (
        <body>
            <section>
                <div className="texto-materiales">
                    <h1>Colecciones Disponibles</h1>
                </div>

                <article className='header_materiales'>
                    <button className='materiales_button'>Crear colecciones</button>
                    <div className="buscador-materiales">
                        <input
                            type="text"
                            name="buscador"
                            placeholder="Buscar"
                        />
                        <button type="submit"></button>
                    </div>
                </article>

                <article className="collectionsContainer">
                    <FiltersBox />
                    <CollectionBox />
                </article>
            </section>
        </body>
    );
};
