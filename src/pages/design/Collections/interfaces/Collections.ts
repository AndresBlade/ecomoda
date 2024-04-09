export default interface Collection {
    id?: number;
    collection: string;
    createdAt?: Date;
    standard_quantity: number;
    garmentCount?: number;
    countCollection?: number
    GarmentModels?: GarmentModel[]; 
    imgUrl: string;
}

export interface GarmentModel {
    id: number;
    garment: string;
    pattern: string | null;
    activo: boolean;
    GarmentImagenModels: GarmentImageModel[];
    SizeModel: SizeModel;
    GarmentTypeModel: GarmentTypeModel;
}

export interface GarmentImageModel {
    id: number;
    URL: string;
}

export interface SizeModel {
    id: number;
    size: string;
}

export interface GarmentTypeModel {
    id: number;
    type: string;
}