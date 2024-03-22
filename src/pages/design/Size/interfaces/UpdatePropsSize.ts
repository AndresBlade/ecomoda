import { modalProps } from '../../interfaces/modalProps';

export interface updatePropsSize extends modalProps {
    sizeId: number | undefined,
    size: string;
}