import React, { Component } from 'react';
import './App.css';
import CommentApp from './components/comment/CommentApp'

class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
    }

    render() {
        return (
            <div>
                <CommentApp/>
            </div>
        );
    }
}

export default App;
