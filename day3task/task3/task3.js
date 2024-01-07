//Use the same rest countries and print all countries names, regions, sub-region and populations



var request =new XMLHttpRequest()
request.open("GET", "https://restcountries.com/v3/all");

request.onload=function ()
{
   country= JSON.parse(request.response)
   
    for(var details in country)
    {

       console.log(
         `countryName:(${country[details].name.common})`+`
Region     :(${country[details].region})`+`
SubRegion  :(${country[details].subregion})`+`
Population :(${country[details].population})`)
       

       // console.log("Region : "+country[details].region)
       // console.log("SubRegion : "+country[details].subregion)
        //console.log("Population : "+country[details].population)
   }
}
request.send()


 

    
  


