import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions'; //it means import everything in actions/index.js
//what to test
// 1. Shows a text area and a button
// 2. Users can enter input into the text area and submit it
// 3. When the input is submitted, textarea should get emptied

class CommentBox extends Component {
	state = { comment: '' };
	handleChange = (event) => {
		this.setState({ comment: event.target.value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.saveComment(this.state.comment);
		this.setState({ comment: '' });
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h4>Add a Comment</h4>
					<textarea value={this.state.comment} onChange={this.handleChange} />
					<div>
						<button>Submit Comment</button>
					</div>
				</form>
				<button className="fetch-comments" onClick={this.props.fetchComments}>
					Fetch Comments
				</button>
			</div>
		);
	}
}

export default connect(null, actions)(CommentBox);
