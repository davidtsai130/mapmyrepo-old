import React, { PureComponent, PropTypes } from 'react';
import { Button } from 'react-toolbox/lib/button';

class RepoButton extends PureComponent {
	render() {
		return (
			<div>
				<Button key={this.props.id} label={this.props.name} accent/>
			</div>
		)
	}
}

RepoButton.propTypes = {
	name: PropTypes.string,
}

export default RepoButton
