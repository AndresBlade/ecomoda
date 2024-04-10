
export const GarmentBox = ({garment}) => {
    
	return (
        <div>
            <h2>{garment}</h2>
            <h3>Añadido recientemente</h3>
            <div className="cuadrante">
                <img src="https://indiwoman.files.wordpress.com/2012/05/mr520.jpg" alt="Imagen 1" className="imagen-producto"/>
                <div className="texto-cuadrante">
                    <h3>Vestido Blanco</h3>
                    <h5>Vestido</h5>    
                    <h5 className="texto-talla">Talla S</h5>
                    <button className="boton"></button>
                </div>
            </div>
        </div>
    );
};
