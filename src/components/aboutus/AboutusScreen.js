import React from 'react';

export const AboutusScreen = () => {
	return (
		<div className="container">
			<h1 className="title-main">Quiene somos</h1>
			<section>
				<p className="articles">
					Al blanco te invita a soñar y plasmar tus buenos deseos en cada
					detalle… atrévete a decir tus emociones con tan solo una sonrisa, una
					mirada, una imagen no lo pienses tanto, contáctanos y atina a tus
					ideas.
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
