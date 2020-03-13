import React, { useState, useEffect } from "react";
import "./PicOfTheDay.css";
import DateSearch from "../../components/DateSearch/DateSearch";
import PictureDisplay from "../../components/PictureDisplay/PictureDisplay";
import { useRequest } from "../../hooks/useRequest";

const PicOfTheDay = () => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const { picture, loading, error } = useRequest(date);

  return (
    <section className="PicOfTheDay">
      <DateSearch date={date} setDate={setDate} />
      <PictureDisplay picture={picture} loading={loading} error={error} />
    </section>
  );
};

export default PicOfTheDay;
