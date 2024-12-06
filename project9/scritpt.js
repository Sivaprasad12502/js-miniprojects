const suounds=['applause','boo','gasp','tada','victory','wrong']
suounds.forEach(sound=>{
    const btn=document.createElement('button')
    btn.classList.add('btn')
    btn.innerText =sound

    btn.addEventListener('click',()=>{
        stopSongs()


        document.getElementById(sound).play()
    })


    document.getElementById('buttons').appendChild(btn)
})


function stopSongs(){
    suounds.forEach(sound=>{
        const song =document.getElementById
        (sound)
        song.pause()
        song.currenTime=0;
    })
}

