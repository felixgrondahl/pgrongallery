import React, { useEffect, useState } from "react";
import Nav from "../Navbar";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Gallery from "../../pages/Gallery";
import Product from "../../pages/Product";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Cart from "../../pages/Cart";
import CubeBackground from "../CubeBackground";
import { Route, Switch, useLocation } from "react-router-dom";
import GlobalStyle from "../../styles/global-styles";
import { ThemeProvider } from "styled-components";
import { useTransition } from "react-spring";
import { CacheData } from "../../utils/products";
import * as S from "./style";
import ScrollToTop from "../../components/ScrollToTop";

const theme = {
	navbarHeight: "60px",
	boxShadowColor: "rgba(192, 192, 192)",
};

function App() {
	const location = useLocation();
	const transition = useTransition(location, (location) => location.pathname, {
		from: { opacity: 0, transform: "translate3d(100%, 0, 0)" },
		enter: { opacity: 1, transform: "translate3d(0%, 0, 0)" },
		leave: { opacity: 0, transform: "translate3d(-50%, 0, 0)" },
	});

	const [cached, setCached] = useState(false);

	useEffect(() => {
		const waitForCache = async () => {
				console.log("CHECKING CACHING!");
				await CacheData();
				setCached(true);
		};
		waitForCache();
	}, []);

	return (
		// <Router>
		<ThemeProvider theme={theme}>
			<ScrollToTop />
			<GlobalStyle />
			<CubeBackground />

			<Nav />

			<div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
				{transition.map(({ item: location, props, key }) => (
					<S.AnimatedRoutes key={key} style={props}>
						<Switch location={location}>
							<Route path="/" exact component={Home} />
							<Route path="/About" component={About} />
							{/* <Route path="/Gallery" component={Gallery} /> */}
							<Route
								path="/Gallery"
								render={(props) => <Gallery {...props} cached={cached} />}
							/>
						</Switch>
					</S.AnimatedRoutes>
				))}
			</div>

			<Route path="/" component={Login} />
			<Route path="/" component={Register} />
			<Route path="/" component={Cart} />
			{/* <Route path="/Gallery/" component={Product} /> */}
			<Route
				path="/Gallery/"
				render={(props) => <Product {...props} cached={cached} />}
			/>
		</ThemeProvider>
		// </Router>
	);
}

export default App;
