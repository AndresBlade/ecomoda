import { MdOutlineFileDownload } from "react-icons/md";
import { getURL } from '../../Garments/utils/getUrl';
import { getPattern } from '../../Garments/utils/getPattern';
import { GarmentProps } from '../../Garments/interfaces/Garment';
import { Link } from "react-router-dom";

export const GarmentBox: React.FC<GarmentProps> = ({ id, garment, pattern, type, collection, size, imageUrl }) => {
   
    const garmentImgUrl = getURL(imageUrl)
    const patternUrl = getPattern(pattern)
    
    return (
        <article className="cuadrante">
            <Link to={`/diseno/prendas/${id}`}>
                <img src={garmentImgUrl} alt="Imagen 1" className="imagen-producto"/>
            </Link>
            <div className="texto-cuadrante">
                <h3>{garment}</h3>
                <div className="cuadranteData">
                    <h5>Categoría - {type}</h5>  
                    <h5>Colección - {collection}</h5>  
                </div>
             
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
