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
    console.log('random date generated', date);
    setDate(randomDate);
  }

  return (
    <section className="DateSearch">
      <div className="searchContainer">
        <h2 className="searchHeader">Pick a date between now and July 16th, 1995.</h2>
        <div className="search">
          <DatePicker
            className="datePicker"
            selected={date}
            onChange={setDate}
          />
          <h3 className="searchH3"> - OR - </h3>
          <Button type="button" id="searchButton" onClick={getRandomPicture}>Random picture!</Button>

        </div>
      </div>
    </section>
  )
};

export default DateSearch;
