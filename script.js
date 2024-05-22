const inputCheck = document.querySelector('#modo-noturno');
const dadoTema = document.querySelector('body');

function modoNoturno(){
    const modo = inputCheck.checked ? 'dark' : 'light';
    dadoTema.setAttribute("data-bs-theme", modo);
}
