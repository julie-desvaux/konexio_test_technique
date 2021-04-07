import React, { Component } from "react";

import M from "materialize-css/dist/js/materialize.min.js";

import Header from "../Components/Header";
import Input from "../Components/Input";

export default class User extends Component {
	constructor(props) {
		super(props);
		this.state = { errors: {}, user: { status: "default", terms: false, newsletter: false } };
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		let elems = document.querySelector("select");
		M.FormSelect.init(elems, {});
	}

	handleChange(e) {
		const { name, value } = e.target;
		let user = this.state.user;
		user = { ...this.state.user, [name]: value };
		let errors = this.state.errors;
		this.setState({ errors, user });
	}

	isCheck(name) {
		let user = this.state.user;
		user = { ...this.state.user, [name]: !this.state.user[name] };
		let errors = this.state.errors;
		this.setState({ errors, user });
	}

	sendForm(e) {
		e.preventDefault();
		if (
			this.state.user.email !== "" &&
			this.state.user.password !== "" &&
			this.state.user.passwordConfirm !== "" &&
			this.state.user.terms
		) {
			if (this.validateEmail(this.state.user.email)) {
				if (this.state.user.password === this.state.user.passwordConfirm) {
					const toastHTML = "<span>Registration confirmed</span>";
					M.toast({ html: toastHTML });
					this.setState({
						errors: {},
						user: {
							status: "default",
							terms: false,
							newsletter: false,
							firstName: "",
							lastName: "",
							email: "",
							password: "",
							passwordConfirm: "",
						},
					});
				} else {
					let errors = this.state.errors;
					errors = { ...errors, password: "Passwords doesn't match", passwordConfirm: "Passwords doesn't match" };
					this.setState({ errors, ...this.state.user });
				}
			} else {
				let errors = this.state.errors;
				errors = { ...errors, email: "Please enter a valid email address" };
				this.setState({ errors, ...this.state.user });
			}
		} else {
			const toastHTML = "<span>Invalid registration, please check the fields in red</span>";
			M.toast({ html: toastHTML });
			if (
				!this.state.user.email &&
				!this.state.user.password &&
				!this.state.user.passwordConfirm &&
				!this.state.user.terms
			) {
				this.setState({
					errors: {
						email: "Please enter an email address",
						password: "Please enter a password",
						passwordConfirm: "Please confirm the password",
						terms: "Please read terms and conditions",
					},
				});
			} else if (!this.state.user.email) {
				let errors = this.state.errors;
				errors = { ...errors, email: "Please enter an email address" };
				this.setState({ errors, ...this.state.user });
			} else if (!this.state.user.password) {
				let errors = this.state.errors;
				errors = { ...errors, password: "Please enter a password" };
				this.setState({ errors, ...this.state.user });
			} else if (!this.state.user.passwordConfirm) {
				let errors = this.state.errors;
				errors = { ...errors, passwordConfirm: "Please confirm the password" };
				this.setState({ errors, ...this.state.user });
			} else if (!this.state.user.terms) {
				let errors = this.state.errors;
				errors = { ...errors, terms: "Please read terms and conditions" };
				this.setState({ errors, ...this.state.user });
			}
		}
	}

	/* Regex validation email */
	validateEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	render() {
		console.log(this.state);
		const { user, errors } = this.state;
		return (
			<>
				<Header />
				<div className="row" id="inscription">
					<div className="col s12">
						<div className="card horizontal">
							<div className="card-stacked">
								<form>
									<div className="card-content">
										<h3 className="header blue-text">Inscription</h3>
										<div className="row">
											<div className="input-field col s12 m6">
												<Input
													icon="account_circle"
													id="firstName"
													name="firstName"
													className="validate"
													value={user.firstName}
													onChange={(e) => this.handleChange(e)}
													label="First Name"
												/>
											</div>
											<div className="input-field col s12 m6">
												<Input
													icon="account_circle"
													id="lastName"
													name="lastName"
													className="validate"
													value={user.lastName}
													onChange={(e) => this.handleChange(e)}
													label="Last Name"
												/>
											</div>
										</div>
										<div className="row">
											<div className="input-field col s12">
												<Input
													icon="email"
													id="email"
													name="email"
													className={errors.email ? "validate invalid" : user.email ? "validate valid" : "validate"}
													required
													value={user.email}
													onChange={(e) => this.handleChange(e)}
													label="Email"
													asterisk=" *"
													error={errors.email}
												/>
											</div>
										</div>
										<div className="row">
											<div className="input-field col s12 m6">
												<Input
													icon="lock"
													id="password"
													name="password"
													className={
														errors.password ? "validate invalid" : user.password ? "validate valid" : "validate"
													}
													type="password"
													required
													value={user.password}
													onChange={(e) => this.handleChange(e)}
													label="Password"
													asterisk=" *"
													error={errors.password}
												/>
											</div>
											<div className="input-field col s12 m6">
												<Input
													icon="lock"
													id="passwordConfirm"
													name="passwordConfirm"
													className={
														errors.passwordConfirm
															? "validate invalid"
															: user.passwordConfirm
															? "validate valid"
															: "validate"
													}
													type="password"
													required
													value={user.passwordConfirm}
													onChange={(e) => this.handleChange(e)}
													label="Password Confirmation"
													asterisk=" *"
													error={errors.passwordConfirm}
												/>
											</div>
										</div>
										<div className="row">
											<div className="input-field col s12">
												<i className="material-icons prefix blue-text">school</i>
												<select name="status" value={this.state.user.status} onChange={(e) => this.handleChange(e)}>
													<option value="default" disabled>
														Choose your option
													</option>
													<option value="teacher">Teacher</option>
													<option value="teacher-assistant">Teacher Assistant</option>
													<option value="student">Student</option>
												</select>
												<label>Status</label>
											</div>
										</div>
										<div className="row">
											<div className="input-field col s12">
												<i className="material-icons prefix blue-text">message</i>
												<label>
													<input
														type="checkbox"
														className="filled-in"
														name="newsletter"
														checked={this.state.user.newsletter}
														onChange={(e) => this.isCheck(e.target.name)}
													/>
													<span>Subscribe to newsletter</span>
												</label>
											</div>
										</div>
										<div className="row">
											<div className="input-field col s12">
												<i className="material-icons prefix blue-text">done</i>
												<label>
													<input
														type="checkbox"
														className="filled-in"
														name="terms"
														checked={this.state.user.terms}
														onChange={(e) => this.isCheck(e.target.name)}
													/>
													<span>
														I have read terms and conditions <span className="red-text">*</span>
													</span>
													<span className="helper-text red-text">{this.state.errors.terms}</span>
												</label>
											</div>
										</div>
									</div>
									<div className="card-action">
										<p className="red-text">* Required</p>
										<button
											className="btn waves-effect waves-light blue"
											type="submit"
											name="action"
											onClick={(e) => this.sendForm(e)}
										>
											Submit
											<i className="material-icons right">send</i>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
