let H=0;
let M=0;
let S=0;
let MS=0;
let myInterval;

function padZero(value){
    return value.toString().padStart(2,0)
}

let root=document.createElement('div')
root.setAttribute('id','root')
document.body.appendChild(root)

let h1=document.createElement('h1')
h1.innerHTML="Stopwatch"
root.appendChild(h1)


let clock=document.createElement('div')
clock.setAttribute('id','clock')
clock.innerHTML=`<h1>${padZero(H)}<sub>H</sub>:${padZero(M)}<sub>M</sub>:${padZero(S)}<sub>S</sub>:${padZero(MS)}</h1>`
root.appendChild(clock)


function stopWatch()
{
    myInterval=setInterval(()=>{
        MS++
        if(MS===100){
            S++
            MS=0
        }
        if(S===60)
        {
            M++
            S=0
        }
        if(M===60)
        {
            H++
            S=0
        }
        clock.innerHTML=`<h1>${padZero(H)}<sub>H</sub>:${padZero(M)}<sub>M</sub>:${padZero(S)}<sub>S</sub>:${padZero(MS)}</h1>`
    },10)
}
let btn_1=document.createElement('button')
btn_1.innerHTML="Start"
btn_1.addEventListener('click',()=>{
    if(btn_1.innerHTML==="Start")
    {
        btn_1.innerHTML="stop"
        stopWatch()
        btn_1.style.backgroundColor="aquamarine"
    }
    else
    {
        btn_1.innerHTML="Start"
        clearInterval(myInterval)
        btn_1.style.backgroundColor="" 
    }
    
})
root.appendChild(btn_1)

let btn_2=document.createElement('button')
btn_2.innerHTML="Reset"
btn_2.addEventListener('click',()=>{
    MS=0
    S=0
    M=0
    H=0
    btn_1.innerHTML="Start"
    clearInterval(myInterval)
    btn_1.style.backgroundColor=""
    clock.innerHTML=`<h1>${padZero(H)}<sub>H</sub>:${padZero(M)}<sub>M</sub>:${padZero(S)}<sub>S</sub>:${padZero(MS)}</h1>`
    
})

root.appendChild(btn_2)