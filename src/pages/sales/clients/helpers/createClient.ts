import { Client } from '../interfaces/Client';

export const createClient = (client: Client): Promise<unknown> =>
	fetch(`http://127.0.0.1:3000/api/Client/createclient`, {
		body: JSON.stringify(client),
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	}).then(response => response.json() as Promise<unknown>);
