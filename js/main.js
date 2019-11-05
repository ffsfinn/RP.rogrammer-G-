// NO var EVER!!!

//Caches
const buttons = document.getElementById('buttons');
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');

let removed = [];

//Player1
let playerGold = 100;
let playerInventory = [];
let shopInventory = [];

//Shopkeeper
let shopGold = 500;

function shopKeep() {
};

//Items
let items = [ // You can use indexs here?
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

//Event Listeners ::
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
function createElement1() { // Add Parameters
    playerInv = document.createElement('ol');
    playerInv2 = document.getElementById('inv').getElementsByTagName('ul')[0];
    playerInv2.appendChild(playerInv);
    playerInv.innerHTML = 'Sword';
};

function createElement2() {
    playerInv = document.createElement('ol');
    playerInv2 = document.getElementById('inv').getElementsByTagName('ul')[0];
    playerInv2.appendChild(playerInv);
    playerInv.innerHTML = 'Shield';
};

function removeElement1() {
    shopInv = document.getElementById('item1');
    shopInv.disabled = true;
};

function removeElement2() {
    shopInv = document.getElementById('item2');
    shopInv.disabled = true;
};
