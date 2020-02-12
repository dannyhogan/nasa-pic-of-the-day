import React from 'react';
import './PicOfTheDay.css';
import DateSearch from '../../components/DateSearch/DateSearch';
import PictureDisplay from '../../components/PictureDisplay/PictureDisplay'

const PicOfTheDay = () => {
  return (
    <section className="PicOfTheDay">
      <DateSearch />
      <PictureDisplay />
    </section>
  )
};

export default PicOfTheDay;
