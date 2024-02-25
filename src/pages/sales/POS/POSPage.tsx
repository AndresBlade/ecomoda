import { useState } from 'react';
import { Modal } from '../../../components/ui/modal/Modal';
export const POSPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="POS__container">
				{
					[].length > 0 ? (
						[].map(() => <>punto de venta</>)
					) : (
						<>
							Todavía no has creado un punto de venta. clickea en
							'Crear POS' para comenzar!
						</>
					) /*waiting for the POS endpoint..... */
				}
			</div>

			<button
				className="POS__button POS__button--corner-fixed"
				onClick={() => setIsOpen(true)}
			>
				Crear POS
			</button>

			<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
				<form action="" className="POS__form">
					<h2 className="POS__title">Agregar punto de venta</h2>
					<fieldset className="POS__fieldset">
						<div className="POS__field-wrapper">
							<label htmlFor="code" className="POS__label">
								Código
							</label>
							<input
								id="code"
								name="code"
								required
								type="text"
								className="POS__input"
							/>
						</div>
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
							/>
						</div>
					</fieldset>
					<button className="POS__button POS__button--form">
						Enviar
					</button>
				</form>
			</Modal>
		</>
	);
};
