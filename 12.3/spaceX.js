const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

//access the latitude of the Vandenberg Airforce Base
//d3.json(url).then(spaceXResults =>
    //console.log(spaceXResults[0].location.latitude));


/// run "python -m http.server" in terminal
/// open up local host - "localhost:8000"
d3.json("samples.json").then(function(data){
    console.log(data);
});


d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key,value]) => 
        {console.log(key + ": " + value);});
    
});