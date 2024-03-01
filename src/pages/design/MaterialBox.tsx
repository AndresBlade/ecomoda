import { materialProps } from './interfaces/Materials'

export const MaterialBox: React.FC<materialProps> = ({ id, material, description, unit }) => {


	return (
    <div className="rectangulo">
        <div className="rectangulo-materiales">
            <div className="seccion">
                <label className="nombre">{material}</label>
                <label>ID:{id}</label>
            </div>

            <div className="seccion">
                <label className="descripcion-materiales">Descripción</label>
                <p className="descripcion-materiales">{description}</p>
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
