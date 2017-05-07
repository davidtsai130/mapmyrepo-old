import { addUser, addRepos, addContributors } from '../actions'

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

export function retrieveContributors(userName, repoName) {
	return dispatch => {
		fetch(`https://api.github.com/repos/${userName}/${repoName}/contributors`).then((response) => {
			return response.json()
		}).then((repoData) => {
			dispatch(addContributors(repoData))
		})
	}
}
