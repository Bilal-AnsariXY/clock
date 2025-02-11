let h = document.querySelector(".h");
let m = document.querySelector(".m");
let s = document.querySelector(".s");
let pmam = document.querySelector(".pman");
function f ()
{
    const now = new Date(); 
   

    let hours = now.getHours(); 
    let minutes = now.getMinutes(); 
    let seconds = now.getSeconds(); 
    
    pmam.innerHTML = hours >= 12 ? "PM" : "AM";
    if(hours>12)
    {
        hours = hours%12;
    }
    h.innerHTML = hours <10 ?"0"+hours: hours;
    m.innerHTML = minutes<10?"0"+minutes:minutes;
    s.innerHTML = seconds<10?"0"+seconds:seconds;
    
}
f();
setInterval(f,1000);
