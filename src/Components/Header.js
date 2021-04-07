import React, { Component } from "react";

import json from "../Utils/infos.json";
import Konexio2 from "../Assets/konexio2.jpg";

export default class Header extends Component {
	render() {
		return (
			<div className="row">
				<div className="col s12">
					<div className="card">
						<div className="card-image">
							<img className="card-img" src={Konexio2} alt="L'équipe Konexio assis sur les marches de Station F" />
						</div>
						<div className="card-content" id="infos">
							<h2 className="card-content-title blue-text">{json.promo_name}</h2>
							<h6>Date de début: {json.promo_start_date}</h6>
							<h6>Date de fin: {json.promo_end_date}</h6>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
