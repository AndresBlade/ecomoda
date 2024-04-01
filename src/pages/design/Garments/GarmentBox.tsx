import { MdOutlineFileDownload } from "react-icons/md";
import { getGarment } from "./interfaces/Garment";
import { getURL } from "./utils/getUrl";
import { getPattern } from "./utils/getPattern";

export const GarmentBox: React.FC<getGarment> = ({ id, garment, pattern, type, collection, size, imageUrl }) => {
    const garmentImg = imageUrl;
    const garmentImgUrl = getURL(garmentImg)
    const patternUrl = getPattern(pattern)
    return (
        <article className="cuadrante">
            <img src={garmentImgUrl} alt="Imagen 1" className="imagen-producto"/>
            <div className="texto-cuadrante">
                <h3>{garment}</h3>
                <div className="cuadranteData">
                    <h5>Categoría - {type}</h5>  
                    <h5>Colección - {collection}</h5>  
                </div>
                <button className="btn-filtros btnGarment">Editar</button>
                <button className="btn-filtros btnGarmentRgt">Eliminar</button>       
                <h5 className="texto-talla">Talla {size}</h5>
                <a className="boton" href={patternUrl} 
                   target="_blank"
                   download={`patron de ${garment}`}>
                   <MdOutlineFileDownload size={20} color="#fff"/>
                </a>
            </div>
        </article> 
    );
};
