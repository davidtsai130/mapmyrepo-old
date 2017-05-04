import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux'

import RepoButton from '../components/RepoButton'
import { retrieveContributors } from '../thunks'

class Repos extends PureComponent {

	get displayContributors() {
		return this.props.repos.map((repo) => {
			console.log(repo)
			return <RepoButton key={repo.id} name={repo.name} />
		})
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
