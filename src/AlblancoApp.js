import React from 'react';
import { Footer } from './components/ui/Footer';
import { Whatsapp } from './components/whatsapp/Whatsapp';
import { AppRouter } from './router/AppRouter';

export const AlblancoApp = () => {
	return (
		<div>
			<AppRouter />
			<Whatsapp/>
			<Footer/>
		</div>
	);
};
