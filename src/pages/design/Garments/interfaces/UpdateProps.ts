import { modalProps } from '../../interfaces/modalProps';
import categoriesProps from "../../Category/interfaces/categories";
import Collection from "../../Collections/interfaces/Collections";
import sizeProps from "../../Size/interfaces/size";

export interface updateProps extends modalProps {
    garmentId: number | undefined,
    garment: string;
}