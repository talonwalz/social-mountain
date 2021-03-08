import React, { Component } from 'react';
import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      input: ``
    }
    this.inputValue = this.inputValue.bind(this)
  }

  inputValue(event) {
    this.setState({input: event.target.event})
  }
    
  render() {
    const filteredPosts = this.props.posts.filter(post => {
      return post.text.toLowerCase().includes(this.state.input.toLowerCase())
    })
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input value={this.state.input} onChange={this.inputValue} placeholder="Search Your Feed" />
          <SearchIcon id="Search__icon" />
        </div>
        
      </section>
    )
  }
}