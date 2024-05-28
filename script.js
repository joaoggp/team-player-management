
function timeWaitRemove(message) {
  const h3 = document.createElement('h3');
  h3.innerText = message;
  playerList.appendChild(h3);
  const advice = document.getElementsByTagName('h3');
  setTimeout(() => {
    playerList.removeChild(advice[advice.length - 1]);
    console.log("Delayed for 2 seconds.");
  }, 2000);
}

function addPlayer() {
  if (numShirt.value === '' || namePlayer.value === '' || playerPosition.value === '') {
    alert("Não deixe nenhum campo vázio!")
    return
  }
  let choice = confirm('Você quer escalar esse jogador?')
  console.log(choice)
  if (!choice) {
    timeWaitRemove('Jogador Não Escalado!')
    return
  }
  else {
    const playerContainer = document.createElement('div')
    playerContainer.setAttribute('id', `player-${numShirt.value}`)

    const h3 = document.createElement('h3')
    h3.innerText = 'Especificações do Jogador: '

    const ul = document.createElement('ul')
    const playerPos = document.createElement('li')
    const numShirtLi = document.createElement('li')
    const nameLi = document.createElement('li')

    playerPos.innerText = `Posição do Jogador: ${playerPosition.value}`
    numShirtLi.innerText = `Número da Camiseta: ${numShirt.value}`
    nameLi.innerText = `Nome do Jogador: ${namePlayer.value}`

    ul.append(h3, playerPos, numShirtLi, nameLi)
    playerContainer.append(ul)
    playerList.append(playerContainer)
    ul.appendChild(document.createElement('br'))
  }
}

function remPlayer() {


  if (numShirt.value === '') {
    timeWaitRemove('Informe o número da Camisa no campo acima!');
  } else {
    const playerId = `player-${numShirt.value}`;
    const playerToRemove = document.getElementById(playerId);
    if (playerToRemove) {
      choice = confirm('Confirma a Remoção do Jogador?')
      if (!choice) {
        timeWaitRemove('Jogador Não Removido!');
        return
      } else {
        playerList.removeChild(playerToRemove);
        timeWaitRemove('Jogador Removido com Sucesso!');
      }

    } else {
      timeWaitRemove('Jogador Não Encontrado!');
    }
  }
}

const playerList = document.getElementById('playerList')
const numShirt = document.getElementById('inputNumShirt')
const namePlayer = document.getElementById('inputNamePlayer')
const playerPosition = document.getElementById('inputPosition')
document.getElementById('addPlayer').addEventListener('click', addPlayer)
document.getElementById('remPlayer').addEventListener('click', remPlayer)

