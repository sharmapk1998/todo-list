import React, { Component } from 'react';
import "./App.css"; 

class App extends Component {
  constructor() {
    super();
    this.state = {page_no: 1,users:[]};
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    fetch(`https://reqres.in/api/users?page=${this.state.page_no}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            users: result.data
          });
        },
      )
  }
 
  handleClick(e){
  
      this.setState({page_no:e.target.getAttribute("id")})
      
      fetch(`https://reqres.in/api/users?page=${this.state.page_no}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            users: result.data
          });
        },
      )
  
    
  }
 

  render() {
    return (
      <div className="div1">
      <div className="div">
        
      <div >
      {this.state.users.map((user) => (
          <div>
          <div><img src = {user.avatar}/></div>
          <div> {user.first_name} {user.last_name} </div>
          <div>{user.email} </div>
          </div>
      ))}
      </div>
	    <ul>
		
      <li><a href = "#" id="1" onClick={this.handleClick}>1</a></li>
      <li><a href = "#" id="2" onClick={this.handleClick}>2</a></li>
    
      
    </ul>
      </div>
      </div>
    );
  }
}

export default App;