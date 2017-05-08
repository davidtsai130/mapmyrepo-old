const input = (state = [], action) => {
	switch (action.type) {
		case 'GET_LOCATIONS':
			return state = state.concat(action.locations)
		default:
			return state
	}
}

export default input
