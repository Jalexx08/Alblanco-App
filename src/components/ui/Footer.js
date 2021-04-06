import React from 'react';

export const Footer = () => {
	return (
		<footer className="footer ">
			<div className="footer-grid container">
				<div className="section-1">
					<img
						src="../assets/logo-alblanco.png"
						width={250}
						alt="logo-alblanco"
					/>
				</div>
				<div className="section-2">
					<h2>Contáctenos</h2>
					<ul>
						<li>
							<i className="fab fa-whatsapp " /><span>3002441840</span> 
						</li>
						<li>
							<i className="fas fa-envelope " /> <span>ideasalblanco@gmail.com</span> 
						</li>
						<li>
							<i className="fas fa-map-marker-alt " /> <span>Medellín, Colombia</span> 
						</li>
					</ul>
				</div>
				<div className="section-3">
					<h2>Encuentranos en</h2>
					<ul className="footer__social">
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
						<li className ="space"></li>
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
			</div>

			<div className="footer-bottom">
				<p>Copyright &copy; {new Date().getFullYear()} Alblanco.</p>
			</div>
		</footer>
	);
};
