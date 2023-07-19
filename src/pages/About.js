import React from 'react';
import { Container } from "react-bootstrap";
import {useSelector} from "react-redux";

const About = () => {
	const text = useSelector(state => state.aboutText)

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
			<p>{ text }</p>
		</Container>
	);
};

export default About;
