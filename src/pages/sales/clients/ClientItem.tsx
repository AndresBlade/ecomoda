import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import clientsCss from './assets/clients.module.css';
import { FormType } from '../../../types/FormType';
import { Client } from './interfaces/Client';

interface Props {
	client: Client;
	index: number;
	setForm: React.Dispatch<React.SetStateAction<FormType<Client>>>;
	setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ClientItem = ({
	client,
	index,
	setForm,
	setModalIsOpen,
}: Props) => (
	<div
		className={`${clientsCss['item']} ${
			clientsCss[
				index % 2 ? 'item--position--odd' : 'item--position--even'
			]
		}`}
	>
		<p className={clientsCss['item__element']}>{client.id}</p>
		<p className={clientsCss['item__element']}>{client.name}</p>
		<p className={clientsCss['item__actions']}>
			<button
				onClick={() => {
					setForm({ method: 'PUT', value: client });
					setModalIsOpen(true);
				}}
				className={clientsCss['action-icon']}
			>
				<FaEdit
					className={`${clientsCss['action-icon__content']} ${clientsCss['action-icon__content--edit']}`}
				/>
			</button>
			<button
				onClick={() => {
					setForm({ method: 'DELETE', value: client });
					setModalIsOpen(true);
				}}
				className={clientsCss['action-icon']}
			>
				<MdDelete
					className={`${clientsCss['action-icon__content']} ${clientsCss['action-icon__content--delete']}`}
				/>
			</button>
		</p>
	</div>
);
