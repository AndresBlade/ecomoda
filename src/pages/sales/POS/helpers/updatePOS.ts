import { POS } from '../interfaces/POS';

export const updatePOS = ({ name, id }: POS): Promise<unknown> =>
	fetch(`http://127.0.0.1:3000/api/PoS/updatestore/${id}`, {
		body: JSON.stringify({ name }),
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
	}).then(response => response.json() as Promise<unknown>);
