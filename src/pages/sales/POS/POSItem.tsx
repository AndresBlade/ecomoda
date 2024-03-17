import { FaEdit } from 'react-icons/fa';
import { POS } from './interfaces/POS';
import { MdDelete } from 'react-icons/md';
import { POSFormType } from './types/POSFormType';
import posCss from './assets/POS.module.css';

interface Props {
	pointOfSale: POS;
	index: number;
	setForm: React.Dispatch<React.SetStateAction<POSFormType>>;
	setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const POSItem = ({
	pointOfSale,
	index,
	setForm,
	setModalIsOpen,
}: Props) => (
	<div
		className={`${posCss['item']} ${
			posCss[index % 2 ? 'item--position--odd' : 'item--position--even']
		}`}
	>
		<p className={posCss['item__element']}>{pointOfSale.id}</p>
		<p className={posCss['item__element']}>{pointOfSale.name}</p>
		<p className={posCss['item__actions']}>
			<button
				onClick={() => {
					setForm({ method: 'PUT', pointOfSale });
					setModalIsOpen(true);
				}}
				className={posCss['action-icon']}
			>
				<FaEdit
					className={`${posCss['action-icon__content']} ${posCss['action-icon__content--edit']}`}
				/>
			</button>
			<button
				onClick={() => {
					setForm({ method: 'DELETE', pointOfSale });
					setModalIsOpen(true);
				}}
				className={posCss['action-icon']}
			>
				<MdDelete
					className={`${posCss['action-icon__content']} ${posCss['action-icon__content--delete']}`}
				/>
			</button>
		</p>
	</div>
);
