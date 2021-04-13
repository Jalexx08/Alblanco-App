import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';

import logoHeader from '../../assets/img/logo/logo-header.png';

export const Header = () => {
	return (
		<>
			<div className="header">
				<div className="header__logo">
					<Link to="/">
						<img src={logoHeader} width={250} alt="logo-alblanco" />
					</Link>
				</div>
				<ul className="header__social">
					<li className="instagram">
						<a
							href="https://www.instagram.com/alblanco.co/"
							target="_blank"
							rel="noreferrer"
						>
							<span>
								<i className="fab fa-instagram fa-2x" />
							</span>
						</a>
					</li>
					<li className="facebook">
						<span>
							<a
								href="https://www.facebook.com/AlBlancoCol"
								target="_blank"
								rel="noreferrer"
							>
								<span>
									<i className="fab fa-facebook fa-2x" />
								</span>
							</a>
						</span>
					</li>
				</ul>
			</div>
            <Navbar/>
		</>
	);
};
