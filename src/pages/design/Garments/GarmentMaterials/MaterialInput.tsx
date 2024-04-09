import { useState, useContext } from 'react';
import { materialWrapper } from '../../Materials/interfaces/materialsWrapper';
import { RefreshContext } from '../../context/refresh';
import { useGarmentMaterials } from '../../helpers';
import { useParams } from 'react-router-dom';
import { garmentsMaterials } from '../interfaces/GarmentMaterial';

export const MaterialInput: React.FC<materialWrapper> = ({ materials, setIsOpen }) => {
  const [selectedMaterials, setSelectedMaterials] = useState<{ id: number; quantity: string }[]>([]);
  const { createGarmentMaterial } = useGarmentMaterials();
  const { handleRefresh } = useContext(RefreshContext);
  const { idgarment } = useParams();

  const handleCheckChange = (materialId: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedMaterials((prevSelectedMaterials) => [
        ...prevSelectedMaterials,
        { id: materialId, quantity: '0' }, 
      ]);
    } else {
      setSelectedMaterials((prevSelectedMaterials) =>
        prevSelectedMaterials.filter((material) => material.id !== materialId)
      );
    }
  };

  const handleQuantityChange = (materialId: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = e.target.value;
    setSelectedMaterials((prevSelectedMaterials) =>
      prevSelectedMaterials.map((material) =>
        material.id === materialId ? { ...material, quantity: newQuantity } : material
      )
    );
  };

  const handleSubmit = () => {
    const formattedData = JSON.stringify({
      garmentsMaterials: selectedMaterials.map(material => ({
        garment_id: Number(idgarment),
        material_id: material.id, 
        quantity: parseInt(material.quantity) 
      }))
    });
  
    console.log(formattedData);
  
    createGarmentMaterial(formattedData)
      .then(() => {
        handleRefresh(); 
        setIsOpen && setIsOpen(false);
      })
      .catch(error => {
        throw error; 
      }) 
  };

  return (
    <div>
      <article className="inputMaterial-box">
        {materials.map((material) => (
          <div className="info-box_container" key={material.id}>
            <input
              type="checkbox"
              onChange={(e) => handleCheckChange(material.id, e)}
            />
            <div className="info-box">
              <span className="info-box_name">{material.material}</span>
              <div className="info-box_bar"></div>
              <input
                className="info-box_number"
                type="number"
                value={selectedMaterials.find((m) => m.id === material.id)?.quantity || ''}
                onChange={(e) => handleQuantityChange(material.id, e)}
                disabled={!selectedMaterials.some((m) => m.id === material.id)}
              />
            </div>
          </div>
        ))}
      </article>
      <button onClick={handleSubmit} className='materiales_button'>Enviar Solicitud</button>
    </div>
  );
};