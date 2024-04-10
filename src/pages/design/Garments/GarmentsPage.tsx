import { GarmentFilter } from './GarmentFilter';
import { GarmentBox } from './GarmentBox';
import { useState, useEffect, useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { RefreshContext } from '../context/refresh';
import { useGarment } from '../helpers/useGarment';
import { GarmentProps } from './interfaces/Garment';
import { CreateModal } from './CreateModal';

export const GarmentsPage = () => {
  const {refresh} = useContext(RefreshContext)
  const { getAllGarments } = useGarment();
  const [loading, setLoading] = useState(true);
  const [allGarments, setAllGarments] = useState<GarmentProps[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [sizeFilters, setSizeFilters] = useState<string[]>([]);
  const [typeFilters, setTypeFilters] = useState<string[]>([]);
  
  const handleCreateModal = () => {
    setIsOpen(!isOpen);
    setSearchTerm('');
  };

  useEffect(() => {
    setLoading(true);
    getAllGarments()
        .then(data => {
          const garmentsData = data.garments;
          console.log(garmentsData)
          const modifiedGarments = garmentsData.map(garment => {
              const imageUrl = garment.GarmentImagenModels && garment.GarmentImagenModels.length > 0 ? garment.GarmentImagenModels[1].URL : 'http://localhost:3000/default/not-found.webp';
              const pattern = garment.pattern === null ? '' : garment.pattern;
              const collection = garment.CollectionModel ? garment.CollectionModel.collection : 'N/A';
              const size = garment.SizeModel ? garment.SizeModel.size : 'N/A';
              const type = garment.GarmentTypeModel ? garment.GarmentTypeModel.type : 'N/A';
              return {
                id: garment.id,
                garment: garment.garment,
                pattern: pattern,
                collection: collection,
                size: size,
                type: type,
                imageUrl: imageUrl
              };
            });
            setAllGarments(modifiedGarments);
        })
        .catch(error => {
            throw error; 
        })
        .finally(() => {
            setTimeout(() => setLoading(false), 800);
        });
  }, [refresh]);

  const filteredGarments = allGarments.filter(garment =>
    garment.garment.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (sizeFilters.length === 0 || sizeFilters.includes(garment.size)) &&
    (typeFilters.length === 0 || typeFilters.includes(garment.type))
);

	return (
      <section>
          <div className="texto-materiales">
            <h1>Prendas Disponibles</h1>
          </div>
          <article className='header_materiales'>
                <button className='materiales_button' onClick={handleCreateModal}>Crear prenda</button>
                <CreateModal isOpen={isOpen} setIsOpen={setIsOpen} />
                <div className="buscador-materiales">
                    <input
                        type="text"
                        name="buscador"
                        placeholder="Buscar"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit"></button>
                </div>
            </article>
          <article className="garmentContainer">
              <section className="cuadricula-prenda">
                {loading ? 
                  (<div className='NotFound'><CircularProgress color="primary" /></div>)
                  : (
                      filteredGarments.length === 0 ? 
                      (<p className='NotFound'>No hay prendas existentes</p>) :
                      (
                          filteredGarments.map(garment => (
                              <GarmentBox
                              key={garment.id}
                              id={garment.id}
                              garment={garment.garment}
                              pattern={garment.pattern}
                              collection={garment.collection}
                              type={garment.type}
                              size={garment.size }
                              imageUrl={garment.imageUrl}
                              />
                          ))  
                      )
                  )}
              </section>
              <GarmentFilter
                    onSizeFilterChange={(e) => {
                        const size = e.target.value;
                        if (sizeFilters.includes(size)) {
                            setSizeFilters(sizeFilters.filter(item => item !== size));
                        } else {
                            setSizeFilters([...sizeFilters, size]);
                        }
                    }}
                    onTypeFilterChange={(e) => {
                        const type = e.target.value;
                        if (typeFilters.includes(type)) {
                            setTypeFilters(typeFilters.filter(item => item !== type));
                        } else {
                            setTypeFilters([...typeFilters, type]);
                        }
                    }}
                />
          </article>                                              
        </section>
    );
};
