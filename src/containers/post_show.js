import React, { Component, PropTypes } from 'react';
import {FETCH_POST, fetchPost, deletePost} from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Post from '../components/post';
import { Link } from 'react-router'

class PostShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id)
  }

  static contextTypes = {
    router: PropTypes.object
  };

  handleDeleteClick(e) {
    e.preventDefault();
    this.props.deletePost(this.props.params.id)
    .then(() => {
      this.context.router.push('/');
    });
  }

  render() {
    let postComponent = <div> Loading...</div>;
    if (this.props.post) {
      postComponent = <Post postData={this.props.post} />;
    }

    return (
      <div>
        <div className="button-group text-right">
          <Link to="/" className="btn btn-default">
            Back to Index
          </Link>

          <button onClick={this.handleDeleteClick.bind(this)} className="btn btn-danger">
            Delete Post
          </button>
        </div>
        {postComponent}
      </div>
    )

  }
}

function mapStateToProps(state) {
  return {post: state.posts.post}
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
