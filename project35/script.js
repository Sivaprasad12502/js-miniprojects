const imgs=document.getElementById('imgs')

const lefBtn=document.getElementById('left')
const righBtn=document.getElementById('right')


const img =document.querySelectorAll('#imgs img')


let idx = 0

let interval=setInterval(run, 2000)

function run(){
    idx++

    chngeImage()
}
function chngeImage(){
   if(idx > img.length -1){
        idx=0
   }else if(idx <0){
    idx=img.length -1
   }
   imgs.style.transform=`translateX(${-idx  *500}px)`
}


function resetInterval(){
    clearInterval(interval)
    interval=setInterval(run, 2000)
}
righBtn.addEventListener('click',()=>{
    idx++
    chngeImage()
    resetInterval()
})
lefBtn.addEventListener('click',()=>{
    idx--
    chngeImage()
    resetInterval()
})

