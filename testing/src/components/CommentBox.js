import React, { Component } from 'react';
import { connect } from 'react-redux';
import {saveComment, fetchComments} from 'actions';

class CommentBox extends Component {
  state = {comment: ''};

  handleChange = (e) => {
    this.setState({comment: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // TODO - Call an action creator
    // And save the comment
    this.props.saveComment(this.state.comment)

    this.setState({comment:''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className='test-fetch-comments' onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>

    );
  }

}

export default connect(
  null,
  {saveComment, fetchComments}
)(CommentBox);
