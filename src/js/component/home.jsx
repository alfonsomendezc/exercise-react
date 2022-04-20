import React from "react";

import { Navbar } from "./navbar.jsx";
import { Footer } from "./footer.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./card.jsx";

const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<Jumbotron />
				<Card />
			</div>
			<Footer />
		</>
	);
};

export default Home;
