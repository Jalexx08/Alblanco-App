import React from 'react';
import { ProductList } from '../product/ProductList';

export const MugScreen = () => {
	return (
		<div className="container">
			<h1 className ="title-main">Mugs</h1>

			<ProductList type="mug" />
		</div>
	);
};
