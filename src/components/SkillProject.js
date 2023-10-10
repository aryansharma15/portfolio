import React from "react";
import "../assets/scripts/skill-proj.css";
import { wordpress } from "fontawesome";

function SkillProject() {
	return (
		<div>
			<div className="wrapper1">
				<div>
					<h4>Technological Skills</h4>
					<p>Skills I use to create websites</p>
				</div>
				<div className="skills-div">
					<ul className="lang-tech-skills">
						<a href="https://react.dev/">
							<li>React</li>
						</a>
						<li>Node.js</li>
						<li>Express</li>
						<li>Next.js</li>
						<li>MongoDB Atlas</li>
						<li>Javascript</li>
						<li>Tailwind CSS</li>
						<li>HTML5</li>
						<li>CSS3</li>
						<li></li>
					</ul>
				</div>
			</div>
			<div className="wrapper2">
				<div>
					<h4>Platforms & Softwares</h4>
					<p></p>
				</div>
				<div className="platform-div">
					<ul className="plat-tech-skills">
						<li>Github</li>
						<li>Figma</li>
						<li>Postman</li>
						<li>a</li>
						<li>b</li>
						<li>c</li>
					</ul>
				</div>
			</div>

			<div className="projects-div">
				<div>
					<h2>Proj 1</h2>
					<h3>Tech Used</h3>
					<p>Description</p>
				</div>
				<div>
					<h2>Proj 2</h2>
					<h3>Tech Used</h3>
					<p>Description</p>
				</div>
				<div>
					<h2>Proj 3</h2>
					<h3>Tech Used</h3>
					<p>Description</p>
				</div>
				<div>
					<h2>Proj 3</h2>
					<h3>Tech Used</h3>
					<p>Description</p>
				</div>
			</div>
		</div>
	);
}

export default SkillProject;
