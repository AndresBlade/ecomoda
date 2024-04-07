import { MdOutlineFileDownload } from "react-icons/md";
import { getURL } from '../../Garments/utils/getUrl';
import { getPattern } from '../../Garments/utils/getPattern';
import { getGarment } from '../../Garments/interfaces/Garment';

export const GarmentBox: React.FC<getGarment> = ({ garment, pattern, type, collection, size, imageUrl }) => {
   
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
