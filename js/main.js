// NO var EVER!!!

//Caches
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');

let removed = [];

//Player1
let playerGold = 100;
let playerInventory = [];
let shopInventory = [];

//Items
let items = [
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

//Event Listeners :: **Wont push more than one items. Look for a fix later**
item1.addEventListener('click', function(){

    if(playerGold >= items[0].cost) {
            playerInventory.push(items[0]);
            playerGold -= items[0].cost;
            createElement1();
    }

    removeElement1();
});

item2.addEventListener('click', function(){
    
    if(playerGold >= items[1].cost) {
            playerInventory.push(items[1]);
            playerGold -= items[1].cost;
            createElement2();
    }

    removeElement2();
});

//DOM Manipulation :: **Refract code later**
function createElement1() {
    playerInv = document.createElement('ol');
    playerInventory = document.getElementById('inv').getElementsByTagName('ul')[0];
    playerInventory.appendChild(playerInv);
    playerInv.innerHTML = 'Sword';
};

function createElement2() {
    playerInv = document.createElement('ol');
    playerInventory = document.getElementById('inv').getElementsByTagName('ul')[0];
    playerInventory.appendChild(playerInv);
    playerInv.innerHTML = 'Shield';
};

function removeElement1() {
    shopInv = document.getElementById('item1');
    shopInv.disabled = true;
};

function removeElement2() {
    shopInv = document.getElementById('item2');
    shopInv.disabled = true;
}


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