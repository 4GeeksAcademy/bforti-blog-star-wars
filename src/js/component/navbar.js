import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 px-2">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto btn-group px-2">
				<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Favoritos
				</button>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#">Dropdown link</a></li>
					<li><a className="dropdown-item" href="#">Dropdown link</a></li>
				</ul>




			</div>
		</nav>
	);
};
