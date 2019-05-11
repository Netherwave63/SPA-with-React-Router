import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pokeball from "./pokeball.png";
import "./Home.css";

class Home extends React.Component {
  
  state = {
    posts: []
  }

  componentDidMount() {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.setState({ posts: response.data.slice(0, 10) }); 
      }); // { id, title, body }
  }

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <h4 className="center">Home</h4>
        {posts.map(post => (
          <div className="post card" key={ post.id }>
            <img src={Pokeball} alt="Pokeball image" />
            <div className="card-content">
              <Link to={`/${post.id}`}>
                <p className="card-title">{ post.title }</p>
              </Link>
              <p>{ post.body }</p>
            </div>
          </div>
        ))}
      </section>
    );
  }

};

export default Home;