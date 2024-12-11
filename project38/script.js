const contents=document.querySelectorAll('.content')
const listItmes=document.querySelectorAll('nav ul li')


listItmes.forEach((item, idx)=>{
    item.addEventListener('click',()=>{
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideAllContents(){
    contents.forEach(content=>content.classList.remove('show'))
}

function hideAllItems(){
    listItmes.forEach(item=>item.classList.remove('active'))
}
