import { modalProps } from '../../interfaces/modalProps';

export interface updateProps extends modalProps {
    id?: number;
    collection: string;
    updatedAt: Date;
    standard_quantity: number;
}