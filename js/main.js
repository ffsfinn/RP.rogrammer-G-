// NO let EVER!!!
// let playerGold = 0;
// let inventory = [];

//Constant Variables
const button = document.getElementById('button');
const inventoryList = document.createElement('ol')


//Items
let items = [ // use this list to create the items that a customer ban buy each one has a click event
    {
        name : 'sword',
        damageSword: 10,
        cost: 10
    },
    {
        name: 'shield',
        shieldBlock: 10,
        cost: 10
    }
 ];

 const shopItems = items.map(item => {
    let playerInvItem = document.createElement('li');
    playerInvItem.textContent = 
    inventoryList.appendChild(playerInv);   // turn each item into a dom element and put it on the page
 })

//Player1
let playerGold = 100;
let playerInventory = []
// let playerInv = [];

//Event Listeners
button.addEventListener('click', function(){

    if(playerGold >= sword.cost) {
        playerGold -= sword.cost;
        playerInventory.push(sword);
    } else if(playerGold < sword) {
        button.disable = true;
    } else {
        return;
    }

});



// let player1 = function(inv, gold) {
//     let playerGold = 500;

// }

// let shop = function(buy, sell) {
//     let sword = items.sword;
//     let shield = items.shield;

//     if(playerGold === items.cost) {
//         //Transfer into inventory. Add Event Listener
//     };

//     if(playerGold === items.cost) {
//         //Transfer into inventory. Add Event Listener
//     };


// }