import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '@fortawesome/fontawesome-free/svgs/brands/github.svg'

const Navbar = ({ title, icon }) => {
	return (
		<nav className="navbar bg-primary">
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Logo fill="white" width="24px" style={{ paddingRight: '5px' }} />
				<h1>{title}</h1>
			</div>
			<ul>
				<li>
					<Link to="/" > Home </Link>
				</li>
				<li>
					<Link to="/about" > About </Link>
				</li>
			</ul>
		</nav >
	)
}

Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github'
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
}

export default Navbar
