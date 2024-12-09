const addBtn=document.getElementById('add')


const notes=JSON.parse(localStorage.getItem('notes'))
if(notes){
    notes.forEach(note=>addNewNote(note))
}
addBtn.addEventListener('click',()=>addNewNote())


function addNewNote(text =''){
    const note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML=`
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
            
        </div>

        <div class="main ${text ?"":"hidden"} "></div>
        <textarea class="${text ?"hidden":""}"></textarea>
    
    `

    const editbtn=note.querySelector('.edit')
    const deletebtn=note.querySelector('.delete')
    const mainn=note.querySelector('.main')
    const textA=note.querySelector('textarea')

    textA.value=text
    mainn.innerHTML = marked(text);



    deletebtn.addEventListener('click',()=>{
        note.remove()

        updateLS()
    })
    editbtn.addEventListener('click',()=>{
        mainn.classList.toggle('hidden')
        textA.classList.toggle('hidden')
    })

    textA.addEventListener('input',(e)=>{
        const {value}=e.target

        mainn.innerHTML=marked(value)

        updateLS()
    })
    document.body.appendChild(note)
    
}

function updateLS(){
    const notesText=document.querySelectorAll('textarea')
    const notes=[]
    notesText.forEach (note=>notes.push(note.value))
    localStorage.setItem('notes',JSON.stringify(notes))
    
}
