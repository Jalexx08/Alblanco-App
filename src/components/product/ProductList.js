import React, { useMemo } from 'react';
import { getProductsByType } from '../../selectors/getProductsByType';
import { ProductCard } from './ProductCard';

export const ProductList = ({ type }) => {
    const products = useMemo(() => getProductsByType( type ), [type]);

	return (
		<div className="container">
			<div className="grid-products">
				{products.map((product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
		</div>
	);
};
