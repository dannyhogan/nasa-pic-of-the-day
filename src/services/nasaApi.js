export const getPicture = (date) => {

  return fetch(`https://apodapi.herokuapp.com/api/?date=${date}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw new Error(`Unable to fetch picure for ${date}`);
      return json
    });
};
