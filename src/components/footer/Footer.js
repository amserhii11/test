import React, { Component } from "react";
import "./Footer.css";
import footparr from "img/footparr.png";

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="footer-logo">
					<img src={footparr} className="footer-logotype" alt="" />
				</div>
				<div className="footer-links">
					<a href="#" className="footer-link">
						{" "}
						about us{" "}
					</a>
					<a href="#" className="footer-link">
						{" "}
						terms of service{" "}
					</a>
					<a href="#" className="footer-link">
						{" "}
						privaci policy
					</a>
					<a href="#" className="footer-link">
						{" "}
						contact us
					</a>
				</div>
				<div className="footer-policy">© 2018 Find Parrot</div>
			</footer>
		);
	}
}

export default Footer;
