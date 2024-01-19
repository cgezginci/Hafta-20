let buttonDOM = document.querySelector("#btn");

function fetchRandomJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        let jokeDOM = document.querySelector("#joke");
        jokeDOM.innerHTML = data.value;
      });
  }

buttonDOM.addEventListener("click", fetchRandomJoke); 
document.addEventListener("DOMContentLoaded", fetchRandomJoke);




