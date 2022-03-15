// selector

const search = document.querySelector('.search');
const submit = document.querySelector('.submit');
var city = document.querySelector('.city');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');

// Generate API key from openweatehrmap.org and add it after "&appid= "

submit.addEventListener("click", function () {
    fetch( 
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          search.value +
          "&appid= add API key in here"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
         

          var cityVal = data.name;
          var tempVal = data['main']['temp'];
          var desVal = data['weather'][0]['description'];
          city.innerHTML = `City : ${cityVal}`;
          temp.innerHTML =`Temparature : ${Math.floor(tempVal -273)} degree`;
          desc.innerHTML = `Cloud: ${desVal}` ;
          search.value="";
      } 
    )
    .catch((err)=> {err.message});
        
} );


