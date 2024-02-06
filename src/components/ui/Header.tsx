import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header className="header">
			<nav className="header__nav">
				<ul className="header__ul">
					<li className="header__li">
						<button className="header__menuButton"></button>
					</li>
					<li className="header__li">
						<Link to="/" className="header__name">
							Ecomoda
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
