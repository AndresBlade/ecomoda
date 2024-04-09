import { Client } from '../interfaces/Client';

type CreateTypeForm = {
	method: 'POST';
};

type EditTypeForm = {
	method: 'PUT';
	client: Client;
};

type DeleteTypeForm = {
	method: 'DELETE';
	client: Client;
};

export type ClientFormType = CreateTypeForm | EditTypeForm | DeleteTypeForm;
