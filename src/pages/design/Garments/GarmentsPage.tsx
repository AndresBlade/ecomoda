import { GarmentFilter } from './GarmentFilter';
import { GarmentBox } from './GarmentBox';

export const GarmentsPage = () => {
	return (
      <section>
          <div className="texto-materiales">
            <h1>Prendas Disponibles</h1>
          </div>
          <article className='header_materiales'>
                <button className='materiales_button'>Crear prendas</button>
                <div className="buscador-materiales">
                    <input
                        type="text"
                        name="buscador"
                        placeholder="Buscar"
                    />
                    <button type="submit"></button>
                </div>
            </article>

          <article className="garmentContainer">
              <section className="cuadricula-prenda">
                <GarmentBox />    
                <GarmentBox />    
                <GarmentBox />    
                <GarmentBox />    
                <GarmentBox />    
              </section>
            <GarmentFilter />
          </article>                                              
        </section>
    );
};
