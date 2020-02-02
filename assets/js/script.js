const select = document.querySelector('select');
const country = document.querySelector('.country');
const confirmed = document.querySelector('.confirmed');
const death = document.querySelector('.death');
const recovered = document.querySelector('.recovered');

select.addEventListener('click', () =>{

    fetch(`https://api.coronatracker.com/stats?country=${select.value}`)
            .then(function(response){
                return response.json();
            })
            .then(function(jsonResponse){
                confirmed.innerHTML = jsonResponse.num_confirm;
                death.innerHTML = jsonResponse.num_dead;
                recovered.innerHTML = jsonResponse.num_heal;
            });
   /* switch(select.value){
        case 'select country':
                confirmed.innerHTML = '0';
                death.innerHTML = '0';
                recovered.innerHTML = '0';
            break;

         case 'GLOBAL':
            fetch('https://api.coronatracker.com/stats?')
            .then(function(response){
                return response.json();
            })
            .then(function(jsonResponse){
                confirmed.innerHTML = jsonResponse.num_confirm;
                death.innerHTML = jsonResponse.num_dead;
                recovered.innerHTML = jsonResponse.num_heal;
            });
            break;

        case 'CHINA':
            fetch('https://api.coronatracker.com/stats?country=China')
            .then(function(response){
                return response.json();
            })
            .then(function(jsonResponse){
                confirmed.innerHTML = jsonResponse.num_confirm;
                death.innerHTML = jsonResponse.num_dead;
                recovered.innerHTML = jsonResponse.num_heal;
            });
            break;
       
        case 'JAPAN':
           fetch('https://api.coronatracker.com/stats?country=Japan')
            .then(function(response){
                return response.json();
            })
            .then(function(jsonResponse){
                confirmed.innerHTML = jsonResponse.num_confirm;
                death.innerHTML = jsonResponse.num_dead;
                recovered.innerHTML = jsonResponse.num_heal;
            });
            break;      

        case 'SOUTH KOREA':
            fetch('https://api.coronatracker.com/stats?country=Korea')
            .then(function(response){
                return response.json();
            })
            .then(function(jsonResponse){
                confirmed.innerHTML = jsonResponse.num_confirm;
                death.innerHTML = jsonResponse.num_dead;
                recovered.innerHTML = jsonResponse.num_heal;
            });
            break;      

        case 'MALAYSIA':
           fetch('https://api.coronatracker.com/stats?country=Malaysia')
            .then(function(response){
                return response.json();
            })
            .then(function(jsonResponse){
                confirmed.innerHTML = jsonResponse.num_confirm;
                death.innerHTML = jsonResponse.num_dead;
                recovered.innerHTML = jsonResponse.num_heal;
            });
            break;    
            
        case 'PHILIPPINES':
            fetch('https://api.coronatracker.com/stats?country=Philippines')
            .then(function(response){
                return response.json();
            })
            .then(function(jsonResponse){
                confirmed.innerHTML = jsonResponse.num_confirm;
                death.innerHTML = jsonResponse.num_dead;
                recovered.innerHTML = jsonResponse.num_heal;
            });
            break;
        case 'SINGAPORE':
            fetch('https://api.coronatracker.com/stats?country=Singapore')
            .then(function(response){
                return response.json();
            })
            .then(function(jsonResponse){
                confirmed.innerHTML = jsonResponse.num_confirm;
                death.innerHTML = jsonResponse.num_dead;
                recovered.innerHTML = jsonResponse.num_heal;
            });
            break;      
        case 'THAILAND':
            fetch('https://api.coronatracker.com/stats?country=Thailand')
            .then(function(response){
                return response.json();
            })
            .then(function(jsonResponse){
                confirmed.innerHTML = jsonResponse.num_confirm;
                death.innerHTML = jsonResponse.num_dead;
                recovered.innerHTML = jsonResponse.num_heal;
            });
            break;  
        case 'VIETNAM':
           fetch('https://api.coronatracker.com/stats?country=Vietnam')
            .then(function(response){
                return response.json();
            })
            .then(function(jsonResponse){
                confirmed.innerHTML = jsonResponse.num_confirm;
                death.innerHTML = jsonResponse.num_dead;
                recovered.innerHTML = jsonResponse.num_heal;
            });
            break;                          
    }*/

});
    
