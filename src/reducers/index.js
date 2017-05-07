import { combineReducers } from 'redux'

import input from './input'
import user from './user'
import repos from './repos'
import contributors from './contributors'

export default combineReducers({
	input,
	user,
	repos,
	contributors,
})
