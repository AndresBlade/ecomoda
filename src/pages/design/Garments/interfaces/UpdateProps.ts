import { modalProps } from '../../interfaces/modalProps';

export interface updateProps extends modalProps {
    garmentId: number | undefined,
    garment: string;
}

export interface updateGarmentMaterialProps extends modalProps {
    id?: number | undefined,
    quantity: number;
}