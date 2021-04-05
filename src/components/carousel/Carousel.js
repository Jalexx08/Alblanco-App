import React, { useMemo } from 'react';
import { getProductsByType } from '../../selectors/getProductsByType';
import { CarouselItem } from './CarouselItem';


export const Carousel = ({ type }) => {
    const products = useMemo(() => getProductsByType( type ), [type]);

	return (
		<section className="carousel">
			<div className="carousel__container">
				{products.map((product) => (
					<CarouselItem key={product.id} {...product} />
				))}
			</div>
		</section>
	);
};
