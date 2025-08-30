function showSection(id) {
    document.querySelectorAll(".section").forEach(section => {
        section.style.display = "none"
    });

    document.getElementById(id).style.display = "block";
}

// Menu
const menuButtons = document.querySelectorAll(".menu");

menuButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (index === 0) showSection("basico");
        if (index === 1) showSection("mega-sena");
        if (index === 2) showSection("loto-facil");
        if (index === 3) showSection("names");

        menuButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});
// Trocar Loogo

let changeLogo = true;
const logo = document.querySelector(".logo");

function toggleLogo() {
    if (changeLogo) {
        logo.src = "./assets/logo_2.png";
    } else {
        logo.src = "./assets/logo_1.png";
    }

    changeLogo = !changeLogo;
}

// Sorteio Básico
const luckyButton = document.querySelector(".lucky-button")
const minValue = document.getElementById("first-input")
const maxValue = document.getElementById("second-input")
const result = document.querySelector(".result")

function randomIntInclusive(min, max) {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}

function pressedTheButton() {
    let min = parseFloat(minValue.value, 10);
    let max = parseFloat(maxValue.value, 10);

    if (isNaN(min) || isNaN(max)) {
        alert("Preencha os dois números");
        return;
    }

    if (min > max) {
        [min, max] = [max, min];
    }

    const randomNumber = randomIntInclusive(min, max);
    result.textContent = randomNumber;

    toggleLogo();
}

luckyButton.addEventListener("click", pressedTheButton)

// Sorteio Mega-Sena
const megaButton = document.querySelector(".lucky-mega");
const megaResult = document.querySelector(".mega-result");

function megaSena() {
    let megaNumbers = [];
    while (megaNumbers.length < 6) {
        let nMega = Math.floor(Math.random() * 60) + 1;
        if (!megaNumbers.includes(nMega)) {
            megaNumbers.push(nMega);
        }
    }
    megaNumbers.sort((a, b) => a - b);
    megaResult.textContent = megaNumbers.join(" - ");

    toggleLogo();
}

megaButton.addEventListener("click", megaSena);

// Sorteio Loto-Fácil
const lotoButton = document.querySelector(".lucky-loto");
const lotoResult = document.querySelector(".loto-result");

function lotoFacil() {
    let lotoNumbers = [];
    while (lotoNumbers.length < 15) {
        let nLoto = Math.floor(Math.random() * 25) + 1;
        if (!lotoNumbers.includes(nLoto)) {
            lotoNumbers.push(nLoto);
        }
    }
    lotoNumbers.sort((a, b) => a - b);
    lotoResult.textContent = lotoNumbers.join(" - ");

    toggleLogo();
}

lotoButton.addEventListener("click", lotoFacil);

// Sorteio de Nomes
const nameButton = document.querySelector(".lucky-name");
const nameResult = document.querySelector(".name-result");
const nameList = document.getElementById("name-list");

function nameDraw() {
    let text = nameList.value.trim();
    let names = text.split("\n").map(n => n.trim()).filter(n => n !== "");

    if (names.length === 0) {
        alert("Digite pelo menos um nome!");
        return;
    }

    let drawn = names[Math.floor(Math.random() * names.length)];
    nameResult.textContent = drawn;

    toggleLogo();
}

nameButton.addEventListener("click", nameDraw);