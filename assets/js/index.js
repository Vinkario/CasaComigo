const simButton = document.querySelector('.sim')
const naoButton = document.querySelector('.nao')
const modalOn = document.querySelector('.modal')
const closeButton = document.querySelector('.close')

function moverBotao() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const newTop = Math.floor(Math.random() * (windowHeight - simButton.offsetHeight));
    const newLeft = Math.floor(Math.random() * (windowWidth - simButton.offsetWidth));

    simButton.style.top = newTop + 'px';
    simButton.style.left = newLeft + 'px';
}

function modal() {
    modalOn.style.display = 'flex'

}

function fechar() {
    modalOn.style.display = 'none'
}

simButton.addEventListener("click", moverBotao)
naoButton.addEventListener('click', modal)
closeButton.addEventListener('click', fechar)