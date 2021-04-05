import React from 'react';

export const CarouselItem = ({ id, name, type, color, path_img, desc }) => {
	return (
		<div className="carousel__item">
			<img
				className="carousel__img"
				src={`${path_img}${id}.jpg`}
				alt={ name }
			/>
			<div className="carousel__details" />
		</div>
	);
};
