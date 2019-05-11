import React from "react";
import axios from "axios";

class Post extends React.Component {

  state = {
    post: null
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    axios(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
      .then(response => this.setState({ post: response.data }));
  }

  render() {
    const { post } = this.state;
    return (
      <section className="container">
        {
          post ? (
            <React.Fragment>
              <h4 className="center">{ post.title }</h4>
              <p>{ post.body }</p>
            </React.Fragment>
          ) : (
            <h4 className="center">Loading...</h4>
          )
        }
      </section>
    );
  }

};

export default Post;