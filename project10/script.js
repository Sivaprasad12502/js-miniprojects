const jokesEl=document.getElementById('joke')
const jokeBtn=document.getElementById('jokeBtn')


jokeBtn.addEventListener('click',generteJoke)

generteJoke()
// using async await 

async function generteJoke(){
    const config={
        
            headers:{
                'Accept':'application/json'
            },
        
    }


    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokesEl.innerHTML=data.joke

}
// using.then

// function generteJoke(){
//     const config={
        
//             headers:{
//                 'Accept':'application/json'
//             }
        
//     }


//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//         jokesEl.innerHTML=data.joke
//     })  

// }
