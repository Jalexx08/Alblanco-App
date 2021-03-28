import { products } from '../data/products';

export const getProductById = (id) => {
	return products.find(product.id === id);
};
