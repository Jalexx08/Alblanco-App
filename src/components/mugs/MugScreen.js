import React from 'react';
import { ProductList } from '../product/ProductList';

import bannerMugs from '../../assets/img/banners/banner-mugs.jpg';


export const MugScreen = () => {
	return (
		<div className="">
			<figure>
				<img src ={bannerMugs} alt ="banner-mugs" className ="banners" />
			</figure>
			<h1 className ="title-main">Mugs</h1>

			<ProductList type="mugs" />
		</div>
	);
};
