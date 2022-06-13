import React from 'react';
import './Card.scss';

const Card = (props) => {
  const { children } = props;
  return (
    <div className="container-fluid">
      <div className="header-accent teal" />
      <div className="card-wrap">
        <div className="card">
          <div className="card-detail teal accent-1" />
          { children } 
        </div>
      </div>
    </div>
  );
}

export default Card;