import React from 'react';
import './App.css';

import Messages from './Messages';


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <form>
        <div className="form-left">
          <label htmlFor="author">Author</label>
          <br></br>
          <label htmlFor="message">Message</label>
        </div>
        <div className="form-right">
          <input type="text" name="author" id="author"/>
          <br></br>
          <input type="text" name="message" id="message"/>
        </div>
        <button type="submit">Submit</button>
      </form>
      <hr></hr>
      <Messages/>
    </div>
  );
}

export default App;
