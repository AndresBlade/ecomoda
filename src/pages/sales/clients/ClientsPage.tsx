import { useState } from 'react';
import { Modal } from '../../../components/ui/modal/Modal';
import { useForm } from '../../../hooks/useForm';
import { useFetcher /*useLoaderData*/ } from 'react-router-dom';
// import { POSList } from './POSList';
// import { POSWrapper } from './interfaces/POSWrapper';
import posCss from './assets/client.module.css';
import { ClientFormType } from './types/ClientFormType';

export const ClientsPage = () => {
	const fetcher = useFetcher();
	const [modalIsOpen, setmodalIsOpen] = useState(false);
	const [form, setForm] = useState<ClientFormType>({ method: 'POST' });
	const { onInputChange, name, cedula } = useForm({
		name: '',
		cedula: '',
	});

	// const { stores: pointsOfSale } = useLoaderData() as POSWrapper;
	return (
		<>
			<h1 className={posCss.title}>Lista de Clientes</h1>
			{
				/* {pointsOfSale.length ? (
				<POSList
					setModalIsOpen={setmodalIsOpen}
					pointsOfSale={pointsOfSale}
					setForm={setForm}
				/>
			) : (
				*/
				<>
					Todavía no has creado un cliente. clickea en 'Crear Cliente'
					para comenzar!
				</>
				/*
			)} */
			}

			<button
				className={`${posCss['button']} ${posCss['button--corner-fixed']}`}
				onClick={() => {
					setmodalIsOpen(true);
					setForm({ method: 'POST' });
				}}
			>
				Crear Cliente
			</button>

			<Modal isOpen={modalIsOpen} setIsOpen={setmodalIsOpen}>
				{
					<fetcher.Form
						method={form.method}
						className={posCss['form']}
					>
						<h2 className={posCss['form__title']}>
							{form.method === 'POST'
								? 'Agregar'
								: form.method === 'PUT'
								? 'Editar'
								: 'Eliminar'}{' '}
							cliente{' '}
							{form.method === 'POST'
								? ''
								: `de ID ${form.client.id}`}
						</h2>
						{form.method !== 'POST' && (
							<input
								type="hidden"
								value={form.client.id}
								name="id"
							></input>
						)}
						{form.method !== 'DELETE' && (
							<fieldset className={`${posCss['form__fieldset']}`}>
								<div className={posCss['form__field-wrapper']}>
									<label
										htmlFor="cedula"
										className={posCss['form__label']}
									>
										Cédula
									</label>
									<input
										required
										id="cedula"
										name="cedula"
										type="number"
										className={posCss['form__input']}
										value={cedula}
										onChange={onInputChange}
									/>
								</div>
								<div className={posCss['form__field-wrapper']}>
									<label
										htmlFor="name"
										className={posCss['form__label']}
									>
										Nombre
									</label>
									<input
										required
										id="name"
										name="name"
										type="text"
										className={posCss['form__input']}
										value={name}
										onChange={onInputChange}
									/>
								</div>
							</fieldset>
						)}
						{form.method === 'POST' || form.method === 'PUT' ? (
							<button
								type="submit"
								className={`${posCss['button']} ${posCss['form__send-button']}`}
								onClick={() => {
									setmodalIsOpen(false);
								}}
							>
								Enviar
							</button>
						) : (
							<div className={posCss['form__decision--buttons']}>
								<button
									className={`${posCss['button--yes']} ${posCss['button']}`}
									onClick={() => {
										setmodalIsOpen(false);
									}}
								>
									Eliminar
								</button>
								<button
									onClick={e => {
										e.preventDefault();
										setmodalIsOpen(false);
									}}
									className={`${posCss['button']}`}
								>
									Cancelar
								</button>
							</div>
						)}
					</fetcher.Form>
				}
			</Modal>
		</>
	);
};
