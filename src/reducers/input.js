const input = (state = '', action) => {
	console.log(action)
	switch (action.type) {
		case 'UPDATE_INPUT':
			return state = action.value
		default:
			return state
	}
}

export default input
