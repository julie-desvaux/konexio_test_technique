import React, { Component } from "react";

import M from "materialize-css/dist/js/materialize.min.js";

import Konexio from "../Assets/konexio.jpg";

export default class NavBar extends Component {
	componentDidMount() {
		let sidenav = document.querySelector("#mobile-demo");
		M.Sidenav.init(sidenav, {});
	}

	render() {
		return (
			<div className="row">
				<div className="navbar-fixed">
					<nav className="blue">
						<div className="nav-wrapper">
							<a href="https://www.konexio.eu" target="_blank" className="brand-logo">
								<img className="navbar-logo" src={Konexio} alt="logo de Konexio" />
							</a>
							<a href="#" data-target="mobile-demo" className="sidenav-trigger">
								<i className="material-icons">menu</i>
							</a>
							<ul className="right hide-on-med-and-down">
								<li>
									<a href="#infos">Infos</a>
								</li>
								<li>
									<a href="#inscription">Inscription</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>

				<ul className="sidenav" id="mobile-demo">
					<li>
						<a href="#infos">Infos</a>
					</li>
					<li>
						<a href="#inscriptions">Inscriptions</a>
					</li>
				</ul>
			</div>
		);
	}
}
