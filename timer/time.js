
var timer = () => {
    let day = new Date();
    let hours = (day.getHours() % 12).toString();
    let minutes = day.getMinutes().toString();
    let secondes = day.getSeconds().toString();
    let output = document.querySelector('h1');
    if(hours.length < 2){
        hours = "0" + hours;
    }
    if(minutes.length < 2){
        minutes = "0" + minutes;
    }
    if(secondes.length < 2){
        secondes = "0" + secondes;
    }
    output.innerHTML = hours + " : " + minutes + " : " + secondes;
    document.body.style.background = '#' + hours + minutes + secondes;
}
setInterval(timer, 1000);