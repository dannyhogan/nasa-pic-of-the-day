export const getPicture = () => {
  return fetch('https://apodapi.herokuapp.com/api/?date=1997-02-21')
    .then(res => res.json())
};
