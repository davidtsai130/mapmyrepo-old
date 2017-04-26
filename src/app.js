import React, { PureComponent } from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Avatar } from 'react-toolbox/lib/avatar';
import { Input } from 'react-toolbox/lib/input';

class App extends PureComponent {

	retrieveInfo() {
		fetch('https://api.github.com/users/davidtsai130').then(function(response) {
			return response.json()
		}).then(function(resp) {
			console.log(resp)
		})
	}

	render() {
		return (
			<div>
				<Avatar title="Javier" image="https://placeimg.com/80/80/animals"/>
				<Input type='text' hint='With Hint, no label' name='name' />
				<Button icon='bookmark' label='Bookmark' accent onClick={this.retrieveInfo}/>
			</div>
		)
	}
}

export default App
