function populationGrowth(){
    
    let initialP = parseFloat(prompt("Enter the inital population."));
    let rateOfGrowth = parseFloat(prompt("Enter the rate of population growth."));
    let timeInHours = parseFloat(prompt("Enter the time in hours."));

    let finalP = Math.round(initialP * Math.E ** (rateOfGrowth * timeInHours));
    
    let regionOfTheMonster = prompt("Enter the region of the monster.");
    let nameOfTheMonster = prompt("Enter the name of the monster.");
    
    let informationOfTheMonster = (regionOfTheMonster +" "+ nameOfTheMonster ).toUpperCase();

    document.getElementById("result").innerHTML = "After " + timeInHours + " hours," + " the population of " + informationOfTheMonster + " has risen to " + finalP + "!";
}
