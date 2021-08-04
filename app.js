let p1Button = document.querySelector("#p1Button");
let p2Button = document.querySelector("#p2Button");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const selectScore = document.querySelector("#playTo");
let p1Score = 0, p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener("click",() => {
    if(!isGameOver){
        p1Score += 1;
        p1Display.textContent = p1Score;
        if(p1Score === winningScore){
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            isGameOver = true;
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
})

p2Button.addEventListener("click",() => {
    if(!isGameOver){
        p2Score++;
        p2Display.textContent = p2Score;
        if(p2Score === winningScore){
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            isGameOver = true;
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
})

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    isGameOver = false;
    p1Button.disabled = false;
    p2Button.disabled = false;
}

resetButton.addEventListener("click", reset)

selectScore.addEventListener("change", function(){
    winningScore = parseInt(this.value);
    reset();
})