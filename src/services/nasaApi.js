export const getPicture = (date) => {

  const dateString = date.toISOString().split('T')[0];

  return fetch(`https://apodapi.herokuapp.com/api/?date=${dateString}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw new Error(`Unable to fetch picure for ${dateString}`);
      return json
    });
};
