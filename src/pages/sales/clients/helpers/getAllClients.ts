import { ClientsWrapper } from '../interfaces/ClientsWrapper';

export const getAllClients = (): Promise<ClientsWrapper> =>
	fetch('http://127.0.0.1:3000/api/Client/getAllClients').then(
		response => response.json() as Promise<ClientsWrapper>
	);
