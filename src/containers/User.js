import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Button } from 'react-toolbox/lib/button';

import { retrieveUserAndRepos } from '../thunks'

class User extends PureComponent {

	render() {
		return(
			<Button icon='bookmark' label='Bookmark' accent onClick={this.props.retrieveUserAndRepos}/>
		)
	}
}

User.propTypes = {
	user: PropTypes.object,
	retrieveUserAndRepos: PropTypes.func,
}

export default connect(
	state => {
		return {
			user: state.user
		}
	},
	{ retrieveUserAndRepos }
)(User)
