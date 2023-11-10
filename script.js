// Rolling dice function
let rollDice = (side) => {
    let randomNum = Math.floor(Math.random() * side) + 1;
    let target = document.querySelector(".result-area");
    target.textContent = randomNum
};

let resetDice = () => {
    let target = document.querySelector(".result-area");
    target.textContent = " ";
}