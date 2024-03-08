import { CategoryBox } from "./CategoryBox";

export const CategoriesPage = () => {
	return (
        <section>
            <div className="texto-materiales">
                <h1>Categorias Disponibles</h1>
            </div>
            
            <article className='header_materiales'>
                <button className='materiales_button'>Crear categoria</button>

                <div className="buscador-materiales">
                    <input type="text" name="buscador" placeholder="Buscar"

                    />
                    <button type="submit"></button>
                </div>
            </article>

            <article className="gridBox">
                <CategoryBox
                    id={1}
                    type="cositas"
                />
            </article>
        </section>
    );
};
