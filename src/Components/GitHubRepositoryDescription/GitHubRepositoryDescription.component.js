import React from 'react';
import { connect } from 'react-redux';
import GitHubSearchDescriptionContainer from './GitHubRepositoryDescription.container';

class GitHubSearch extends React.Component {
	render() {
		const { description } = this.props;
		return (
			<GitHubSearchDescriptionContainer
				description={description}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		description:
			state.GitHubDescriptionStore.repositories.description,
	};
};

const mapDispatchToProps = () => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GitHubSearch);
