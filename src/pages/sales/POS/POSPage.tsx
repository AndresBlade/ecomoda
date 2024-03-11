import { useState } from 'react';
import { Modal } from '../../../components/ui/modal/Modal';
import { useForm } from '../../../hooks/useForm';
import { Form, useLoaderData } from 'react-router-dom';
import { POSList } from './POSList';
import { POSWrapper } from './interfaces/POSWrapper';
export const POSPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { onInputChange, name } = useForm({
		code: '',
		name: '',
	});

	const { stores: pointsOfSale } = useLoaderData() as POSWrapper;

	console.log(pointsOfSale);
	return (
		<>
			<h1 className="POS__title">Lista de Puntos de Venta</h1>
			{pointsOfSale.length ? (
				<POSList pointsOfSale={pointsOfSale} />
			) : (
				<>
					Todavía no has creado un punto de venta. clickea en 'Crear
					POS' para comenzar!
				</>
			)}

			<button
				className="POS__button POS__button--corner-fixed"
				onClick={() => setIsOpen(true)}
			>
				Crear POS
			</button>

			<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
				<Form method="POST" className="POS__form">
					<h2 className="POS__form-title">Agregar punto de venta</h2>
					<fieldset className="POS__fieldset">
						<div className="POS__field-wrapper">
							<label htmlFor="name" className="POS__label">
								Nombre
							</label>
							<input
								required
								id="name"
								name="name"
								type="text"
								className="POS__input"
								value={name}
								onChange={onInputChange}
							/>
						</div>
					</fieldset>
					<button
						type="submit"
						className="POS__button POS__button--form"
					>
						Enviar
					</button>
				</Form>
			</Modal>
		</>
	);
};
