export const addUser = (user) => {
	return {
		type: 'GET_USER',
		user,
	}
}

export const addRepos = (repos) => {
	return {
		type: 'GET_REPOS',
		repos,
	}
}
