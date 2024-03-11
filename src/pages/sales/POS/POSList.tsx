import { POSItem } from './POSItem';
import { POS } from './interfaces/POS';
interface Props {
	pointsOfSale: POS[];
}

export const POSList = ({ pointsOfSale }: Props) => {
	return (
		<div className="POS__list">
			<div className="POS__list-headers">
				<p className="POS__list-header">ID</p>
				<p className="POS__list-header">Nombre</p>
				<p className="POS__list-header">Acciones</p>
			</div>
			{pointsOfSale.map((pointOfSale, index) => (
				<POSItem
					pointOfSale={pointOfSale}
					key={pointOfSale.id}
					index={index}
				/>
			))}
		</div>
	);
};
