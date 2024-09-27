const pokemonImage = document.getElementById("js--pokemonImage")
let randomNumber = Math.floor(Math.random() * 1009 + 1);

let pokemonName = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function (response) {
        return response.json();
    })
    .then(function (realData) {
        pokemonText.innerText = "A wild " + realData.name + " appeared!"
    })

let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function (response) {
        return response.json();
    })
    .then(function (realData) {
        pokemonImage.src = realData.sprites.front_default;
    })

const catchButton = document.getElementById("js--catchbutton")
const pokemonText = document.getElementById("js--pokemonText")

let running = false

catchButton.onclick = function () {
    if (running === false) {
        let catchNumber = Math.floor(Math.random() * 2);
        if (catchNumber === 0) {
            pokemonText.innerText =
                fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (realData) {
                        pokemonText.innerText = realData.name + " fled!"
                    })
        }
        else {
            pokemonText.innerText =
                fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (realData) {
                        pokemonText.innerText = realData.name + " was caught!"
                    })
        }
        running = true
    }

}

const nameText = document.getElementById("js--name")
const inputField = document.getElementById("js--input");
inputField.onkeyup = function (event) {
    if (event.keyCode === 13) {
        let name = inputField.value;
        let age = fetch("https://api.agify.io?name=" + name)
            .then(function (response) {
                return response.json();
            })
            .then(function (EchteData) {
                nameText.innerText = EchteData.age;
                inputField.style.display = "none";
            });
        }
}

const Showtitle = document.getElementById("js--title");
const Showsummary = document.getElementById("js--showsummary");

let title = fetch("https://api.tvmaze.com/search/shows?q=brooklyn%20nine-nine")
    .then(function(response) {
    return response.json();
    })
    .then(function(ShowData) {
        console.log(ShowData)
    Showtitle.innerText = ShowData[0].show.name;
    })

let summary = fetch("https://api.tvmaze.com/search/shows?q=brooklyn%20nine-nine")
    .then(function(response) {
    return response.json();
    })
    .then(function(SummaryData) {
        console.log(SummaryData)
    Showtitle.innerHTML = SummaryData[0].show.summary;
    })


const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
];
    
    
const data = {
    labels: labels,
    datasets: [
        {
             label: "Energy cost per month",
             data: [10000,5000,3000,7000,4000,6000],
             backgroundcolor: ['#FF6B6B','#FFD93D','#6BCB77','#4D96FF','#F473B9'],
         }
    ]
}
    
const config = {
    type:'doughnut',
    data: data,
}
    
const config2 = {
    type: 'bar',
    data: data,
}

const config3 = {
    type: 'line',
    data: data,
}
    
new Chart(document.getElementById("js--chart--1"), config);
new Chart(document.getElementById("js--chart--2"), config2);    
new Chart(document.getElementById("js--chart--3"), config3);    