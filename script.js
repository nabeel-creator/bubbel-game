console.log("Asalam o Alikum");
var score = 0;
var hitrun;

function bubbelmaker() {
    var constant = "";
    for (var i = 1; i <= 168; i++) {
        const n = Math.floor(Math.random() * 10);
        constant += `<div class="bubble">${n}</div>`;
    }
    document.querySelector(".btm").innerHTML = constant;

    // Add event listeners to each bubble
    // document.querySelectorAll(".bubble").forEach(bubble => {
    //     bubble.addEventListener("click", function(dets) {
    //         var clickdm = Number(dets.target.textContent);
    //         if (clickdm === hitrun) {
    //             scoremaker();
    //             hitmaker();
    //             bubbelmaker();
    //         }
    //     });
    // });
}

function timmer() {
    var timmer = 60;
    var intervalId = setInterval(() => {
        if (timmer > 0) {
            timmer--;
            document.querySelector("#tmb").textContent = timmer;
        } else {
            clearInterval(intervalId);
            document.querySelector(".btm").innerHTML = `<h1> Game Over <h1>`;
        }
    }, 1000);
}

function hitmaker() {
    hitrun = Math.floor(Math.random() * 10);
    document.querySelector("#hitx").innerHTML = hitrun;
}

function scoremaker() {
    score += 10;
    document.querySelector("#schi").textContent = score;
}
document.querySelector(".btm").addEventListener("click", function(dets) {
    var clickdm = Number(dets.target.textContent);
    if (clickdm === hitrun) {
        scoremaker();
        hitmaker();
        bubbelmaker();
    }
});

bubbelmaker();
timmer();
hitmaker();
