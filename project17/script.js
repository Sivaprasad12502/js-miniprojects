const API_URL ='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=7'
const IMG_PATH ='https://image.tmdb.org/t/p/w1280'
const SEARCH_API ='https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


const form =document.getElementById('form')
const search=document.getElementById('search')
// movie individual////////////

const main=document.getElementById('main');
const movieDetailsSection=document.getElementById('movie-details')
const closeDetailsButton=document.getElementById('close-details')
const movieInfo=document.getElementById('movie-info')
//Get initial movies
getMovies(API_URL)
async function getMovies(url) {
    const res=await fetch(url)
    const data=await res.json()
    showMovies(data.results)
}

function showMovies(movies){
    main.innerHTML=''
 
    movies.forEach((movie)=>{
        const { title,poster_path, vote_average,overview}=movie
        const movieEl=document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML =`
           <img src="${IMG_PATH + poster_path}" alt="" />
            <div class="movie-info">
             <h3>Movie Title</h3>
             <span class="${getclassByRate(vote_average)}">${vote_average}</span>
            </div> 
            <div class="overview">
                <h3>overview</h3>
                ${overview}
             </div>

        `
        //   add click enent to show details when movie is clicked//////
        movieEl.addEventListener('click',()=>{
            showMoviesDetails(movie)
        })

        main.appendChild(movieEl)
    })
}

function getclassByRate(vote){ 
    if(vote >=8){
        return 'green'
    }else if(vote>=5){
        return 'orange'
    }else{
        return 'red'
    }

}
// Function to show selected movie details ///////
function showMoviesDetails(movie){
    const{title, poster_path,vote_average,overview}=movie;
    movieDetailsSection.style.display='flex';
    movieInfo.innerHTML=`
           <h2>${title}</h2>
           <img src="${IMG_PATH + poster_path}" alt="${title}" />
           <p><strong>Rating:</strong> ${vote_average}</p>
           <p><strong>Overview:</strong> ${overview}</p>
    `
}


// close details section ///////
closeDetailsButton.addEventListener('click',()=>{
    movieDetailsSection.style.display='none'
})




form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const searchTerm=search.value 
    if(searchTerm && searchTerm!==''){
        getMovies(SEARCH_API + searchTerm)
         search.value=''
    }else{
        window.location.reload()
    }
})