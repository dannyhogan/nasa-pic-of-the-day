import React from 'react';
import './Loading.css';
import { PulseLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="Loading">
      <PulseLoader color={"#FFFFFF"} />
    </div>
  )
};

export default Loading;
