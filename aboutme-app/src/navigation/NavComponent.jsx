import React from "react";
import { Link } from "react-router-dom";

export default function NavComponent() {
	return(
		<>
      <h1>Aurora Dubnyk</h1>
			<p>Web App Developer</p>
			<Link to="/resume">Resume</Link>
		</>
	)
}