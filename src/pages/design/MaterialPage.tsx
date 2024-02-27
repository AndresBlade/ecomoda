import { MaterialBox } from './MaterialBox'

export const MaterialsPage = () => {
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
                    <MaterialBox />
                    <MaterialBox />
                    <MaterialBox />
                    <MaterialBox />
                </article>
            </section>
        </body>
    );
};
