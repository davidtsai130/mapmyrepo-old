import React, { PureComponent } from 'react';
import User from './containers/User'
import Repos from './containers/Repos'

class App extends PureComponent {

	render() {
		return (
			<div>
				<User />
				<Repos />
			</div>
		)
	}
}

export default App
