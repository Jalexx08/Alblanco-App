import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({ id, name, type, color, path_img, desc }) => {
	return (
		<div className="card">
			<div
				className="card-img"
				style={{
					backgroundImage: `url('${path_img}${id}.jpg')`,
					backgroundSize: 'cover',
				}}
			></div>
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p className="card-text">{desc}</p>
			</div>
			<hr />
			<div className="card-footer">
				<Link type="button" className="btn btn-secondary" to="/">
					Ver más
				</Link>
			</div>
		</div>
	);
};
