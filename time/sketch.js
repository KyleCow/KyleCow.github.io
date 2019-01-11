let d = new Date();
let time;

setInterval(function(){
    if(d != new Date()){
        hr = d.getHours();
        min = d.getMinutes();
        sec = d.getSeconds();
        mill = d.getMilliseconds();
        d = new Date();
        time = ('0' + hr).slice(-2)+':'+('0' + min).slice(-2)+':'+('0' + sec).slice(-2);
        mil = ('00' + mill).slice(-3);
        document.getElementById("t").innerHTML = time;
        document.getElementById("m").innerHTML = mil;
     }
},1);
