import React, { PureComponent } from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Chip } from 'react-toolbox/lib/chip';

class App extends PureComponent {
	render() {
		return (
			<div>
				<Chip>Example chip</Chip>
				<Button label="Hello World!" />
			</div>
		)
	}
}

export default App
