

const uptate = () => {

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

if(hours >= 12) {
    document.getElementById('time').innerHTML = "PM";
}else{ 
    document.getElementById('time').innerHTML = "AM";
}

if (hours >12){
    hours = hours - 12;
} 
document.getElementById("hours").innerHTML = hours ;
document.getElementById("minutes").innerHTML = minutes ;
document.getElementById("seconds").innerHTML = seconds ;
}

setInterval(uptate,1000);