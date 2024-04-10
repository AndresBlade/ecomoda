import { Link } from 'react-router-dom';
import { useState } from "react";
import { MdOutlineFileDownload, MdOutlineDelete } from "react-icons/md";
import { getURL } from "../utils/getUrl";
import { getPattern } from "../utils/getPattern";
import { DeleteModal } from "../DeleteModal";
import { GarmentProps, GarmentImageModel } from '../interfaces/Garment';
import { Carrucel } from '../../../../components/ui/Carrucel/Carrucel';

export const GarmentBox: React.FC<GarmentProps> = ({ id, garment, pattern, type, collection, size, images }) => {
    const [isOpenDeleted, setIsOpenDeleted] = useState(false);

    const handleDeleteModal = () => setIsOpenDeleted(!isOpenDeleted);
   
    const garmentImagesUrl: GarmentImageModel[] = images ? images.map(image => ({ imgUrl: getURL(image.URL) })) : [];
    const patternUrl = getPattern(pattern)
    
    return (
        <article className="cuadrante-max cuadrante">
            <Carrucel images={garmentImagesUrl} />
            <div className="texto-cuadrante">
                <h3>{garment}</h3>
                <div className="cuadranteData">
                    <h5>Categoría - {type}</h5>  
                    <h5>Colección - {collection}</h5>
                    <h5>Talla - {size}</h5>  
                </div>
                <button className="btnCol btn-right info-box_btn" onClick={handleDeleteModal}><MdOutlineDelete/></button>   
                <DeleteModal isOpen={isOpenDeleted} setIsOpen={setIsOpenDeleted} id={id} />   
                <a className="boton" href={patternUrl} 
                   target="_blank"
                   download={`patron de ${garment}`}>
                   <MdOutlineFileDownload size={20} color="#fff"/>
                </a>
            </div>
        </article> 
    );
};
