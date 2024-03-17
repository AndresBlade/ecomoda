import { POSWrapper } from '../interfaces/POSWrapper';

export const getAllPOS = (): Promise<POSWrapper> =>
	fetch('http://127.0.0.1:3000/api/PoS/getallstores').then(
		response => response.json() as Promise<POSWrapper>
	);
