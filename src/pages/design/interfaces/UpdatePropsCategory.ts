import { modalProps } from './modalProps';

export interface updatePropsCategory extends modalProps {
    categoryId: number | undefined,
    type: string;
}