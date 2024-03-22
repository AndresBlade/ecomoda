import { modalProps } from '../../interfaces/modalProps';

export interface updatePropsCategory extends modalProps {
    categoryId: number | undefined,
    type: string;
}