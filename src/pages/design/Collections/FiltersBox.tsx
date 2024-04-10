export const FiltersBox = () => {
	return (
        <aside className="filters">
            <h2>Filtros</h2>
            <div className="filter">
                <div className="filter-item">
                    <h3>Fecha</h3>
                    <input type="date"/>
                </div>
                <div className="filter-item">
                    <h3>Tallas</h3>
                    <select>
                        <option value="">Selecciona...</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
                <div className="filter-item">
                    <h3>Tipo de Prenda</h3>
                    <select>
                        <option value="">Selecciona...</option>
                        <option value="camisas">Camisas</option>
                        <option value="pantalones">Pantalones</option>
                    </select>
                </div>
            </div>
        </aside>
    );
};
