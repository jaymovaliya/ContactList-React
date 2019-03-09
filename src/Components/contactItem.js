import React, { Component } from 'react'
import './contactItem.css'
export default class contactItem extends Component {
    getStyle = () => {
        return {
            textAlign:'center',
            backgroundColor: '#f1f1f1',
            boxShadow: '0 4px 8px 4px rgba(0,0,0,0.2)',
            borderRadius: '5px',
            width: '250px',
            height: '200px',
            display: 'inline-block',
            margin: '20px',
        }
    }
    render() {
        const {id, Name, Phone} = this.props.contact
        return (
            <div style={this.getStyle()} className = "contact">
                <button style={crossRed} onClick={this.props.getDeleted.bind(this, id)}>X</button>
                <img width="100px" height="100px" src= {require('./contact.png')}></img>
                <h2 style={showStatus}>{Name}</h2>
                <h4 style={showStatus}>{Phone}</h4>
            </div>
        )
    }
}
const showStatus = {
    textAlign: 'center',
    fontWeight: 'bold'
    //boxShadow: '0 4px 8px 4px rgba(0,0,0,0.2)'
}

const crossRed = {
    backgroundColor: '#f1f1f1',
    color:'black',
    fontSize: '15px',
    border: 'none',
    cursor: 'pointer',
    padding: '5px',
    borderRadius: '50%',
    float: 'right'
}