import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ setAlert, searchUsers, showClear, clearUsers }) => {
	const [text, setText] = useState('');

	const inputHandler = e => setText(e.target.value);

	const onSubmit = e => {
		e.preventDefault();
		if (!text) {
			setAlert('Please enter something', 'light');
		} else {
			searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit} className="form">
				<input type="text" name="text" value={text} placeholder="Search Users..." onChange={inputHandler} />
				<button type="submit" className="btn btn-dark btn-block">Search</button>

				{showClear &&
					<button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
				}
			</form>
		</div>
	)
}

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired
}

export default Search
