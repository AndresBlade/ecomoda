import { modalProps } from '../../interfaces/modalProps';

export interface updateProps extends modalProps {
    garmentId: number | undefined,
    garment: string;
}