
import { useState } from "react";
import { garmentsMaterialsProps } from "../interfaces/GarmentMaterial";
import { MdOutlineModeEdit, MdOutlineDelete  } from "react-icons/md";
import { DeleteModal } from './DeleteModal';
import { UpdateModal } from "./UpdateModal";

export const MaterialsBox: React.FC<garmentsMaterialsProps> = ({ id, material, unit, quantity }) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDeleted, setIsOpenDeleted] = useState(false);

    const handleDeleteModal = () => setIsOpenDeleted(!isOpenDeleted);
    const handleEditModal = () => setIsOpen(!isOpen);

    const quantityFormat = unit === "meters" ? "metros" : "unidades"
    return (
        <section>
        <div className="info-box">
            <span className="info-box_name">{material}</span>
            <div className="info-box_bar"></div>
            <span className="info-box_cantidad">{`${quantity} ${quantityFormat}`}</span>
            <button 
                onClick={handleDeleteModal} 
                className="btn-left info-box_btn">
                <MdOutlineDelete/>
            </button>
            <button 
                onClick={handleEditModal} 
                className="btn-right info-box_btn">
                <MdOutlineModeEdit/></button>
        </div>    
        <UpdateModal isOpen={isOpen} setIsOpen={setIsOpen} id={id} quantity={quantity}/>    
        <DeleteModal isOpen={isOpenDeleted} setIsOpen={setIsOpenDeleted} id={id}/>
    </section>
    );
}