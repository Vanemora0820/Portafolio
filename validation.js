const formulario = document.querySelector("[data-form]");
const btn = document.querySelector(".formcontato__botao");
const inputs = document.querySelectorAll("input");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    formulario.reset();
});

