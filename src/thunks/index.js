import { addUser, addRepos, addContributors } from '../actions'

export function retrieveUser(username) {
	return dispatch => {
		fetch(`https://api.github.com/users/${username}`).then((response) => {
			return response.json()
		}).then((userData) => {
			dispatch(addUser(userData))
		})
	}
}

export function retrieveRepos(username) {
	return dispatch => {
		fetch(`https://api.github.com/users/${username}/repos`).then((response) => {
			return response.json()
		}).then((repos) => {
			dispatch(addRepos(repos))
		})
	}
}

export function retrieveUserAndRepos(username) {
	return dispatch => {
		fetch(`https://api.github.com/users/${username}`).then((response) => {
			return response.json()
		}).then((userData) => {
			dispatch(addUser(userData))
			fetch(userData.repos_url).then((response) => {
				return response.json()
			}).then((repos) => {
				dispatch(addRepos(repos))
			})
		})
	}
}

export function retrieveContributors(username, repo) {
	return dispatch => {
		fetch(`https://api.github.com/repos/${username}/${repo}/contributors`).then((response) => {
			return response.json()
		}).then((repoData) => {
			dispatch(addContributors(repoData))
		})
	}
}
