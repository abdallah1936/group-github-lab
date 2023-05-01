import React from 'react';
import { Link } from 'react-router-dom';
import gitTogetherTeam from '../tempData';

const Card = ({ image, name, bio }) => (
  <Link to={`/profile/${name}`} className="homeCardLink">
    <div className="homeCard">
      <img className="homeCardImage" src={image} alt={name} />
      <div className="homeCardContent">
        <h2 className="homeCardName">{name}</h2>
        <p className="homeCardInfo">{bio}</p>
      </div>
    </div>
  </Link>
);



const Home = () => {
  return (
    <div className="homeContainer">
      {gitTogetherTeam.map((person, index) => (
        <Card key={index} {...person} />
      ))}
    </div>
  );
};

export default Home;
