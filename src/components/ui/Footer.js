import React from 'react';

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-grid">
				<div className="section-1">
					<h2>Dirección</h2>
					<p>Medellín, Colombia</p>
				</div>
				<div className="section-2">
					<h2>Páginas</h2>
					<ul>
                        <li>Inicio</li>
                        <li>Nosotros</li>
                        <li>Mugs</li>
                        <li>Termos</li>
                        <li>Sublimación y más</li>
                    </ul>
				</div>
				<div className="section-3">
					<h2>Encuentranos en</h2>
					<ul>
                        <li>facebook</li>
                        <li>Instagram</li>
                        <li>3002441840</li>
                        <li>ideasalblanco@gmail.com</li>
                    </ul>
				</div>
			</div>

			<div className="footer-bottom">
				<p>Alblanco.co &copy; {new Date().getFullYear()}</p>
			</div>
		</footer>
	);
};
