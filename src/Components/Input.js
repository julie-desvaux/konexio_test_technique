import React, { Component } from "react";

export default class Input extends Component {
	render() {
		const { icon, id, name, type, className, value, onChange, label, error, required, asterisk } = this.props;
		return (
			<>
				<i className="material-icons prefix blue-text">{icon}</i>
				<input
					id={id}
					name={name}
					type={type ? type : "text"}
					className={className}
					value={value}
					onChange={onChange}
					required={required}
				/>
				<label htmlFor={id}>
					{label}
					<span className="red-text">{asterisk}</span>
				</label>
				{error ? <span className="helper-text red-text">{error}</span> : ""}
			</>
		);
	}
}
