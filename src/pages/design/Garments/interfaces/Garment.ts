export interface Garment {
    id?: number;
    garment: string;
    garment_type_id: number;
    collection_id: number;
    size_id: number;
    pattern?: FileList;
    imagenes?: FileList;
}

export interface GarmentProps {
  id?: number;
  countGarment?: number;
  garment: string;
  pattern: string | null;
  collection: string;
  size: string;
  type: string;
  imageUrl?: string;
  images?: GarmentImageModel[];
}

export interface getGarment {
  id: number;
  garment: string;
  pattern: string | null;
  activo?: boolean;
  GarmentImagenModels: GarmentImageModel[];
  SizeModel: SizeModel;
  GarmentTypeModel: GarmentTypeModel;
  CollectionModel: CollectionModel;
}

export interface GarmentTypeModel {
  id: number;
  type: string;
}

export interface GarmentImageModel {
  id: number;
  URL: string;
}

export interface CollectionModel {
  id: number;
  collection: string;
}

export interface SizeModel {
  id: number;
  size: string;
}
