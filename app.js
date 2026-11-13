

function loadWeatherInfo(){
    let location=document.getElementById("txtfield").value;

    fetch("https://api.weatherapi.com/v1/current.json?key=&q="+location).then(res => res.json()).then(data => {
    console.log(data);

})
}

