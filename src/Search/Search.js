import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.handleSearchChange(e.target.value);
  }

  render() {
    return (
      <form className="Search" onSubmit={this.handleSubmit}>
        <label>
          <span>Search:</span>
          <input value={this.state.value} onChange={(e) => this.handleChange(e)} placeholder="Type a name to find them in the list below" />
        </label>
      </form>
    );
  }
}

export default Search;

