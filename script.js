
function work(){

    const d=new Date();
    let h=d.getHours().toString().padStart(2,0);
    const me=h>12?"PM":"AM";
    h=h<12?h:12-(24-h);
   
    const m=d.getMinutes().toString().padStart(2,0);
    const s=d.getSeconds().toString().padStart(2,0);

    
    const k=`${h}:${m}:${s} ${me}`;
    console.log(k);
    document.getElementById("clock").textContent=k;

}

work();
setInterval(work,1000);