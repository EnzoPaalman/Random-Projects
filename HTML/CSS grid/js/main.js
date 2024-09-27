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
            data: [10000,5000,3000,7000,4000],
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

new Chart(document.getElementById("js--chart--1"), config);
new Chart(document.getElementById("js--chart--2"), config2);

let normal, fighting, flying, poison, ground, rock, bug,
ghost, steel, fire, water, grass, electric, psychic, ice,
dragon, dark, fairy, unknown, shadow = 0;

for (i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * 500 + 1);

}