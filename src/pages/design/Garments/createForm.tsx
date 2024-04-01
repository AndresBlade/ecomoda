import { useState, useContext, useEffect } from 'react';
import { RefreshContext } from '../context/refresh';
import { useGarment } from '../helpers';
import { CreateFormProps } from './interfaces/CreateForm';

export const CreateForm: React.FC<CreateFormProps> = ({ collections, sizes, garmentTypes }) => {
  const { handleRefresh } = useContext(RefreshContext)
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('invisibleMsg');

  const [selectedCollectionId, setSelectedCollectionId] = useState(0);
  const [selectedSizeId, setSelectedSizeId] = useState(0);
  const [selectedGarmentTypeId, setSelectedGarmentTypeId] = useState(0);

  const handleCollectionSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCollectionId(parseInt(e.target.value));
  };
  
  const handleSizeSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSizeId(parseInt(e.target.value));
  };
  
  const handleGarmentTypeSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGarmentTypeId(parseInt(e.target.value));
  };

  //hacemos el fetch createGarment aca
  const handleCreateMaterial = () => {
/*     if (!name.trim()) {
        setErrorMsg('');
        setTimeout(() => setErrorMsg('invisibleMsg'), 3000);
        return;
    }

    const garmentData: garment = {
        collection: name,
        standard_quantity: quantityValue,
        createdAt: new Date
    };

    createGarment(garmentData)
    .then(() => {
        handleRefresh(); 
        setIsOpen(false);
    })
    .catch(error => {
        throw error; 
    })  */
}
  //Aca mapeamos los fetch sacados en createModal
  return (
    <article className='garmentContainer_form'>
        <div className='modalMaterial__content formData'>
                <input 
                className='content__name'
                type="text" 
                placeholder='Nombre de la prenda'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            <select onChange={handleCollectionSelectChange}
            className='formData_input'>
                <option value="">Seleccionar colección...</option>
                {collections.map(collection => (
                <option key={collection.id} value={collection.id}>{collection.collection}</option>
                ))}
            </select>
            <select onChange={handleSizeSelectChange}
            className='formData_input'>
                <option value="">Seleccionar talla...</option>
                {sizes.map(size => (
                <option key={size.id} value={size.id}>{size.size}</option>
                ))}
            </select>
            <select onChange={handleGarmentTypeSelectChange}
            className='formData_input'>
                <option value="">Seleccionar tipo de prenda...</option>
                {garmentTypes.map(type => (
                <option key={type.id} value={type.id}>{type.type}</option>
                ))}
            </select>
            <label className='formData_pattern'>
                <input
                    id="fileInput"
                    type="file"
                    name="files"
                />
                <span className="icon">Agregar patrón</span>
            </label>
        </div>
        
        <div className='modalMaterial__content formImg'>
            <span>Agregar imagenes</span>
            <label className="customFileUpload">
                <input
                id="fileInput"
                type="file"
                name="files"
                multiple
                className="inputFile"
                />
                <span className="icon">+</span>
            </label>
            <button className='materiales_button formData' onClick={handleCreateMaterial}>Crear prenda</button>
        </div>   
    </article>
  );
};