import React, { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
	const menu = useRef();
	const subMenu = useRef();
	let icono = '';

	const [flagExpand, setFlagExpand] = useState(false);

	const handleClickMenu = () => {
		menu.current.classList.toggle('showme');
		setFlagExpand(!flagExpand);
	};

	icono = flagExpand ? 'window-close' : 'bars';

	const handleSubMenu = function () {
		if (window.innerWidth < 968) {
			const subMenuHeight = subMenu.current.scrollHeight;

			if (subMenu.current.classList.contains('expand')) {
				subMenu.current.classList.remove('expand');
				subMenu.current.removeAttribute('style');
			} else {
				subMenu.current.classList.add('expand');
				subMenu.current.style.height = subMenuHeight + 'px';
			}
		}
	};

	return (
		<>
			<div>
				<span className="nav-bar" onClick={handleClickMenu}>
					{<i className={`fas fa-${icono}`} />} Menú
				</span>
				<nav>
					<ul className="menu" ref={menu}>
						<li className="menu__item">
							<NavLink
								to="/"
								className="menu__link"
								activeClassName="active"
								onClick={handleClickMenu}
							>
								Inicio
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink
								to="/nosotros"
								className="menu__link"
								activeClassName="active"
								onClick={handleClickMenu}
							>
								Nosotros
							</NavLink>
						</li>
						<li className="menu__item container-submenu">
							<NavLink
								to="#"
								className="menu__link submenu-btn"
								activeClassName="active"
								onClick={handleSubMenu}
							>
								Productos <i className="fas fa-chevron-down" />
							</NavLink>
							<ul className="submenu" ref={subMenu}>
								<li className="menu__item">
									<Link
										to="/mugs"
										className="menu__link"
										onClick={handleClickMenu}
									>
										Mugs
									</Link>
								</li>
								<li className="menu__item">
									<Link
										to="/termos"
										className="menu__link"
										onClick={handleClickMenu}
									>
										Termos
									</Link>
								</li>
								<li className="menu__item">
									<Link
										to="/sublimacion-y-mas"
										className="menu__link"
										onClick={handleClickMenu}
									>
										Sublimación y más
									</Link>
								</li>
							</ul>
						</li>
						<li className="menu__item">
							<NavLink
								to="/contacto"
								className="menu__link"
								activeClassName="active"
								onClick={handleClickMenu}
							>
								Contácto
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};
