import React from 'react';
import { Link } from 'react-router-dom';

const productsImg = require.context('../../assets/img/products', true);

export const ProductCard = ({ id, name, type, desc }) => {

	return (
		<div className="card">
			<div
				className="card-img"
				style={{
					backgroundImage: `url('${
						productsImg(`./${type}/${id}.jpg`).default
					}')`,
					backgroundSize: 'cover',
				}}
			></div>
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p className="card-text">{desc}</p>
			</div>
			<hr />
			<div className="card-footer">
				<Link
					type="button"
					className="btn btn-secondary"
					to={`./producto/${id}`}
				>
					Ver más
				</Link>
			</div>
		</div>
	);
};
