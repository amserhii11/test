import React, { Component } from "react";
import "./Mostpopular.css";

class Mostpopular extends Component {
	render() {
		return (
			<section className="most-popular-product-page">
				<div className="page-name">
					<h1 className="name-page">Most Popular Products</h1>
					<p className="description-page">
						This is the list of products that are most interested in users
					</p>
				</div>
				<div className="container-products">
					<div className="most-popular-products">
						<div className="product-card">
							<a href="#">
								<img src="../img/hubstuf.png" alt="" />
								<p className="title-card">Hubstuff Directory</p>
							</a>
						</div>
						<div className="product-card">
							<a href="#">
								<img src="../img/jira.png" alt="" />
								<p className="title-card">Jira 2017</p>
							</a>
						</div>
						<div className="product-card">
							<a href="#">
								<img src="../img/slack.png" alt="" />
								<p className="title-card">Slack Pro</p>
							</a>
						</div>
						<div className="product-card">
							<a href="#">
								<img src="../img/trave.png" alt="" />
								<p className="title-card">TraveChat</p>
							</a>
						</div>
						<div className="product-card">
							<a href="#">
								<img src="../img/netw.png" alt="" />
								<p className="title-card">Network</p>
							</a>
						</div>
						<div className="product-card">
							<a href="#">
								<img src="../img/camp.png" alt="" />
								<p className="title-card">Time Camp</p>
							</a>
						</div>
					</div>
					<a href="#">
						<div className="all-products">All products</div>
					</a>
				</div>
			</section>
		);
	}
}

export default Mostpopular;
