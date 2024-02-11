import { Outlet } from 'react-router-dom';
import { Header } from './components';
import { Sidebar } from './components/ui/Sidebar/Sidebar';

export const App = () => {
	return (
		<>
			{/* <Header /> */}
			<Sidebar />
			<Outlet />
		</>
	);
};
