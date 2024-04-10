type CreateTypeForm = {
	method: 'POST';
};

type EditTypeForm<T> = {
	method: 'PUT';
	value: T;
};

type DeleteTypeForm<T> = {
	method: 'DELETE';
	value: T;
};

export type FormType<T> = CreateTypeForm | EditTypeForm<T> | DeleteTypeForm<T>;
