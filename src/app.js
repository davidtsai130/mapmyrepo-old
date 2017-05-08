import React, { PureComponent } from 'react';
import User from './containers/User'
import Repos from './containers/Repos'
import Maps from './containers/Maps'

class App extends PureComponent {

	render() {
		return (
			<div>
				<User />
				<Repos />
				<Maps />
			</div>
		)
	}
}

export default App
