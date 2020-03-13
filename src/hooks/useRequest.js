import { useEffect, useState } from "react";
import { getPicture } from '../services/nasaApi';

export const useRequest = (date) => {
  const [picture, setPicture] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getPicture(date)
      .then(picture => {
        setPicture(picture);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
      });
  }, [date]);

  return { picture, loading, error }
};
