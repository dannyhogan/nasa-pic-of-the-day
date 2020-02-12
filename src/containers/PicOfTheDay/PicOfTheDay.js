import React, { useState, useEffect } from 'react';
import './PicOfTheDay.css';
import DateSearch from '../../components/DateSearch/DateSearch';
import PictureDisplay from '../../components/PictureDisplay/PictureDisplay'
import { getPicture } from '../../services/nasaApi';

const PicOfTheDay = () => {

  const [picture, setPicture] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getPicture()
      .then(picture => {
        setPicture(picture);
        setLoading(false);
      })
  }, [])

  return (
    <section className="PicOfTheDay">
      <DateSearch />
      <PictureDisplay picture={picture} loading={loading} />
    </section>
  )
};

export default PicOfTheDay;
