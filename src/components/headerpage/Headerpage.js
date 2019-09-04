import React, { Component } from "react";
import "./Headerpage.css";

class Headerpage extends Component {
	render() {
		return (
			<div className="header-page">
				<div className="search-bar-menu">
					<div className="for-margin">
						<div className="perfect-product">
							<h1 className="quick">
								Quick Search for Your
								<span className="perfect"> Perfect Product </span>
							</h1>
						</div>
						<div className="innovate-list">
							INNOVATE &#8226; LIST &#8226; CONNECT
						</div>
						<div className="search-bar">
							<div className="select-style">
								<button
									name="select-bar"
									id="button"
									className="category-input-header"
								>
									Category
								</button>
								<div className="dropdown">
									<div className="drop-links">Hubstaff</div>
									<div className="drop-links">Slack</div>
									<div className="drop-links">TraveChat</div>
								</div>
							</div>
							<input
								type="text"
								name="text-area"
								className="input-area-header"
							/>
							<input
								type="submit"
								value="START SEARCHING"
								className="btn-submit-search-header"
							/>
						</div>
					</div>
					<div className="headers-bottom-menu">
						<div className="categories-button">
							<a href="#" className="categories">
								<p className="text-headers-bottom button-before-all">
									All categories
								</p>
							</a>
						</div>
						<div className="how-it-works-button">
							<a href="#" className="how-it-works">
								<p className="text-headers-bottom button-before-how">
									How it works?
								</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Headerpage;
