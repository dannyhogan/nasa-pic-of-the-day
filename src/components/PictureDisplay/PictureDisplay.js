import React from 'react';
import './PictureDisplay.css'

const PictureDisplay = () => {

  const POTD = {
    apod_site: 'https://apod.nasa.gov/apod/ap970221.html',
    copyright: 'STS-82 Crew, NASA',
    date: '1997-02-21',
    description: `The Hubble Space Telescope's second servicing mission has been completed.Every few years, the telescope is visited by a Space Shuttle to allow astronauts to switch old instruments for new.This time, the Goddard High Resolution Spectrograph and Faint Object Spectrograph were replaced by the Near Infrared Camera and Multi- Object Spectrometer and the Space Telescope Imaging Spectrograph.These new instruments will act like eyes sharing the 2.4 - meter telescope mirror with the remaining instruments: the Wide Field Planetary Camera 2 and the Faint Object Camera.The Hubble Space Telescope can take clearer pictures than ground based telescopes because its images are not blurred by the Earth's atmosphere. Pictured in the final phases of a space walk from the second servicing mission, astronauts Mark Lee (right) and Steven Smith work on HST while perched on the Shuttle's remote manipulator arm.`,
    hdurl: 'https://apod.nasa.gov/apod/image/9702/hst2nd_sts82_big.jpg',
    media_type: 'image',
    title: 'New Eyes for the Hubble Space Telescope\nCredit:',
    url: 'https://apod.nasa.gov/apod/image/9702/hst2nd_sts82.jpg'
  }


  return (
    <section className="PictureDisplay">
      <img src={POTD.url} alt="NASA Pic of The Day" />
      <h1>{POTD.title}</h1>
      <h2>{POTD.date}</h2>
      <p>{POTD.description}</p>
    </section>
  )
};

export default PictureDisplay;
