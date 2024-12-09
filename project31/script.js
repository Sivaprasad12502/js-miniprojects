const rusltEl=document.getElementById('result')
const lenghtEl=document.getElementById('length')
const uppercaseEl=document.getElementById('uppercase')
const lowercaseEl=document.getElementById('lowercase')
const numbersEl=document.getElementById('numbers')
const symbolEl=document.getElementById('symbols')
const generateEl=document.getElementById('generate')
const clipboardEl=document.getElementById('clipboard')


const randomFunc={
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol
}
clipboardEl.addEventListener('click',()=>{
    const texarea=document.createElement('textarea')
    const password=rusltEl.innerText

    if(!password){ return}
    texarea.value=password
    document.body.appendChild(texarea)
    texarea.select()
    document.execCommand('copy')
    texarea.remove()
    alert('Password copied to clipboard!')
})

generateEl.addEventListener('click',()=>{
    const length= +lenghtEl.value
    const hasLower=lowercaseEl.checked 
    const hasupper=uppercaseEl.checked
    const hasnumber=numbersEl.checked
    const hassymbol=symbolEl.checked

    rusltEl.innerText=generatepassword(hasLower, hasupper, hasnumber, hassymbol, length)
})


function generatepassword(lower, upper,number,symbol,length){
    let generatedpassword=''
    const typesCount =lower+upper+number+symbol
    const typesArr=[{lower},{upper},{number},{symbol}].
    filter(item=> Object.values(item)[0])

    if(typesCount===0){
        return ''
    }

    for(let i=0;i<length;i+=typesCount){
        typesArr.forEach(type=>{
            const funcName=Object.keys(type)[0]

            generatedpassword+=randomFunc[funcName]()
        })

    }
    const finalPassword =generatedpassword.slice(0, length)
    return finalPassword
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}
function getRandomSymbol(){
    const symbols='!@#$%&*()<>/,.'
    return symbols[Math.floor(Math.random()*symbols.length)]
}

