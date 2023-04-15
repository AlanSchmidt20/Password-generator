let passOne = document.getElementById("password-one");
let passTwo = document.getElementById("password-two");
let wordInput = document.getElementById("word-input");

const characters = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "&",
  "*",
  "_",
  "-",
  "+",
  "=",
  ":",
  ";",
  "<",
  ">",
  ".",
  "/",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function passwordGenerator() {
  const input = wordInput.value;

  let num = "";
  let character = "";
  const randomCharacter =
    characters[Math.floor(Math.random() * characters.length)];
  character += randomCharacter;

  for (let i = 0; i < 4; i++) {
    const randomNum = numbers[Math.floor(Math.random() * numbers.length)];
    num += randomNum;
  }

  let num2 = "";
  let character2 = "";
  const randomCharacter2 =
    characters[Math.floor(Math.random() * characters.length)];
  character2 += randomCharacter2;

  for (let i = 0; i < 4; i++) {
    const randomNum2 = numbers[Math.floor(Math.random() * numbers.length)];
    num2 += randomNum2;
  }

  const newPassword = input + character + num;
  const newPassword2 = num2 + character2 + input;

  passOne.textContent = newPassword;
  passTwo.textContent = newPassword2;
}

/* OLD LOGIC
function passwordGenerator() {
    let passLength = 12
    let firstPassword = ""
    let secondPassword = ""
    for (let i = 0; i <= passLength; i++) {
        let firstPass = Math.floor(Math.random() * characters.length)
        let secondPass = Math.floor(Math.random() * characters.length)
        firstPassword += characters[firstPass]
        secondPassword += characters[secondPass]

    }
    passOne.textContent = firstPassword
    passTwo.textContent = secondPassword
}
*/
