import { ChangeEvent, useState } from 'react';

export const useForm = <Form>(initialValue: Form) => {
	const [formState, setFormState] = useState<Form>(initialValue);

	const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setFormState({ ...formState, [name]: value });
	};

	return { formState, onInputChange, setFormState, ...formState };
};
