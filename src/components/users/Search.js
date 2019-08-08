import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
	const { users, searchUsers, clearUsers } = useContext(GithubContext)
	const { setAlert } = useContext(AlertContext)

	const [text, setText] = useState('')

	const inputHandler = e => setText(e.target.value)

	const onSubmit = e => {
		e.preventDefault()
		if (!text) {
			setAlert('Please enter something', 'light')
		} else {
			searchUsers(text)
			setText('')
		}
	}

	return (
		<div>
			<form onSubmit={onSubmit} className="form">
				<input type="text" name="text" value={text} placeholder="Search Users..." onChange={inputHandler} />
				<button type="submit" className="btn btn-dark btn-block">Search</button>

				{users.length > 0 &&
					<button className="btn btn-light btn-block btn-clear" onClick={clearUsers}>Clear</button>
				}
			</form>
		</div>
	)
}

export default Search
