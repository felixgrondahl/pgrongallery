import React, { useEffect, useState } from "react";
import Nav from "../Navbar";
import Home from "../../pages/Home";
import Gallery from "../../pages/Gallery";
import Product from "../../pages/Product";
import RequestInvoice from "../../pages/RequestInvoice";
import Cart from "../../pages/Cart";
import { Route, Switch, useLocation } from "react-router-dom";
import GlobalStyle from "../../styles/global-styles";
import { ThemeProvider } from "styled-components";
import { useTransition } from "react-spring";
import { CacheData } from "../../utils/products";
import * as S from "./style";
import ScrollToTop from "../../components/ScrollToTop";
import Footer from "../Footer";
import Exhibitions from "../../pages/Exhibitions";
import Commissions from "../../pages/Commissions";

const theme = {
	navbarHeight: "60px",
};

function App() {
	const location = useLocation();
	const transition = useTransition(location, (location) => location.pathname, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});

	const [cached, setCached] = useState(false);

	useEffect(() => {
		const waitForCache = async () => {
			//Check the cache
			await CacheData();
			setCached(true);
		};
		waitForCache();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<ScrollToTop />
			<GlobalStyle />

			{transition.map(({ item: location, props, key }) => (
				<S.AnimatedRoutes key={key} style={props}>
					<Switch location={location}>
						<Route path="/" exact component={Home} />
						<Route
							path="/Gallery"
							render={(props) => <Gallery {...props} cached={cached} />}
						/>
						<Route path="/Exhibitions" component={Exhibitions} />
						<Route
							path="/Commissions"
							render={(props) => <Commissions {...props} cached={cached} />}
						/>
					</Switch>
					<Footer />
				</S.AnimatedRoutes>
			))}

			<Nav />

			<Route path="/" component={RequestInvoice} />
			<Route path="/" component={Cart} />
			<Route
				path="/Gallery/"
				render={(props) => <Product {...props} cached={cached} />}
			/>
		</ThemeProvider>

		// </Router>
	);
}

export default App;
