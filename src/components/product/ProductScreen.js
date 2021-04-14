import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { getProductById } from '../../selectors/getProductById';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, Thumbs]);

export const ProductScreen = ({ history }) => {
	const handleReturn = () => {
		if (history.length <= 2) {
			history.push('/');
		} else {
			history.goBack();
		}
	};
	const { productId } = useParams();

	const product = useMemo(() => getProductById(productId), [productId]);

	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	const { name, designs, type } = product;

	const productsImg = require.context('../../assets/img/products', true);

	return (
		<div className="container">
			<h1 className="title-main">{name}</h1>

			<section className="main-image">
				<Swiper
					id="main"
					thumbs={{ swiper: thumbsSwiper }}
					tag="section"
					wrapperTag="ul"
					navigation
					pagination
					loop={true}
				>
					{designs.map((color, i) => (
						<SwiperSlide
							key={`color-${i}`}
							tag="li"
							style={{ listStyle: 'none' }}
							zoom={true}
						>
							<img
								// src={`.${path_img}${color}.jpg`}
								src={productsImg(`./${type}/${color}.jpg`).default}
								alt={color}
								style={{
									objectFit: 'cover',
									width: '100%',
									borderRadius: '0.5rem',
								}}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</section>

			<Swiper
				id="thumbs"
				spaceBetween={5}
				slidesPerView={3}
				tag="section"
				wrapperTag="ul"
				onSwiper={setThumbsSwiper}
			>
				{designs.map((color, i) => (
					<SwiperSlide key={`color-${i}`} tag="li" className="thumb-main">
						<figure className="thumb-item">
							<img
								src={productsImg(`./${type}/${color}.jpg`).default}
								alt={color}
								style={{
									objectFit: 'cover',
									borderRadius: '0.5rem',
									width: '100%',
								}}
							/>
						</figure>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="btnBack">
				<button className="btn btn-secondary" onClick={handleReturn}>
					Regresar
				</button>
			</div>
		</div>
	);
};
