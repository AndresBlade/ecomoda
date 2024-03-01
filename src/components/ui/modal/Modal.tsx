import React, { ElementRef, useCallback, useEffect, useRef } from 'react';
import { MdClose } from 'react-icons/md';
interface ModalProps {
	children: React.ReactNode;
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {
	const dialogRef = useRef<ElementRef<'dialog'>>(null);

	const closeModalWithKeyboard = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				e.preventDefault();
				setIsOpen(false);
			}
		},
		[setIsOpen]
	);
	useEffect(() => {
		if (isOpen) {
			dialogRef.current?.showModal();
			document.addEventListener('keydown', closeModalWithKeyboard);
			return;
		}

		console.log(isOpen);

		console.log('cerrando');
		dialogRef.current?.close();
		document.removeEventListener('keydown', closeModalWithKeyboard);
	}, [isOpen, closeModalWithKeyboard]);
	return (
		<>
			<dialog className="modal" ref={dialogRef}>
				<button
					className="modal__close-button"
					autoFocus
					onClick={() => setIsOpen(false)}
				>
					<MdClose />
				</button>
				<div className="modal__content">{children}</div>
			</dialog>
		</>
	);
};
