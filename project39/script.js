const password=document.getElementById('passowrd')
const background=document.getElementById('background')

password.addEventListener('input',(e)=>{
    const input=e.target.value
    const length=input.length
    const blurVale=20-length*2
    background.style.filter=`blur(${blurVale}px)`
})