import React from 'react';

import aboutusImg from '../../assets/img/about-us/aboutus.jpg';

export const AboutusScreen = () => {
	return (
		<div className="container">
			<h1 className="title-main">Quiene somos</h1>
			<section className="aboutus-main">
				<figure className="img-aboutus">
					<img src={aboutusImg} alt="about us" className="img-fluid" />
				</figure>

				<article className="text-aboutus">
					{/* <h1 className="title-main">Quiene somos</h1> */}
					<p>
						Alblanco es una microempresa que nació en el año 2019 como un
						proyecto de tesis universitaria.
					</p>
					<p>
						En el año 2020 su creador con 13 años de experiencia en el diseño
						gráfico, decide junto a su esposa darle vida a sus ideas y con ello
						a las ideas de muchas personas más.
					</p>
					<p>
						Alblanco se dedica a la sublimación de productos como mugs, termos,
						textiles y más. Además de prestar servicios de diseño en identidad
						visual, logotipos, brochure, material P.O.P.
					</p>
					<p>
						Su principal deseo es ser reconocido por su calidad, cumplimiento y
						precisión para plasmar lo que otros desean.
					</p>
				</article>
			</section>
			<hr className="divider"/>
			<section className="missionVision-box">
				<div className ="card-aboutus">
					<h2 className="subtitle">Misión</h2>
					<p>
						Somos una microempresa dedicada al diseño gráfico, sublimación y
						estampación de ideas, para fechas especiales y empresariales en pro
						de satisfacer una necesidad de regalar con cariño y amor los deseos
						de las personas que nos eligen.
					</p>
				</div>
				<div className ="card-aboutus">
					<h2 className="subtitle">Visión</h2>
					<p>
						En el año 2021 innovar en cada uno de nuestros productos y servicios
						con el fin de garantizar la total satisfacción y agrado de nuestros
						clientes.
					</p>
				</div>
			</section>
		</div>
	);
};
