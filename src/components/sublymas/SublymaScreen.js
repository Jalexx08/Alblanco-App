import React from 'react';
import { ProductList } from '../product/ProductList';

export const SublymaScreen = () => {
	return (
		<div className ="container">
			<h1 className ="title-main">Sublimación y más</h1>

			<ProductList type="sublymas" />
		</div>
	);
};
