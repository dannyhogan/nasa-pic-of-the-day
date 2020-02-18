import React, { useState, useEffect } from 'react';
import './PicOfTheDay.css';
import DateSearch from '../../components/DateSearch/DateSearch';
import PictureDisplay from '../../components/PictureDisplay/PictureDisplay'
import { getPicture } from '../../services/nasaApi';

const PicOfTheDay = () => {

  const [picture, setPicture] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    setLoading(true)
    setError(null)
    getPicture(date)
      .then(picture => {
        setPicture(picture);
        setLoading(false);
      })
      .catch(err => {
        setError(err)
      });

  }, [date])

  return (
    <section className="PicOfTheDay">
      <DateSearch date={date} setDate={setDate} />
      <PictureDisplay picture={picture} loading={loading} error={error} />
    </section>
  )
};

export default PicOfTheDay;
