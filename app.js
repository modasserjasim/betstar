// creating an array to store the player names
const selectedPlayers = [];

// display player name to the player board
function displayPlayers(playerName){
    const playerOrderList = document.getElementById('selected-player-list');
    playerOrderList.innerHTML = '';

    for(i = 0; i < playerName.length; i++){
        const player = playerName[i];
        const li = document.createElement('li');
        li.setAttribute('class', 'text-2xl py-3');
        li.innerText = player;
        playerOrderList.appendChild(li);
    }
}

// find the player name using onclick function
function playerToSelect(select){
    const playerName = select.parentNode.children[0].innerText;
    // set condition of maximum 5 palyers on the board.
    if(selectedPlayers.length < 5){
        select.setAttribute('disabled', true);
        selectedPlayers.push(playerName);
    } else{
        alert("You can't select more than 5 Players");
    }
    displayPlayers(selectedPlayers)
}
// Common functions
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
// Calculate the player amounts and find the total player expenses
document.getElementById('calculate-player').addEventListener('click', function(){
    const perPlayerAmount = getInputValueById('player-field');

    // calculate players total expenses
    const totalPlayerExpenses = perPlayerAmount * selectedPlayers.length;
    //Input validation
    if(perPlayerAmount == 'number' || !isNaN(perPlayerAmount)){
        if(perPlayerAmount >= 0){
            setTextResultById('player-expenses', totalPlayerExpenses);
        } else{
            alert('Please input a positive amount number');
        }
    } else{
        alert('Please input a valid amount number');
    }
})

// Calculate Manager and Coach expenses and add it with player expenses for total result
document.getElementById('calculate-total').addEventListener('click', function(){
    const managerExpense = getInputValueById('manager-field');
    const coachExpense = getInputValueById('coach-field');

    const PlayerTotalExpense = document.getElementById('player-expenses');
    const PlayerTotalExpenseString = PlayerTotalExpense.innerText;
    const PlayerTotalExpenseAmount = parseFloat(PlayerTotalExpenseString);

    // calculate Total amount 
    const totalExpenses = PlayerTotalExpenseAmount + managerExpense + coachExpense;
    //input validation
    if((managerExpense == 'number' && coachExpense == 'number') || (!isNaN(managerExpense) && !isNaN(coachExpense))){
        if(managerExpense >= 0 && coachExpense >= 0){
            setTextResultById('total-expenses', totalExpenses);
        } else{
            alert('Please input a positive amount number')
        }
    } else{
        alert('Please input a valid amount number')
    }
})