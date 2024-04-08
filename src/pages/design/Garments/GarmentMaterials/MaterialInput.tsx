import { useState, useContext } from 'react';
import { materialWrapper } from '../../Materials/interfaces/materialsWrapper';
import { RefreshContext } from '../../context/refresh';
// import { useGarmentMaterials } from '../../helpers';

export const MaterialInput: React.FC<materialWrapper> = ({ materials }) => {
  
  const { handleRefresh } = useContext(RefreshContext)
  // const { createGarmentMaterial } = useGarmentMaterials()
  const [checked, setChecked] = useState(false);
  const [selectedMaterialId, setSelectedMaterialId] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleCheckChange = (e) => {
    setChecked(e.target.checked);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckChange}
      />
      {checked && (
        <select>
          <option value="">Select Material</option>
          {materials.map(material => (
            <option key={material.id} value={material.id}>{material.material}</option>
          ))}
        </select>
      )}
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        disabled={!checked}
      />
    </div>
  );
};
