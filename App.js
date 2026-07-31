let clubs = [
    {name:"Lob Wedge", carry:4},
    {name:"Sand Wedge", carry:3},
    {name:"Pitching Wedge", carry:2},
    {name:"9 Iron", carry:1},
    {name:"8 Iron", carry:0.5},
    {name:"7 Iron", carry:0.33},
    {name:"6 Iron", carry:0.25},
    {name:"5 Iron", carry:0.20}
];


function setMode(mode){

    document.getElementById("distanceMode").style.display =
    mode==="distance" ? "block":"none";

    document.getElementById("sliderMode").style.display =
    mode==="slider" ? "block":"none";

}


function findClub(carryPercent){

    let ratio = carryPercent / 100;

    let closest = clubs[0];

    let difference = Math.abs(
        closest.carry/(closest.carry+1)-ratio
    );

    clubs.forEach(club=>{

        let value = club.carry/(club.carry+1);

        let diff = Math.abs(value-ratio);

        if(diff < difference){
            difference = diff;
            closest = club;
        }

    });

    return closest.name;
}


function showResult(carry){

    let club=findClub(carry);

    document.getElementById("club").innerHTML = club;

    document.getElementById("ratio").innerHTML =
    "Carry: "+Math.round(carry)+"%<br>"+
    "Roll: "+Math.round(100-carry)+"%";

}


function calculateDistance(){

    let hole =
    Number(document.getElementById("hole").value);

    let landing =
    Number(document.getElementById("landing").value);

    if(hole>0){

        let carry=(landing/hole)*100;

        showResult(carry);

    }

}


function calculateSlider(){

    let carry =
    Number(document.getElementById("carrySlider").value);

    document.getElementById("carryValue").innerHTML=carry;

    document.getElementById("rollValue").innerHTML=100-carry;

    showResult(carry);

}
