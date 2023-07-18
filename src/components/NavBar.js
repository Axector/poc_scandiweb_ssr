import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from "react-router-dom";
import { ABOUT_ROUTE, HOME_ROUTE } from "../utils/consts";

const NavBar = () => {
	const navigate = useNavigate()

	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<NavLink style={{color:'white', textDecoration:'none'}} to={ HOME_ROUTE }>Scandiweb POC</NavLink>
				<Nav>
					<Button
						variant={'outline-light'}
						onClick={() => navigate(HOME_ROUTE)}
					>
						Home
					</Button>
					<Button
						style={{marginLeft:'10px'}}
						variant={'outline-light'}
						onClick={() => navigate(ABOUT_ROUTE)}
					>
						About
					</Button>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;