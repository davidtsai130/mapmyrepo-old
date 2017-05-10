import { addUsers, addRepos, addContributors, addLocations } from '../actions'

export function retrieveRepos(username) {
	return dispatch => {
		fetch(`https://api.github.com/users/${username}/repos?client_id=88ccaed1c6e6ca729ca7&client_secret=6dff9dd7f8d8aae3ac1ce55e4af80b1496072222
`).then((response) => {
			return response.json()
		}).then((repos) => {
			dispatch(addRepos(repos))
		})
	}
}

export function retrieveContributors(username, repo) {
	return dispatch => {
		fetch(`https://api.github.com/repos/${username}/${repo}/contributors?client_id=88ccaed1c6e6ca729ca7&client_secret=6dff9dd7f8d8aae3ac1ce55e4af80b1496072222
`).then((response) => {
			return response.json()
		}).then((repoData) => {
			dispatch(addContributors(repoData))
			repoData.forEach((contributor) => {
				dispatch(retrieveUser(contributor.login))
			})
		})
	}
}

export function retrieveUser(username) {
	return dispatch => {
		fetch(`https://api.github.com/users/${username}?client_id=88ccaed1c6e6ca729ca7&client_secret=6dff9dd7f8d8aae3ac1ce55e4af80b1496072222
`).then((response) => {
			return response.json()
		}).then((userData) => {
			dispatch(addUsers(userData))
			if (userData.location) {
				dispatch(retrieveContributorLocation(userData.location))
			}
		})
	}
}

export function retrieveContributorLocation(location) {
	return dispatch => {
		fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}`).then((response) => {
			return response.json()
		}).then((locationData) => {
			dispatch(addLocations(locationData.results[0]))
		})
	}
}
