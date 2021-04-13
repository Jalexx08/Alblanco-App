import React from 'react';

export const AboutusScreen = () => {
	return (
		<div className="container">
			<h1 className="title-main">Quiene somos</h1>
			<section>
				<p className="articles">
					Alblanco es una microempresa que nació en el año 2019 como un proyecto
					de tesis universitaria. En el año 2020 su creador con 13 años de
					experiencia en el diseño gráfico, decide junto a su esposa darle vida
					a sus ideas y con ello a las ideas de muchas personas más. Alblanco se
					dedica a la sublimación de productos como mugs, termos, textiles y
					más. Además de prestar servicios de diseño en identidad visual,
					logotipos, brochure, material P.O.P. Su principal deseo es ser
					reconocido por su calidad, cumplimiento y precisión para plasmar lo
					que otros desean.
				</p>
				<figure
					className="container-img"
					style={{
						backgroundImage: 'url("./assets/img/aboutus.jpg")',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				></figure>
			</section>
		</div>
	);
};
