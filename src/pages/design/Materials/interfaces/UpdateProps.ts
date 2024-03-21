import { modalProps } from '../../interfaces/modalProps';

export interface updateProps extends modalProps {
    materialId: number | undefined,
    material: string;
    unit: 'meters' | 'unit';
    description?: string;
}