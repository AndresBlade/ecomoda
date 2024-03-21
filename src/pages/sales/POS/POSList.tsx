import { POSItem } from './POSItem';
import { POS } from './interfaces/POS';
import { POSFormType } from './types/POSFormType';
import posCss from './assets/POS.module.css';
interface Props {
	pointsOfSale: POS[];
	setForm: React.Dispatch<React.SetStateAction<POSFormType>>;
	setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const POSList = ({ pointsOfSale, setForm, setModalIsOpen }: Props) => {
	return (
		<div className={posCss['POS']}>
			<div className={posCss['POS__headers']}>
				<p className={posCss['POS__header']}>ID</p>
				<p className={posCss['POS__header']}>Nombre</p>
				<p className={posCss['POS__header']}>Acciones</p>
			</div>
			{pointsOfSale.map((pointOfSale, index) => (
				<POSItem
					setModalIsOpen={setModalIsOpen}
					setForm={setForm}
					pointOfSale={pointOfSale}
					key={pointOfSale.id}
					index={index}
				/>
			))}
		</div>
	);
};
