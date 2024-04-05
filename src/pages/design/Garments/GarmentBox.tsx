import { MdOutlineFileDownload } from "react-icons/md";
import { getGarment } from "./interfaces/Garment";
import { getURL } from "./utils/getUrl";
import { getPattern } from "./utils/getPattern";
import { DeleteModal } from "./DeleteModal";
import { useState } from "react";
import { UpdateModal } from "./UpdateModal";

export const GarmentBox: React.FC<getGarment> = ({ id, garment, pattern, type, collection, size, imageUrl }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDeleted, setIsOpenDeleted] = useState(false);

    const handleEditModal = () => setIsOpen(!isOpen);
    const handleDeleteModal = () => setIsOpenDeleted(!isOpenDeleted);
   
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
                <button className="btn-filtros btnGarment" onClick={handleEditModal}>Editar</button>
                <button className="btn-filtros btnGarmentRgt" onClick={handleDeleteModal}>Eliminar</button>   
                <UpdateModal garmentId={id} isOpen={isOpen} setIsOpen={setIsOpen} garment={garment}/> 
                <DeleteModal isOpen={isOpenDeleted} setIsOpen={setIsOpenDeleted} id={id} />   
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
