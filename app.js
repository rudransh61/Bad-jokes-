const button = document.querySelector(".abc .joke .clk");
const jokeDiv = document.querySelector(".abc .joke p");

document.addEventListener("DOMContentLoaded", getJock);
button.addEventListener("click", getJock);

async function getJock() {
  fetch('https://icanhazdadjoke.com/',{
    headers:{
        'Accept': 'application/json'
    }
  }).then(data => data.json())
  .then(obj=>jokeDiv.innerHTML = obj.joke)
}
// const jokes = document.querySelector('.joke');
// const btn = document.getElementById('btn');

// const generateJokes = async () => {
//     try {
//         const setHeader = {
//             headers: {
//                 Accept: "application/json"
//             }
//         }
//         // Fetching Api with async await
//         const url = "https://icanhazdadjoke.com";
//         const res = await fetch(url, setHeader);
//         const data = await res.json();
//         console.log(data);
//         jokes.innerHTML = data.joke;
//     }
//     catch (error) {
//         console.log(`The error is ${error}`);
//     }
// }

// // Calling a function
// btn.addEventListener('click', generateJokes);
// generateJokes();