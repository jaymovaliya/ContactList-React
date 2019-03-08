import React, { Component } from 'react';
import Contacts from './Components/contacts'
import './App.css';

class App extends Component {

  state = {
    contacts: []
  }

  handleChangeName = (e) => {
    this.setState({ name: e.target.value })
  }

  handleChangePhone = (e) => {
    this.setState({ phone: e.target.value })
  }

  addContact = (e) => {
    if(this.state.name == null || this.state.phone == null){
      alert("All fields are required")
    }
    else{
    let n = this.state.contacts.length
    let id = n+1
    let Obj = {
      id:id,
      Name: this.state.name,
      Phone: this.state.phone
    }
    this.state.contacts.push(Obj)
    let contact = this.state.contacts
    this.setState({contacts:contact})
  }
  }

  getDeleted = (id) => {
    this.setState({contacts: [...this.state.contacts.filter(todo=>
      todo.id !== id
    )]})
  }

  render() {
    return (
      <div className="App">
      <div className="title">
      <h1>Contacts List</h1>
      </div>
      <div className="addBox">
          <div className="inpuTags">
            <label><b>Name:</b></label>
            <input type="text" id="name" onChange={this.handleChangeName.bind(this)} placeholder="Name"></input>
            <label><b>Contact Number:</b></label>
            <input type="text" id="phone" onChange={this.handleChangePhone.bind(this)} placeholder="Contact Number"></input>
          </div>
          <button type="submit" onClick= {this.addContact}>Add to Contacts</button>
      </div>
        <Contacts contacts={this.state.contacts}  getDeleted = {this.getDeleted}/>
      </div>
    );
  }
}

export default App;
