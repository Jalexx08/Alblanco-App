import { products } from '../data/products';

export const getProductsByType = ( type ) => {
    
    // const validTypes = ['mug', 'termo', 'sublymas'];

    return products.filter( product => product.type === type);
}
