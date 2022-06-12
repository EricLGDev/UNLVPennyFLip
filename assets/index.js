let headsCount = 0;
if(localStorage.getItem("headsCount") !== null) {
    headsCount = parseInt(localStorage.getItem("headsCount"));
}

let tailsCount = 0; 
if(localStorage.getItem("tailsCount") !== null) {
    tailsCount = parseInt(localStorage.getItem("tailsCount"));
}

scoreTable()

// add eventlistener and function to the flip penny button

let flipButton = document.querySelector("#flip");
// when clicked the flip the penny button:
flipButton.addEventListener("click", function(){

    let isHeads = Math.random() < 0.5;
    // update the penny image
    if(isHeads) {
        // update content to display heads
        // update image 
        document.querySelector("#penny-img").src = "./assets/images/penny-heads.jpg";
        // update the h2 with penny flip outcome
        document.querySelector("#message").textContent = "You Flipped Heads!";
        //increment the heads count 
        headsCount++
    } else {
        // update content to display tails
        document.querySelector("#penny-img").src = "./assets/images/penny-tails.jpg";
        // update the h2 with penny flip outcome
        document.querySelector("#message").textContent = "You Flipped Tails!";
        // increment tails count
        tailsCount++
    }


    scoreTable()

    localStorage.setItem("headsCount", headsCount);
    localStorage.setItem("tailsCount", tailsCount);

})




function scoreTable(){

    // update the scoreboard/table 
    document.querySelector("#heads").textContent = headsCount;
    document.querySelector("#tails").textContent = tailsCount;
    // calculate percentage 
    let total = headsCount + tailsCount;

    let percentageHeads = 0;
    let percentageTails = 0;

    if (total > 0) {
        percentageHeads = Math.round(headsCount/total * 100);
        percentageTails = Math.round(tailsCount/total * 100);
    }

    
    document.querySelector("#heads-percent").textContent = percentageHeads + "%";
    document.querySelector("#tails-percent").textContent = percentageTails + "%";

}


// clear scoreboard 
document.querySelector("#clear").addEventListener("click", function(){
    headsCount = 0;
    tailsCount = 0;

    scoreTable()

    document.querySelector("#penny-img").src = "./assets/images/penny-heads.jpg";
    // update the h2 with penny flip outcome
    document.querySelector("#message").textContent = "Let's Get Rolling!";

    
    localStorage.setItem("headsCount", headsCount);
    localStorage.setItem("tailsCount", tailsCount);

})