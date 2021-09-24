import React from "react";
import GitCard from "./GitCard";
import {
	projectHeading,

} from "../../editable-stuff/configurations.json";
import Particles from 'react-particles-js';
import '../../common.scss';

const Project = () => {
	const projectsArray = [{
		"id": 404350505,
		"name": "Trend Analysis",
		"description": "Developed and implemented the tool with Team, that analyzes the past trends, of some issue(key), to provide analytical insights and future predictions. Involved large scale data collection and preparation, followed by Document Clustering and further analysis.",
		//"languages_url": "https://api.github.com/repos/vishali0/Digital-Portfolio/languages",
		"stargazers_url": "https://api.github.com/repos/vishali0/Digital-Portfolio/stargazers",
		"created_at": "2021-09-08T13:05:27Z",
		"updated_at": "2019-11-08T13:27:30Z",
		"pushed_at": "2019-11-08T13:27:30Z",
		"git_url": "git://github.com/vishali0/Digital-Portfolio.git",
		"stargazers_count": 60
	}, {
		"id": 404350545,
		"name": "Failure Analysis:",
		"description": "Analyzing test patterns of various lots of semiconductor chips to identify the cause related to failure, and saving the costs of test by predicting the chips that might fail, using ML techniques.",
		//"languages_url": "https://api.github.com/repos/vishali0/Digital-Portfolio/languages",
		"stargazers_url": "https://api.github.com/repos/vishali0/Digital-Portfolio/stargazers",
		"created_at": "2021-09-08T13:05:27Z",
		"updated_at": "2020-10-30T13:27:30Z",
		"pushed_at": "2020-10-30T13:27:30Z",
		"git_url": "git://github.com/vishali0/Digital-Portfolio.git",
		"stargazers_count": 999
	},
	{
		"id": 404350555,
		"name": "Anomaly Detection",
		"description": "Analyzing time series signals from semiconductor chips, to detect any anomaly, which might point out to possible wrong connections, or disconnections, or misc malfunctioning, in the chip.",
		//"languages_url": "https://api.github.com/repos/vishali0/Digital-Portfolio/languages",
		"stargazers_url": "https://api.github.com/repos/vishali0/Digital-Portfolio/stargazers",
		"created_at": "2021-09-08T13:05:27Z",
		"updated_at": "2020-10-30T13:27:30Z",
		"pushed_at": "2020-10-30T13:27:30Z",
		"git_url": "git://github.com/vishali0/Digital-Portfolio.git",
		"stargazers_count": 30
	}]

	return (
		<div id="projects" className="jumbotron jumbotron-fluid bg-transparent m-0 projectBg" style={{ background: "linear-gradient(169deg, black 69%, white 31%)", color: "white" }}>
			<Particles style={{ zIndex: 0, position: "absolute" }}
				height="180%"
				params={{
					"particles": {
						"number": {
							"value": 150,
							"density": {
								"enable": true
							}
						},
						"size": {
							"value": 3,
							"random": true,
							"anim": {
								"speed": 4,
								"size_min": 0.3
							}
						},
						"line_linked": {
							"enable": false
						},
						"move": {
							"random": true,
							"speed": 1,
							"direction": "bottom",
							"out_mode": "out"
						}
					},
					"interactivity": {
						"events": {
							"onhover": {
								"enable": true,
								"mode": "repulse"
							},
							"onclick": {
								"enable": true,
								"mode": "repulse"
							}
						},
						"modes": {
							"bubble": {
								"distance": 250,
								"duration": 2,
								"size": 0,
								"opacity": 0
							},
							"repulse": {
								"distance": 100,
								"duration": 1
							}
						}
					}
				}}
			/>
			{projectsArray.length && (
				<div className="m-2 p-3">
					<h1 className="display-4 mb-5 text-center">{projectHeading}</h1>
					<div className="row flex-row-reverse">
						<div className="col-md-5">
							{projectsArray.map((project) => (
								<GitCard key={project.id} id={project.id} value={project} />
							))}
						</div>
						<div className="col-md-7">
							<img className="myWorks-avatar-sizing" src={process.env.PUBLIC_URL + "developerActivity.svg"} alt="" />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Project;
