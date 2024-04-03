import { useState, useContext, useEffect } from 'react';
import { RefreshContext } from '../context/refresh';
import { useGarment } from '../helpers';
import { CreateFormProps } from './interfaces/CreateForm';

export const CreateForm: React.FC<CreateFormProps> = ({ collections, sizes, garmentTypes, setIsOpen }) => {
  const { handleRefresh } = useContext(RefreshContext)
  const { createGarment } = useGarment()

  const [name, setName] = useState('');
  const [selectedCollectionId, setSelectedCollectionId] = useState(0);
  const [selectedSizeId, setSelectedSizeId] = useState(0);
  const [selectedGarmentTypeId, setSelectedGarmentTypeId] = useState(0);
  
  const [patternFile, setPatternFile] = useState<FileList | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [errorMsg, setErrorMsg] = useState('invisibleMsg');

  const handleCollectionSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCollectionId(parseInt(e.target.value));
  };
  const handleSizeSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSizeId(parseInt(e.target.value));
  };
  const handleGarmentTypeSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGarmentTypeId(parseInt(e.target.value));
  };

  const handlePatternFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setPatternFile(files);
    }
  };

  const handleImagesFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setSelectedFiles(files);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    if (selectedFiles) {
      for (let index = 0; index < selectedFiles.length; index++) {
        const file = selectedFiles.item(index);
        if (file) {
          formData.append('imagen', file);
          console.log(file);
        }
      }
    }
  else { window.alert('no entro')}
  
    formData.append('garment', name);
    formData.append('collection_id', selectedCollectionId.toString());
    formData.append('size_id', selectedSizeId.toString());
    formData.append('garment_type_id', selectedGarmentTypeId.toString());
    if (patternFile) {
      formData.append('pattern', patternFile[0]); 
  } else {
      formData.append('pattern', ''); 
  }    
  console.log('Nombre:', name);
  console.log('Colección ID:', selectedCollectionId);
  console.log('Talla ID:', selectedSizeId);
  console.log('Tipo de prenda ID:', selectedGarmentTypeId);
  console.log('Pattern:', patternFile);

  console.log('FormData:', formData);

    await createGarment(formData); 
    handleRefresh(); 
    setIsOpen(false); 
  };

  return (
    <form className='garmentContainer_form' onSubmit={handleSubmit}
    action='/creategarment' encType={'multipart/form-data'}>
      <div className='modalMaterial__content formData'>
        <input 
          className='content__name'
          type="text" 
          placeholder='Nombre de la prenda'
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name" 
        />
        <select onChange={handleCollectionSelectChange} className='formData_input' name="collection_id">
          <option value="">Seleccionar colección...</option>
          {collections.map(collection => (
            <option key={collection.id} value={collection.id}>{collection.collection}</option>
          ))}
        </select>
        <select onChange={handleSizeSelectChange} className='formData_input' name="size_id">
          <option value="">Seleccionar talla...</option>
          {sizes.map(size => (
            <option key={size.id} value={size.id}>{size.size}</option>
          ))}
        </select>
        <select onChange={handleGarmentTypeSelectChange} className='formData_input' name="garment_type_id">
          <option value="">Seleccionar tipo de prenda...</option>
          {garmentTypes.map(type => (
            <option key={type.id} value={type.id}>{type.type}</option>
          ))}
        </select>
        <label className='formData_pattern'>
          <input
            id="patternInput"
            type="file"
            name="pattern" 
            onChange={handlePatternFileChange}
          />
          <span className="iconForm">Agregar patrón</span>
        </label>
      </div>
      
      <div className='modalMaterial__content formImg'>
        <span>Agregar imagenes</span>
        <label className="customFileUpload">
          <input
            id="imageInput"
            className="inputFile"
            type="file"
            name="imagen" 
            onChange={handleImagesFileChange}
            multiple
          />
          <span className="iconForm">+</span>
        </label>
        <button type="submit" className='materiales_button formData'>Crear prenda</button>
      </div>   
    </form>
  );
};