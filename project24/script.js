const header=document.getElementById('header')
const title=document.getElementById('title')
const excerpt=document.getElementById('excerpt')
const  profile_img=document.getElementById('profile_img')
const name=document.getElementById('name')
const date=document.getElementById('date')

const animated_bgs=document.querySelectorAll('.animated-bg')
const animated_bgs_texts=document.querySelectorAll('.animated-bg-text')


setTimeout(getData,2500)





function getData(){
    header.innerHTML='<img src="image/photo-1496181133206-80ce9b88a853.avif" alt="">'
    title.innerHTML='Lorem ipsum dolar sit amet'
    excerpt.innerHTML='Lorem ipum dolor sit amet consectetur adipisicing elit. In deserunt suscipit consequatur blanditiis error veritatis'
    profile_img.innerHTML = '<img src="image/photo-1664575602554-2087b04935a5.avif" width="75px" />';
    name.innerHTML="nidha sala"
    date.innerHTML='Oct 08,2020'

    animated_bgs.forEach((bg)=> bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach((bg) =>bg.classList.remove('animated-bg-text'))
}