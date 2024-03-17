export const deletePOS = (id: number): Promise<unknown> =>
	fetch(`http://127.0.0.1:3000/api/PoS/deletestore/${id}`, {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
	}).then(response => response.text() as Promise<unknown>);
