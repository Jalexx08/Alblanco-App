import React from 'react';
import { ProductList } from '../product/ProductList';

import bannerSublymas from '../../assets/img/banners/banner-sublymas.jpg';

export const SublymaScreen = () => {
	return (
		<div className ="">
			<img src = {bannerSublymas} alt ="banners-sublimación-y-más" className ="banners" />
			<h1 className ="title-main">Sublimación y más</h1>

			<ProductList type="sublymas" />
		</div>
	);
};
