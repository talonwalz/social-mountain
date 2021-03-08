import React, { Component } from 'react';

import './App.css';
import axios from 'axios'
import Header from './Header/Header';
import Compose from './Compose/Compose';
import Post from './Post/Post'

// Base URL: https://practiceapi.devmountain.com/api/posts

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/api/posts').then( res => {
      this.setState({ posts: res.data });
    });
  }

  updatePost(id, text) {
    axios.put(`https://practiceapi.devmountain.com/api/posts?id=${id}`,{text})
    .then(res => {
      // console.log(res)
      this.setState({posts: res.data})
    })
    .catch(err => console.log(err))
  }

  deletePost(id) {
    axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${id}`)
    .then(res => {
      this.setState({posts: res.data})
    })
    .catch(err => console.log(err))
  }

  createPost(text) {
    axios.post(`https://practiceapi.devmountain.com/api/posts`, {text})
    .then(res => {
      this.setState({posts: res.data})
    })
    .catch(err => console.log(err))
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        
        <Header posts={this.state.posts}/>
        

        <section className="App__content">

          <Compose createPostFn={this.createPost}/>
          {
            posts.map( post => (
              <Post key={ post.id }
                    id={ post.id }
                    text={ post.text}
                    date={ post.date }
                    updatePostFn={ this.updatePost }
                    deletePostFn={ this.deletePost } />
            ))
          }
        </section>
      </div>
    );
  }
}

export default App;
