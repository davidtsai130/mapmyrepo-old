import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux'

import { retrieveContributors } from '../thunks'

class Repos extends PureComponent {

	get displayContributors() {
		const repos = []
		this.props.repos.forEach((repo, i) => {
			repos.push(<div> {repo.name} </div>)
		})
		return repos
	}

	render() {
		return(
			<div>
				{this.displayContributors}
			</div>
		)
	}

}

Repos.propTypes = {
	repos: PropTypes.array,
	retrievereposAndRepos: PropTypes.func,
}

export default connect(
	state => {
		return {
			repos: state.repos
		}
	},
	{ retrieveContributors }
)(Repos)
