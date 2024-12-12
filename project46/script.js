const quizData = [
    {
      question: "Which language runs in a web browser?",
      a: "java",
      b: "c",
      c: "python",
      d: "javScript",
      correct: "d",
    },
    {
      question: "Which is the largest planet in our solar system?",
      a: "Earth",
      b: "Jupiter",
      c: "Mars",
      d: "Saturn",
      correct: "b",
    },
    {
      question: "Who invented the light bulb?",
      a: "Nikola Tesla",
      b: "Thomas Edison",
      c: "Alexander Graham Bell",
      d: "Benjamin Franklin",
      correct: "b",
    },
    {
      question: "What is the capital of France?",
      a: "London",
      b: "Berlin",
      c: "Paris",
      d: "Madrid",
      correct: "c",
    },
    {
      question: "Which of these is a primary color?",
      a: "Green",
      b: "Purple",
      c: "Red",
      d: "Orange",
      correct: "c",
    },
    {
      question: "What is the chemical symbol for water?",
      a: "O2",
      b: "CO2",
      c: "H2O",
      d: "NaCl",
      correct: "c",
    },
    {
      question: "What is the square root of 64?",
      a: "6",
      b: "7",
      c: "8",
      d: "9",
      correct: "c",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      a: "William Shakespeare",
      b: "Charles Dickens",
      c: "Mark Twain",
      d: "Jane Austen",
      correct: "a",
    },
    {
      question: "Which animal is known as the king of the jungle?",
      a: "Elephant",
      b: "Lion",
      c: "Tiger",
      d: "Giraffe",
      correct: "b",
    },
    {
      question: "What is the smallest continent?",
      a: "Asia",
      b: "Africa",
      c: "Australia",
      d: "Europe",
      correct: "c",
    },
    {
      question: "Which element has the atomic number 1?",
      a: "Oxygen",
      b: "Hydrogen",
      c: "Carbon",
      d: "Helium",
      correct: "b",
    },
    {
      question: "What is the speed of light?",
      a: "300,000 km/s",
      b: "150,000 km/s",
      c: "500,000 km/s",
      d: "1,000,000 km/s",
      correct: "a",
    }
  ];

  const quiz=document.getElementById('quiz')
  const answeEls=document.querySelectorAll('.answer')
  const questionEl=document.getElementById('question')

  const a_text =document.getElementById('a_text')
  const b_text =document.getElementById('b_text')
  const c_text =document.getElementById('c_text')
  const d_text =document.getElementById('d_text')

  const submitBtn=document.getElementById('submit')


  let currnetQuiz=0
  let score=0

  loadQuiz()

  function loadQuiz(){

    deSlectAnswers()
    const currnetQuizData=quizData[currnetQuiz]

    questionEl.innerText=currnetQuizData.question
    a_text.innerText=currnetQuizData.a
    b_text.innerText=currnetQuizData.b
    c_text.innerText=currnetQuizData.c
    d_text.innerText=currnetQuizData.d
  }

  function deSlectAnswers(){
    answeEls.forEach(ans => ans.checked=false)
  }

  function getSelect(){
    let answer
    answeEls.forEach(anse=>{
        if(anse.checked){
            answer=anse.id
        }
    })
    return answer
  }

  submitBtn.addEventListener('click',()=>{
    const answer =getSelect()
    if(answer){
        if(answer===quizData[currnetQuiz].correct){
            score++
        }
        currnetQuiz++
        if(currnetQuiz<quizData.length){
            loadQuiz()
            
        }else{
            quiz.innerHTML=`
             <h2>You answered correctly at ${score}/${quizData.length} questions</h2>

             <button onclick="location.reload()">Reload</button>
            
            `
        }
    }
  })