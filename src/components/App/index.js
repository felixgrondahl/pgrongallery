import React, { useEffect, useState } from "react";
import Nav from "../Navbar";
import Home from "../../pages/Home";
import Gallery from "../../pages/Gallery";
import Product from "../../pages/Product";
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
import { Helmet } from "react-helmet";

const theme = {
	navbarHeight: "60px",
	navbarHeightMobile: "40px",
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
		<>
			<Helmet>
				<title>Peter Grondahl</title>
				<meta
					name="description"
					content="Peter Gröndahl is a remarkably talented and innovative artist
			presently working and residing in Palma de Mallorca."
				/>
				<link rel="canonical" href="https://pgron.com" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Peter Grondahl" />
				<meta property="og:url" content="https://pgron.com" />
				<meta property="og:title" content="Peter Grondahl" />
				<meta property="og:description" content="The official Peter Grondahl homepage." />
				<meta property="og:image" content="https://pgron.com/OGImage.png" />
				<meta property="og:image:alt" content="Peter Grondahl og-image" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:image:alt" content="Peter Grondahl Header" />
			</Helmet>

			<ThemeProvider theme={theme}>
				<ScrollToTop />
				<GlobalStyle />
				<S.Pgron>pgron</S.Pgron>

				{transition.map(({ item: location, props, key }) => (
					<S.AnimatedRoutes key={key} style={props}>
						<Switch location={location}>
							<Route path="/" exact component={Home} />
							<Route path="/Gallery" render={(props) => <Gallery {...props} cached={cached} />} />
							<Route path="/Exhibitions" component={Exhibitions} />
							<Route path="/Commissions" render={(props) => <Commissions {...props} cached={cached} />} />
						</Switch>
						<Footer />
					</S.AnimatedRoutes>
				))}

				<Nav />
				<Route path="/Gallery/" render={(props) => <Product {...props} cached={cached} />} />
			</ThemeProvider>
		</>
	);
}

export default App;
