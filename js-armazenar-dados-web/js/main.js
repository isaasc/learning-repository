const form = document.getElementById("novoItem");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(event.target.elemnts['nome'].value);
    console.log(event.target.elemnts['quantidade'].value);

});