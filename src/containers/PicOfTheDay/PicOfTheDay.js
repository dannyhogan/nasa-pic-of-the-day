import React, { useState, useEffect } from "react";
import "./PicOfTheDay.css";
import DateSearch from "../../components/DateSearch/DateSearch";
import PictureDisplay from "../../components/PictureDisplay/PictureDisplay";
import { useRequest } from "../../hooks/useRequest";
import moment from "moment";

const PicOfTheDay = () => {
  const currentDate = moment().format("YYYY-MM-DD");

  const [date, setDate] = useState(currentDate);
  const { picture, loading, error } = useRequest(date);

  return (
    <section className="PicOfTheDay">
      <DateSearch date={date} setDate={setDate} />
      <PictureDisplay picture={picture} loading={loading} error={error} />
    </section>
  );
};

export default PicOfTheDay;
