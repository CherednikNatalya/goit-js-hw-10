export { fetchCountries, populationFormat };

 function fetchCountries() {
    return fetch(
        `https://restcountries.com/v3.1/name/${name}`
      )
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        }).catch(err => console.log('Error!'));
}
fetchCountries()
console.log(fetchCountries);

// export { fetchCountries, populationFormat };

function populationFormat(numbers) {
  const numberNew = numbers.toString();
  return numberNew.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}