import { POS } from './interfaces/POS';

interface Props {
	pointOfSale: POS;
	index: number;
}

export const POSItem = ({ pointOfSale, index }: Props) => (
	<div
		className={`POS__item ${
			index % 2 ? 'POS__item--position--odd' : 'POS__item--position--even'
		}`}
	>
		<p className="POS__ID">{pointOfSale.id}</p>
		<p className="POS__name">{pointOfSale.name}</p>
	</div>
);
