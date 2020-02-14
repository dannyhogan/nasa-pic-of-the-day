import React from 'react';
import './DateSearch.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '@material-ui/core';


const DateSearch = ({ date, setDate }) => {


  const getRandomPicture = () => {
    const currentYear = new Date().getFullYear() - 1;
    const randomMonth = Math.ceil(Math.random() * 12)
    const randomDay = Math.ceil(Math.random() * 31)
    const randomYear = currentYear - Math.floor(Math.random() * (currentYear - 1995))
    const randomDate = new Date(`${randomMonth}-${randomDay}-${randomYear}`);

    setDate(randomDate);
  }

  return (
    <div className="DateSearch">
      <h2 className="searchHeader">Pick a date between now and July 16th, 1995.</h2>
      <div className="search">
        <DatePicker
          selected={date}
          onChange={setDate}
        />
        <h3> - OR - </h3>
        <Button onClick={getRandomPicture}>Get a random picture!</Button>
      </div>
    </div>
  )
};

export default DateSearch;
