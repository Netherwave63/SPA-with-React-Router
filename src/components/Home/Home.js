import React from "react";
import { Link } from "react-router-dom";
import Pokeball from "./pokeball.png";
import "./Home.css";
import { connect } from "react-redux";

const Home = ({ posts }) => {

  return (
    <section className="container">
      <h4 className="center">Home</h4>
      {posts.map(post => (
        <div className="post card" key={ post.id }>
          <img src={Pokeball} alt="a pokeball" />
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

};

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);