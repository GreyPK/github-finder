import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext'

const Users = () => {
	const { users, loading } = useContext(GithubContext)

	const usersList = users.map(user => (
		<UserItem
			key={user.id} user={user} />
	))

	return (
		loading ? <Spinner /> : (
			<div className="grid-3">
				{usersList}
			</div >
		)
	)
}

export default Users
