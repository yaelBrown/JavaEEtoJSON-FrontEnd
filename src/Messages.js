import React, { Component } from 'react'
import axios from 'axios';

export default class messages extends Component {
  
  state = {
    persons: []
  };
    
  componentDidMount() {
    axios.get(`http://localhost:8080/messages`, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }})
      .then(res => {
        this.setState({
          persons: res.data
        });
        console.log(this.state.persons);
      });
  }
    
  render() {
    return (
      <div>
        <ul>
          { this.state.persons.map(person => <li>{person.name}</li>) }
        </ul>
      </div>
    )
  }
}
