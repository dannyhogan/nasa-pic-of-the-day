import React from 'react';
import './Loading.css';
import { PulseLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="Loading">
      <PulseLoader />
    </div>
  )
};

export default Loading;
