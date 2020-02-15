import React from 'react';
import './PictureDisplay.css'
import Loading from '../Loading/Loading';

const PictureDisplay = ({ picture, loading, error }) => {

  if(error) return (
    <section className="PictureDisplay">
      <h1>{error.message}</h1>;
  </section>
  )

  if(loading) return (
    <section className="PictureDisplay">
      <Loading />
    </section>
  );

  return (
    <section className="PictureDisplay">
      <h2 className="pictureTitle">{picture.title}</h2>
      <figure className="picture">

        <figcaption className="pictureDate">
          {new Date(picture.date).toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </figcaption>

        <a href={picture.url} rel="noopener noreferrer" target="_blank">
          {picture.url.includes('youtube') ?
            <iframe src={picture.url} title={picture.title} /> :
            <img src={picture.url} alt="NASA Pic of The Day" />
          }
        </a>

      </figure>

      <p className="pictureDescription">{picture.description}</p>
    </section >
  )
};

export default PictureDisplay;
