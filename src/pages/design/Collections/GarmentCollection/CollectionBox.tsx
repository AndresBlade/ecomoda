import Collection from '../interfaces/Collections';

export const CollectionBox: React.FC<Collection> = ({collection, garmentCount, createdAt, standard_quantity, imgUrl}) => {
    
    const fechaActual = new Date(createdAt);
    const fecha = fechaActual.getFullYear().toString()
  
	return (
        <article className="products">
        <div className="product">   
            <img src={imgUrl} alt={`imagen de coleccion de ${collection}`} />             
            <div className="product-details">
                <h3>{collection}</h3>
                    <p>{`${garmentCount} prendas`}</p>
                    <p>{fecha}</p>
                    <p>Fabricación mínima: {standard_quantity}</p>
            </div>
        </div>
    </article>
    );
};
