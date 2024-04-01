export interface Garment {
    id?: number;
    garment: string;
    garment_type_id: number;
    collection_id: number;
    size_id: number;
    pattern: string[];
    imagen: string[];
}

export interface getGarment {
    id: number
    garment: string;
    pattern: string;
    collection: string;
    size: string;
    type: string;
    imageUrl: string;
}