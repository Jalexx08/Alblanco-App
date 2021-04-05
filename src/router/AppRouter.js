import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AboutusScreen } from '../components/aboutus/AboutusScreen';
import { ContactScreen } from '../components/contact/ContactScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { MugScreen } from '../components/mugs/MugScreen';
import { ProductScreen } from '../components/product/ProductScreen';
import { SublymaScreen } from '../components/sublymas/SublymaScreen';
import { TermoScreen } from '../components/termos/TermoScreen';
import { Header } from '../components/ui/Header';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomeScreen} />
					<Route exact path="/nosotros" component={AboutusScreen} />
					<Route exact path="/contacto" component={ContactScreen} />
					<Route exact path="/producto/:productId" component={ProductScreen} />
					<Route exact path="/mugs" component={MugScreen} />
					<Route exact path="/termos" component={TermoScreen} />
					<Route exact path="/sublimacion-y-mas" component={SublymaScreen} />
				</Switch>
			</div>
		</Router>
	);
};
