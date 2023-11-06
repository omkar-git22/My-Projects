let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{
    let Time = new Date();

    hrs.innerText = Time.getHours();
    min.innerText = Time.getMinutes();
    sec.innerText = Time.getSeconds();
},1000);