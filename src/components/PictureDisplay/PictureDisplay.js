import React from 'react';
import './PictureDisplay.css'
import Loading from '../Loading/Loading';

const PictureDisplay = ({ picture, loading }) => {

  return (
    <section className="PictureDisplay">
      {
        loading ? <Loading />
          : (
            <>
              <h2 className="pictureTitle">{picture.title}</h2>
              <figure className="picture">
                <img src={picture.url} alt="NASA Pic of The Day" />
                <figcaption className="pictureDate  ">NASA Picture of The Day: {picture.date}</figcaption>
              </figure>
              <p className="pictureDescription">{picture.description}</p>
            </>
          )
      }
    </section >
  )
};

export default PictureDisplay;
