const smallcups=document.querySelectorAll('.cup-small')
const listers= document.getElementById('liters')
const percentages=document.getElementById('percentage')
const remaineds=document.getElementById('remained')

updateBigCup()

smallcups.forEach((cup, idx)=>{
    cup.addEventListener('click',()=> highlightcups(idx))

})
function highlightcups(idx){
    if(smallcups[idx].classList.contains('full')&& !smallcups
    [idx].nextElementSibling.classList.contains('full')){
            idx--
    }


    smallcups.forEach((cup, idx2)=>{
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })
    updateBigCup()

}
function updateBigCup(){
    const fullCups=document.querySelectorAll('.cup-small.full').length
    const totalCups=smallcups.length
    
    if(fullCups===0){
        percentages.style.visibility='hidden'
        percentages.style.height=0
    } else{
        percentages.style.visibility='visible'
        percentages.style.height=`${fullCups / totalCups*330}px`
        percentages.innerText=`${fullCups/totalCups*100}%`
    }
    if(fullCups ===totalCups){
        remaineds.style.visibility='hidden'
        remaineds.style.height=0
    }else{
        remaineds.style.visibility='visible'
        listers.innerText=`${2-(250*fullCups/1000)}`
    }
}
