import React from "react";
import "../assets/scripts/skill-proj.css";

function SkillProject() {
	return (
		<div>
			<div className="wrapper">
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
					<div className="platform-skills">
						<ul className="plat-tech-skills">
							<li>Github</li>
							<li>Figma</li>
							<li>Postman</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="projects-div"></div>
		</div>
	);
}

export default SkillProject;
