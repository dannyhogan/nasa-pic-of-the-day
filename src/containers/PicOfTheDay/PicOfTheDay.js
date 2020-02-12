import React, { useState, useEffect } from 'react';
import './PicOfTheDay.css';
import DateSearch from '../../components/DateSearch/DateSearch';
import PictureDisplay from '../../components/PictureDisplay/PictureDisplay'
import { getPicture } from '../../services/nasaApi';

const PicOfTheDay = () => {

  const [picture, setPicture] = useState({});
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(new Date());


  useEffect(() => {
    setLoading(true)
    getPicture(date)
      .then(picture => {
        setPicture(picture);
        setLoading(false);
      })
  }, [date])

  return (
    <section className="PicOfTheDay">
      <DateSearch date={date} setDate={setDate} />
      <PictureDisplay picture={picture} loading={loading} date={date} />
    </section>
  )
};

export default PicOfTheDay;
