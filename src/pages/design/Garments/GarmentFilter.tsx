export const GarmentFilter = () => {
	return (
        <aside className="filtro" id="#filtros">
            <h2 className="filtro-titulo">Filtrar</h2>
            <article className="filtro-opciones">
                <div className="filtro-seccion">
                    <span className="filtro-seccion-titulo">Tallas</span>
                    <div className="filtro-container">
                        <label className="filtro-label">
                        <input type="checkbox" className="filtro-checkbox" /> S
                        </label>
                        <label className="filtro-label">
                        <input type="checkbox" className="filtro-checkbox" /> M
                        </label>
                        <label className="filtro-label">
                        <input type="checkbox" className="filtro-checkbox" /> L
                        </label>
                        <label className="filtro-label">
                        <input type="checkbox" className="filtro-checkbox" /> XL
                        </label>
                    </div>
                </div>

                <div className="filtro-seccion">
                    <span className="filtro-seccion-titulo">Tipos de Prenda</span>

                    <div className="filtro-container">
                        <label className="filtro-label">
                        <input type="checkbox" className="filtro-checkbox" /> Camisas
                        </label>
                        <label className="filtro-label">
                        <input type="checkbox" className="filtro-checkbox" /> Pantalones
                        </label>
                        <label className="filtro-label">
                        <input type="checkbox" className="filtro-checkbox" /> Vestidos
                        </label>
                        <label className="filtro-label">
                        <input type="checkbox" className="filtro-checkbox" /> Faldas
                        </label>
                        <label className="filtro-label">
                        <input type="checkbox" className="filtro-checkbox" /> Frenelas
                        </label>
                        <label className="filtro-label">
                        <input type="checkbox" className="filtro-checkbox" />  Shorts 
                        </label>
                    </div>
                </div>
            </article>
            <button className="btn-filtros">Aplicar</button>
        </aside>
    );
};
