import React from "react";
import "../assets/scripts/nav-header.css";

function NavHeader() {
	return (
		<div>
			<div className="header-body">
				<nav className="nav">
					<a href="/">Home</a>
					<a href="/">About</a>
					<a href="/">Projects</a>
					<a href="/">Resume</a>
					<a href="/">Contact</a>
				</nav>

				<img
					src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="laptop and monitor"
					className="back-img"
					width={600}
				/>
				<div className="info">
					<h1 className="name-heading">Hi, I'm Aryan</h1>
					<p className="intro-para">
						I'm a Front-End Developer with a Passion for Design, Development and Crafting Engaging Web Experiences.
					</p>
					<button className="contact-btn">Get in Touch</button>
				</div>
			</div>
		</div>
	);
}

export default NavHeader;
