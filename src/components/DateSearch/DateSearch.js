import React from 'react';
import './DateSearch.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const DateSearch = ({ date, setDate }) => {

  return (
    <div className="DateSearch">
      <h2>
        Pick a date!
      </h2>
      <h4>Pictures every day by NASA since July 16th, 1995.</h4>
      <DatePicker
        selected={date}
        onChange={setDate}
      />
    </div>
  )
};

export default DateSearch;
