import { combineReducers } from 'redux'

import input from './input'
import user from './user'
import repos from './repos'

export default combineReducers({
	input,
	user,
	repos,
})
