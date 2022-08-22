const selectedPlayers = [];

function displayPlayers(playerName){
    console.log(playerName)
    const playerOrderList = document.getElementById('selected-player-list');
    playerOrderList.innerHTML = '';

    for(i = 0; i < playerName.length; i++){
        player = playerName[i];
        const li = document.createElement('li');
        li.setAttribute('class', 'text-2xl py-3');
        li.innerText = player;
        playerOrderList.appendChild(li);
    }
}

function playerToSelect(select){
    const playerName = select.parentNode.children[0].innerText;
    if(selectedPlayers.length < 5){
        selectedPlayers.push(playerName);
    } else{
        alert("You can't select more than 5 Players");
    }

    displayPlayers(selectedPlayers)

}

// calculation area

function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldAmount;
}

function setTextResultById(elementId, value){
    const textElement = document.getElementById(elementId);
    textElement.innerText = value;
}
document.getElementById('calculate-player').addEventListener('click', function(){
    const perPlayerAmount = getInputValueById('player-field');

    const totalPlayerExpenses = perPlayerAmount * selectedPlayers.length;
    setTextResultById('player-expenses', totalPlayerExpenses);
})