
let darkMode = true;
const btnToggle = document.getElementById("toggle-mode");

btnToggle.addEventListener("click", (e)=>{

    //The "documentElement" is my HTML tag. The toggle means = mudar
    document.documentElement.classList.toggle("light");

    /*----Accessibility Code----*/
    //Ternaty Validation = if darkmode is true, applay light, otherwise, apply dark
    const mode = darkMode ? "light" : "dark";
    e.currentTarget
    .querySelector("span").textContent = `${mode} activated!`

})