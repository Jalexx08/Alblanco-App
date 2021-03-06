import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
	EffectCoverflow,
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Thumbs,
} from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
// import 'swiper/components/effect-cube/effect-cube.scss';
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { getProductsByType } from "../../selectors/getProductsByType";
import { Link } from "react-router-dom";

SwiperCore.use([
	EffectCoverflow,
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Thumbs,
]);

const productsImg = require.context("../../assets/img/products", true);
console.log(productsImg(`./sublymas-destacados/sublymas-3.jpg`));

export const HomeScreen = () => {
	const styleImg = {
		objectFit: "cover",
		width: "100%",
		borderRadius: "0.5rem",
	};

	const breakpointSwiper = {
		640: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
	};

	const typeMug = "mugs-destacados";
	const typeTermo = "termos-destacados";
	const typeSublymas = "sublymas-destacados";

	const mugs = useMemo(() => getProductsByType(typeMug), [typeMug]);
	const termos = useMemo(() => getProductsByType(typeTermo), [typeTermo]);
	const sublymas = useMemo(
		() => getProductsByType(typeSublymas),
		[typeSublymas]
	);

	return (
		<>
			<section className="container">
				<div className="jumbotron">
					<h1 className="title-main">Alblanco</h1>
					<p className="p-poster">
						Te invitamos a soñar y plasmar tus buenos deseos en cada detalle…
						atrévete a decir tus emociones con tan solo una sonrisa, una mirada,
						una imagen no lo pienses tanto, contáctanos y atina a tus ideas.
					</p>
				</div>
				<hr className="divider" />
				<h2 className="title-main">Lo que hacemos</h2>
				<p className="articles">
					Personaliza tus detalles y sorpréndelos con un regalo único y genial.
				</p>
				<Link to="/mugs">
					<h2 className="subtitle">Mugs</h2>
				</Link>
				<Swiper
					effect="coverflow"
					breakpoints={breakpointSwiper}
					tag="section"
					wrapperTag="ul"
					centeredSlides={true}
					spaceBetween={50}
					slidesPerView={1}
					navigation
					loop={true}
					scrollbar={{ draggable: true }}
					// onSwiper={(swiper) => console.log(swiper)}
					// onSlideChange={() => console.log('slide change')}
				>
					{/* to={`./producto/${id}`} */}
					{mugs.map((mug) => (
						<SwiperSlide key={mug.id} tag="li" style={{ listStyle: "none" }}>
							<Link to={`./producto/${mug.id}`}>
								<img
									src={productsImg(`./${mug.type}/${mug.id}.jpg`).default}
									style={styleImg}
									alt={mug.name}
								/>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>

				<Link to="/termos">
					<h2 className="subtitle">Termos</h2>
				</Link>

				<Swiper
					effect="coverflow"
					breakpoints={breakpointSwiper}
					tag="section"
					wrapperTag="ul"
					centeredSlides={true}
					spaceBetween={50}
					slidesPerView={1}
					navigation
					loop={true}
					scrollbar={{ draggable: true }}
					// onSwiper={(swiper) => console.log(swiper)}
					// onSlideChange={() => console.log('slide change')}
				>
					{termos.map((termo) => (
						<SwiperSlide key={termo.id} tag="li" style={{ listStyle: "none" }}>
							<Link to={`./producto/${termo.id}`}>
								<img
									src={productsImg(`./${termo.type}/${termo.id}.jpg`).default}
									style={styleImg}
									alt={termo.name}
								/>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>

				<Link to="/sublimacion-y-mas">
					<h2 className="subtitle">Sublimaciones y más</h2>
				</Link>

				<Swiper
					effect="coverflow"
					breakpoints={breakpointSwiper}
					tag="section"
					wrapperTag="ul"
					centeredSlides={true}
					spaceBetween={50}
					slidesPerView={1}
					navigation
					loop={true}
					scrollbar={{ draggable: true }}
					// onSwiper={(swiper) => console.log(swiper)}
					// onSlideChange={() => console.log(productsImg(`./sublymas-destacados`))}
				>
					{sublymas.map((sublym) => (
						<SwiperSlide key={sublym.id} tag="li" style={{ listStyle: "none" }}>
							<Link to={`./producto/${sublym.id}`}>
								<img
									src={productsImg(`./${sublym.type}/${sublym.id}.jpg`).default}
									style={styleImg}
									alt={sublym.name}
								/>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</>
	);
};
