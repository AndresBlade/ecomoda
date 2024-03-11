import { FaEdit } from 'react-icons/fa';
import { POS } from './interfaces/POS';
import { MdDelete } from 'react-icons/md';

interface Props {
	pointOfSale: POS;
	index: number;
}

export const POSItem = ({ pointOfSale, index }: Props) => (
	<div
		className={`POS-item ${
			index % 2 ? 'POS-item--position--odd' : 'POS-item--position--even'
		}`}
	>
		<p className="POS-item__element">{pointOfSale.id}</p>
		<p className="POS-item__element">{pointOfSale.name}</p>
		<p className="POS-item__buttons">
			<button className="POS-button POS__button">
				<FaEdit className="POS-button__content POS-button__content--edit" />
			</button>
			<button className="POS-button POS__button">
				<MdDelete className="POS-button__content POS-button__content--delete" />
			</button>
		</p>
	</div>
);
