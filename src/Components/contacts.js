import React, { Component } from 'react';
import ContactItem from './contactItem'
class contacts extends Component {
    render() {
        return this.props.contacts.map((contacts) => (
            <ContactItem contact={contacts}  getDeleted={this.props.getDeleted} />
        ));
    }
}

export default contacts;