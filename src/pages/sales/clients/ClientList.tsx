import { ClientItem } from './ClientItem';
import clientsCss from './assets/clients.module.css';
import { Client } from './interfaces/Client';
import { FormType } from '../../../types/FormType';
interface Props {
	clients: Client[];
	setForm: React.Dispatch<React.SetStateAction<FormType<Client>>>;
	setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ClientList = ({ clients, setForm, setModalIsOpen }: Props) => {
	return (
		<div className={clientsCss['clients']}>
			<div className={clientsCss['clients__headers']}>
				<p className={clientsCss['clients__header']}>Cédula</p>
				<p className={clientsCss['clients__header']}>Nombre</p>
				<p className={clientsCss['clients__header']}>Acciones</p>
			</div>
			{clients.map((client, index) => (
				<ClientItem
					setModalIsOpen={setModalIsOpen}
					setForm={setForm}
					client={client}
					key={client.id}
					index={index}
				/>
			))}
		</div>
	);
};
