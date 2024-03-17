import { POS } from '../interfaces/POS';

type CreateTypeForm = {
	method: 'POST';
};

type EditTypeForm = {
	method: 'PUT';
	pointOfSale: POS;
};

type DeleteTypeForm = {
	method: 'DELETE';
	pointOfSale: POS;
};

export type POSFormType = CreateTypeForm | EditTypeForm | DeleteTypeForm;
