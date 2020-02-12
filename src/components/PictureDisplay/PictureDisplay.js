import React from 'react';
import './PictureDisplay.css'

const PictureDisplay = ({ picture, loading }) => {

  return loading ?
    <h1>Loading</h1>
    :
    (
      <section className="PictureDisplay">
        <img src={picture.url} alt="NASA Pic of The Day" />
        <h1>{picture.title}</h1>
        <h2>{picture.date}</h2>
        <p>{picture.description}</p>
      </section>
    )
};

export default PictureDisplay;
