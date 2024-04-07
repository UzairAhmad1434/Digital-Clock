let a
let hrs;
let mins;
let secs;
setInterval(() => {
    a=new Date();
    hrs=a.getHours();
    mins=a.getMinutes();
    secs=a.getSeconds();
    document.getElementById('hrs').innerHTML=hrs;
    document.getElementById('mins').innerHTML=mins;
    document.getElementById('secs').innerHTML=secs;
}, 1000);