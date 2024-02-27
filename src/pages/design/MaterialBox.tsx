export const MaterialBox = () => {
	return (
    <div className="rectangulo">
        <div className="rectangulo-materiales">
            <div className="seccion">
                <label className="nombre">Algodon</label>
                <label>ID:0001</label>
            </div>

            <div className="seccion">
                <label className="descripcion-materiales">Descripción</label>
                <p className="descripcion-materiales">Es suave, transpirable y cómodo, ideal para ropa de verano y ropa interior.</p>
            </div>

            <div className="seccion">
                <label className="medida-materiales">CM | M</label> 
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>

            <div className="seccion">
                <button>Editar</button>
                <button>Eliminar</button>       
            </div>
        </div>
    </div>
    );
};
