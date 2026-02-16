let generateBtn = document.querySelector("#generate-btn");
let password1El = document.querySelector("#password1");
let password2El = document.querySelector("#password2");
let symbolsEl = document.querySelector("#symbols");
let numbersEl = document.querySelector("#numbers");
let lengthEl = document.querySelector("#length");

generateBtn.addEventListener("click", () => {
    generatePassword();
})

const generateRandom = maxNumber => {
    return Math.floor(Math.random() * maxNumber);
}

const generatePassword = () => {
  
    password1El.textContent = "";
    password2El.textContent = "";

    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
        "/"];

    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    let merged = letters;

    if (symbolsEl.checked) merged = merged.concat(symbols);
    if (numbersEl.checked) merged = merged.concat(numbers);

    let password1 = []
    let password2 = []
    
    if (lengthEl.value !== "") {
        for (i = 0; i < lengthEl.value; i++) {
            password1.push(merged[generateRandom(merged.length)]);
            password2.push(merged[generateRandom(merged.length)]);
        }
        
    } else {
        for (i = 0; i < 15; i++) {
        password1.push(merged[generateRandom(merged.length)]);
        password2.push(merged[generateRandom(merged.length)]);
        }
    } 

    renderPassword(password1, password2);

    merged = letters
    
}

const renderPassword = (password1, password2) => {
    password1El.textContent = password1.join("");
    password2El.textContent = password2.join("");
}