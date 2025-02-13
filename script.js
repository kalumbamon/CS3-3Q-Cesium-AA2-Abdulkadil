function ohno(){
    let pInitial = parseFloat(prompt("sigma ano initial"));
    let r = parseFloat(prompt("RATEEEEEEEEE"));
    let t = parseFloat(prompt("TIME MOOO"));

    let pFinal = Math.round(pInitial * Math.E ** (r*t));
    let regionOfTheMonster = prompt("region mo");
    let nameOfTheMonster = prompt("NAMEEEEE");
    let ipabigletter = (regionOfTheMonster +""+ nameOfTheMonster ). toUpperCase();

    document.getElementById("result").innerHTML = "After " + t + " hours," + " the population of " + ipabigletter + " has risen to " + pFinal;
}
