import { Outlet } from 'react-router-dom';
import { Header } from './components';
import { Sidebar } from './components/ui/Sidebar/Sidebar';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useState } from 'react';

export const App = () => {
	const [openedMenu, setOpenedMenu] = useState(true)
	const handleMenu = () => setOpenedMenu(!openedMenu)

	return (
		<>
			{/* <Header /> */}
			<section className='sidebarGrid'>
				<aside>
					<Sidebar handleMenu={handleMenu} openedMenu={openedMenu} />				
					<span onClick={handleMenu} className='sidebar__closeTag'>
						<IoIosArrowRoundBack size={25} color='#fff'/>
					</span>
				</aside>
				<article><Outlet /></article>
			</section>
		</>
	);
};
