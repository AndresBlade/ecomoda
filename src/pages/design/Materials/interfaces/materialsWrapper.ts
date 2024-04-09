import { materials } from './Materials';

export interface materialWrapper {
	materials: materials[];
	setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
