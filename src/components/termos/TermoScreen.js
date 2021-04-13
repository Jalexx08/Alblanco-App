import React from 'react';
import { ProductList } from '../product/ProductList';

import bannerTermos from '../../assets/img/banners/banner-termos.jpg';

export const TermoScreen = () => {
	return (
		<div className="">
			<img src ={bannerTermos} alt ="banners" className ="banners" />
			<h1 className="title-main">Termos</h1>

			<ProductList type="termos" />
		</div>
	);
};
