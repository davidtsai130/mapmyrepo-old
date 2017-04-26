const users = (state = [], action) => {
	switch (action.type) {
		case 'NEW_USER':
			return state.concat([ action.text ])
		default:
			return state
	}
}

export default users
