import { Client } from '../interfaces/Client';

export const updateClient = (client: Client): Promise<unknown> =>
	fetch(`http://127.0.0.1:3000/api/Client/updateclient/${client.id}`, {
		body: JSON.stringify(client),
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
	}).then(response => response.json() as Promise<unknown>);
