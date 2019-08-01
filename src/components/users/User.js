import React, { useEffect, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const User = ({ getUser, getUserRepos, loading, repos, user, match }) => {

	useEffect(() => {
		getUser(match.params.login);
		getUserRepos(match.params.login);
		// eslint-disable-next-line
	}, []);

	if (loading) return <Spinner />;

	const {
		name,
		avatar_url,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		location,
		company,
		bio,
		hireable
	} = user;

	return (
		<Fragment>
			<Link to='/' className="btn btn-light">Back to Search</Link>
			Hirable:
				{hireable ? <i className="fas fa-check text-success" /> :
				<i className="fas fa-times-circle text-danger" />}

			<div className="card grid-2">
				<div className="all-center">
					<img src={avatar_url} className="round-img" alt="" style={{ width: '150px' }} />
					<h1>{name}</h1>
					{location && <p>Location: {location}</p>}
				</div>
				<div>
					{bio && (<Fragment>
						<h3>Bio</h3>
						<p>{bio}</p>
					</Fragment>)}
					<a href={html_url} className="btn btn-dark my-1">
						Visit Github Profile
						</a>
					<ul>
						<li>
							{login && <Fragment>
								<b>Username: </b> {login}
							</Fragment>}
						</li>
						<li>
							{company && <Fragment>
								<b>Company: </b> {company}
							</Fragment>}
						</li>
						<li>
							{blog && <Fragment>
								<b>Blog: </b> {blog}
							</Fragment>}
						</li>
					</ul>
				</div>
			</div>

			<div className="card text-center">
				<div className="badge badge-primary">Followers: {followers}</div>
				<div className="badge badge-success">Following: {following}</div>
				<div className="badge badge-light">Public Repos: {public_repos}</div>
				<div className="badge badge-dark">Public Gists: {public_gists}</div>
			</div>
			<Repos repos={repos} />
		</Fragment>
	)
}

User.propTypes = {
	loading: PropTypes.bool.isRequired,
	user: PropTypes.object.isRequired,
	getUser: PropTypes.func.isRequired,
	getUserRepos: PropTypes.func.isRequired,
	repos: PropTypes.array.isRequired
}

export default User
