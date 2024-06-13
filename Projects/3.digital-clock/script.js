const clock = document.querySelector('.clock');

const tick=()=>{
    const now = new Date();
    //console.log(now);
    const h = now.getHours()
    const m = now.getMinutes();
    const s = now.getSeconds();
    //console.log(hours,minutes,seconds);

    const html = `
        <span>${(h<10 ? '0':'')+h}</span> :
        <span>${(m<10 ? '0':'')+m}</span> :
        <span>${(s<10 ? '0':'')+s}</span>
    `;
        
    
    clock.innerHTML = html;
}

setInterval(tick,1000);