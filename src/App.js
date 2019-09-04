import React, { Component } from "react";
import Header from "./components/header/Header";
import Headerpage from "./components/headerpage/Headerpage";
import Mostpopular from "./components/mostpopularpage/Mostpopular";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Headerpage />
				<Mostpopular />
				<Testimonials />
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
