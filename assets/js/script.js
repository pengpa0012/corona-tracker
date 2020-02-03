const select = document.querySelector('select')
const country = document.querySelector('.country')
const confirmed = document.querySelector('.confirmed')
const death = document.querySelector('.death')
const recovered = document.querySelector('.recovered')

select.addEventListener('change', () =>{
  fetch(`https://api.coronatracker.com/stats?country=${select.value}`)
    .then(function(response){
      return response.json()
    })
    .then(function(jsonResponse){
      confirmed.innerHTML = jsonResponse.num_confirm
      death.innerHTML = jsonResponse.num_dead
      recovered.innerHTML = jsonResponse.num_heal
    });
});
