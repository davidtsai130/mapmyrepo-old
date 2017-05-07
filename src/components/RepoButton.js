import React, { PureComponent, PropTypes } from 'react';
import { Button } from 'react-toolbox/lib/button';

class RepoButton extends PureComponent {
	render() {
		return (
			<div>
				<Button
					key={this.props.id}
					label={this.props.repoName}
					onClick={() => this.props.action(this.props.userName, this.props.repoName)}
					accent
				/>
			</div>
		)
	}
}

RepoButton.propTypes = {
	id: PropTypes.number,
	repoName: PropTypes.string,
	userName: PropTypes.string,
	action: PropTypes.func,
}

export default RepoButton
