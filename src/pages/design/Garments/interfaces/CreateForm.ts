import categoriesProps from "../../Category/interfaces/categories";
import Collection from "../../Collections/interfaces/Collections";
import sizeProps from "../../Size/interfaces/size";

export interface CreateFormProps {
    collections: Collection[]
    sizes: sizeProps[];
    garmentTypes: categoriesProps[];
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
