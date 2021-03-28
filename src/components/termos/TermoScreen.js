import React from 'react';
import { ProductList } from '../product/ProductList';

export const TermoScreen = () => {
	return (
		<div className="container">
			<h1 className="title-main">Termos</h1>

			<ProductList type="termo" />
		</div>
	);
};
