import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
import PostSnippet from '../components/post_snippet';

class PostsIndex extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts(posts){
    return posts.map((post) => {
      return <PostSnippet post={post} key={post.id} />
    });
  }

  render() {
    return (
      <div>
        <div className="text-right">
          <Link to="/post/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts:</h3>
        <div className ="list-group">
          {this.renderPosts(this.props.posts)}
        </div>
      </div>
    );
  }
}


function mapStateToProps({ posts }) {
  return {posts: posts.all}
}

/* { fetchPosts: fetchPosts } is a sugar syntax to remove the boilerplate to mapDispatchToProps:
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}
*/
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
