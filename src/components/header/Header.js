import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
	render() {
		return (
			<header className="header-bar">
				<div className="logo nav">
					<a href="#">
						<img
							src="../img/logo.png"
							alt="main logo"
							className="logo-header"
						/>
					</a>
				</div>
				<nav className="nav">
					<div className="nav-item">
						<a href="#">ALL PRODUCTS</a>
					</div>
					<div className="nav-item">
						<a href="#">ABOUT US</a>
					</div>
					<div className="nav-item nav-after">
						<a href="#">LOG IN</a>
					</div>
					<div className="nav-item">
						<a href="#">SIGN UP</a>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
