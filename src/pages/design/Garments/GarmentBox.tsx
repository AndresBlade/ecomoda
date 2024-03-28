import { MdOutlineFileDownload } from "react-icons/md";

export const GarmentBox = () => {
	return (
        <article className="cuadrante">
            <img src="https://indiwoman.files.wordpress.com/2012/05/mr520.jpg" alt="Imagen 1" className="imagen-producto"/>
            <div className="texto-cuadrante">
                <h3>Vestido Blanco</h3>
                <h5>Vestido</h5>    
                <h5 className="texto-talla">Talla S</h5>
                <button className="boton">
                    <MdOutlineFileDownload size={20} color="#fff"/>
                </button>
            </div>
        </article>
    );
};
