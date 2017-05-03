import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Button } from 'react-toolbox/lib/button';

import { retrieveUserInfo } from '../thunks'

class User extends PureComponent {

	render() {
		return(
			<Button icon='bookmark' label='Bookmark' accent onClick={this.props.retrieveUserInfo}/>
		)
	}
}

User.propTypes = {
	retrieveUserInfo: PropTypes.func,
}

export default connect(
	state => {
		return {
			user: state.user
		}
	},
	{ retrieveUserInfo }
)(User)
