import { FiltersBox } from './FiltersBox';
import { CollectionBox } from './CollectionBox';

export const CollectionsPage = () => {
	return (
        <body>
            <section>
                <div className="texto-materiales">
                    <h1>Colecciones Disponibles</h1>
                </div>

                <article className="collectionsContainer">
                    <FiltersBox />
                    <CollectionBox />
                </article>
            </section>
        </body>
    );
};
