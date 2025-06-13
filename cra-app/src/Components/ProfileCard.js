
import React, { Component } from 'react';
// import './App.css';

class ProfileCard extends Component {
  render() {
    const { image, name, email, phone, location, role, website } = this.props;

    return (
      <div className="card">
        <img src={image} alt={name} className="card-img" />
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Location: {location}</p>
        <p>Role: {role}</p>
        <p>Website: <a href={website} target="_blank" rel="noopener noreferrer">{website}</a></p>
      </div>
    );
  }
}

export default ProfileCard;





