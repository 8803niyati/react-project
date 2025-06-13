import React, { Component } from 'react';
import ProfileCard from './Components/ProfileCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ProfileCard
            image="https://randomuser.me/api/portraits/women/12.jpg"
            name="Niyati Patel"
            email="niyati@example.com"
            phone="123-456-7890"
            location="Mumbai, India"
            role="Frontend Developer"
            website="https://niyati.dev"
          />
          <ProfileCard
            image="https://randomuser.me/api/portraits/men/21.jpg"
            name="Raj Mehta"
            email="raj@example.com"
            phone="234-567-8901"
            location="Ahmedabad, India"
            role="Backend Developer"
            website="https://raj.dev"
          />
          <ProfileCard
            image="https://randomuser.me/api/portraits/women/30.jpg"
            name="Sara Khan"
            email="sara@example.com"
            phone="345-678-9012"
            location="Delhi, India"
            role="UI/UX Designer"
            website="https://sara.design"
          />
        </div>

        <div className="row">
          <ProfileCard
            image="https://randomuser.me/api/portraits/men/34.jpg"
            name="Amit Shah"
            email="amit@example.com"
            phone="456-789-0123"
            location="Pune, India"
            role="Fullstack Developer"
            website="https://amit.dev"
          />
          <ProfileCard
            image="https://randomuser.me/api/portraits/women/65.jpg"
            name="Riya Sen"
            email="riya@example.com"
            phone="567-890-1234"
            location="Surat, India"
            role="React Developer"
            website="https://riya.codes"
          />
          <ProfileCard
            image="https://randomuser.me/api/portraits/men/47.jpg"
            name="Vikas Joshi"
            email="vikas@example.com"
            phone="678-901-2345"
            location="Jaipur, India"
            role="QA Engineer"
            website="https://vikasqa.dev"
          />
        </div>
      </div>
    );
  }
}

export default App;
