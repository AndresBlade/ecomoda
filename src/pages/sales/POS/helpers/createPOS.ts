export const createPOS = (name: string): Promise<unknown> =>
	fetch(`http://127.0.0.1:3000/api/PoS/createstore`, {
		body: JSON.stringify({ name }),
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	}).then(response => response.json() as Promise<unknown>);
