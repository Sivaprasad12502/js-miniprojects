const buttonn=document.getElementById('button')
const toastss=document.getElementById('toasts')

const messages =[
    "Message One",
    "Message Two",
    'Message Three',
    'Message Four',
]

const types= ['info','success','error']
buttonn.addEventListener('click',()=>createNotificaton())

function createNotificaton(messages =null, type =null){

    const notif=document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type:getRandomType())
    notif.innerText= messages ? messages:getRandomMessage()

    toastss.appendChild(notif)
    setTimeout(()=>{
        notif.remove()
    },3000)
}
function getRandomMessage(){
    return messages[Math.floor(Math.random()*messages.length)]
}
function getRandomType(){
    return types[Math.floor(Math.random()*types.length)]
}
