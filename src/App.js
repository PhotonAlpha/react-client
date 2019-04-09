import React, { Component } from 'react';
import './App.css';

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]

class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
    }
    

    handleClickOnTitle (world, e) {
        console.log(this, world )
        this.setState((prevState) => {
            console.log('prevState', prevState)
            return {count: 0};
        });
        this.setState((prevState) => {
            return {count: prevState.count + 1};
        });
        this.setState((prevState) => {
            return {count: prevState.count + 2};
        });
        console.log(this.get);
    }

    render() {
        const elements = users.map((user, inx) => {
            return (
                <div key={inx} >
                    <div>姓名：{user.username}</div>
                    <div>年龄：{user.age}</div>
                    <div>性别：{user.gender}</div>
                    <hr />
                </div>
            )
        })

        return (
            <div>{elements}</div>
        );
    }
}

export default App;
