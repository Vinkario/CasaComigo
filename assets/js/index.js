const simButton = document.querySelector('.sim')

function moverBotao() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
  
    // Define novas coordenadas aleatórias para o botão
    const newTop = Math.floor(Math.random() * (windowHeight - simButton.offsetHeight));
    const newLeft = Math.floor(Math.random() * (windowWidth - simButton.offsetWidth));
  
    // Move o botão para as novas coordenadas
    simButton.style.marginTop = newTop + 'px';
    simButton.style.marginLeft = newLeft + 'px';
}

simButton.addEventListener("click", moverBotao)