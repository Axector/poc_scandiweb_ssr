import React from 'react';
import { Container } from "react-bootstrap";

const About = () => {
	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{height: 500, flexDirection:'column'}}
		>
			<div
				className='d-flex justify-content-center'
				style={{height:100, fontSize:50}}
			>
				About
			</div>
			<p>About Text</p>
		</Container>
	);
};

export default About;
