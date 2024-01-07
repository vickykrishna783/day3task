/*
Use the rest countries' API URL -> https://restcountries_com,'v31/all and display all the country
flags in the console

*/ 


var request =new XMLHttpRequest()

request.open("GET", "https://restcountries.com/v3/all");

request.onload = function ()
{
   country = JSON.parse(request.response)
   
    for(var details in country)
    {
        console.log
       (
        `countryFlag:(${country[details].flag})`
        )
    }
}
request.send()


 

    
  


