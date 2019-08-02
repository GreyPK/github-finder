import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
	const githubContext = useContext(GithubContext);
	const { users, loading } = githubContext;

	const usersList = users.map(user => (
		<UserItem
			key={user.id} user={user} />
	));

	return (
		loading ? <Spinner /> : (
			<div style={userStyle}>
				{usersList}
			</div >
		)
	)
}

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
};

export default Users
