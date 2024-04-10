import { materials } from '../../Materials/interfaces/Materials';

export interface garmentsMaterials {
    id?: number,
    garment_id: number,
    material_id: number,
    quantity: number,
    MaterialModel?: materials,
}

export interface garmentsMaterialsProps {
    id?: number;
    material: string | undefined;
    unit: 'meters' | 'unit' | undefined;    
    quantity: number,
}

