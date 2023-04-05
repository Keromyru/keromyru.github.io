import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const NavComponent: React.FC = () => {
	return(
		<>
		<StyledNavContainer className="nav-container">
			<h1>Aurora Dubnyk</h1>
			<p>Web App Developer</p>
			<Link to="/resume">Resume</Link>
			<Link to="/projects-page">Projects</Link>
			<Link to="/features">Feature Examples</Link>
		</StyledNavContainer>
		</>
	)
}

const StyledNavContainer = styled.div`
	background-color: ${({theme}) => theme.palette.lightgrey};
`

export default NavComponent;