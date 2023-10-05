import React from "react";
import "../assets/scripts/nav-header.css";

function NavHeader() {
	return (
		<div>
			<nav className="nav">
				<a href="/">Home</a>
				<a href="/">About</a>
				<a href="/">Projects</a>
				<a href="/">Resume</a>
				<a href="/">Contact</a>
			</nav>

			<div className="header-body">
				<h1 className="name-heading">Aryan Sharma</h1>
				<p className="intro-para"></p>
				<img src="" alt="" className="back-img" />
				<button className="contact-btn">Contact Me</button>
			</div>
		</div>
	);
}

export default NavHeader;
