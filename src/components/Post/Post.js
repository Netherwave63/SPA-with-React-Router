import React from "react";
import { connect } from "react-redux";

class Post extends React.Component {

  handleClick = (id) => {
    this.props.deletePost(id);
    this.props.history.push("/");
  }

  render() {
    const { post } = this.props;
    return (
      <section className="container">
        {
          post ? (
            <React.Fragment>
              <h4 className="center">{ post.title }</h4>
              <p>{ post.body }</p>
              <div className="center">
                <button 
                  className="btn grey" 
                  onClick={() => this.handleClick(post.id)}
                >
                  Delete Post
                </button>
              </div>
            </React.Fragment>
          ) : (
            <h4 className="center">Loading...</h4>
          )
        }
      </section>
    );
  }

};

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts.find(post => post.id === ownProps.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch({ type: "DELETE_POST", id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);