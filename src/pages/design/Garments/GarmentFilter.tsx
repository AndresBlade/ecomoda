import { useGarmentData } from "./utils/useGarmentData";

export const GarmentFilter = ({ onSizeFilterChange, onTypeFilterChange }) => {
    const { categoriesData, sizeData} = useGarmentData()

	return (
        <aside className="filtro" id="#filtros">
            <h2 className="filtro-titulo">Filtrar</h2>
            <article className="filtro-opciones">
                <div className="filtro-seccion">
                    <span className="filtro-seccion-titulo">Tallas</span>
                    <div className="filtro-container">
                        {sizeData && sizeData.map(size => (
                            <label className="filtro-label">
                                <input type="checkbox" className="filtro-checkbox" 
                                onChange={onSizeFilterChange} value={size.size}/>
                                {size.size}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="filtro-seccion">
                    <span className="filtro-seccion-titulo">Tipos de Prenda</span>
                    <div className="filtro-container">
                        {categoriesData && categoriesData.map(category => (
                            <label className="filtro-label">
                                <input type="checkbox" className="filtro-checkbox" 
                                onChange={onTypeFilterChange} value={category.type}/> 
                                {category.type}
                            </label>
                        ))}
                    </div>
                </div>
            </article>
            <button className="btn-filtros">Aplicar</button>
        </aside>
    );
};
