import { addUsers, addRepos, addContributors, addLocations } from '../actions'

export function retrieveUser(username) {
	return dispatch => {
		fetch(`https://api.github.com/users/${username}`).then((response) => {
			return response.json()
		}).then((userData) => {
			dispatch(addUsers(userData))
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

export function retrieveContributors(username, repo) {
	return dispatch => {
		fetch(`https://api.github.com/repos/${username}/${repo}/contributors`).then((response) => {
			return response.json()
		}).then((repoData) => {
			dispatch(addContributors(repoData))
		})
	}
}

export function retrieveContributorLocation(username) {
	return dispatch => {
		fetch(`https://api.github.com/users/${username}`).then((response) => {
			return response.json()
		}).then((userData) => {
			dispatch(addUser(userData))
			fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${userData.location}`).then((response) => {
				return response.json()
			}).then((locationData) => {
				dispatch(addLocations(locationData))
			})
		})
	}
}
