// NO var EVER!!!

//Randomizer
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

//Caches
const buttons = document.getElementById('buttons');
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const press = document.getElementById('randomizer');
const attack = document.getElementById('atk');
const defense = document.getElementById('def');
const pGold = document.getElementById('pGold');
const sGold = document.getElementById('sGold');
const start = document.getElementById('start');

let removed = [];

//Player1
let playerGold = 100;
let playerInventory = [];
let playerStats = 0;

//Shopkeeper
let shopGold = 500;
let shopInventory = [];

//StartGame ? Render
function startGame() {
    
    start.addEventListener('click', function() {
        alert('Choose a class from below! or refresh the page to restart!')
        removeButton();
    });

    chooseClass();
};

function chooseClass() {

    press.addEventListener('click', function() {
        playerStats1();
        playerStats2();
        alert('SIKE! You get random stats! Good luck!')
        removeButton1();
    });

    playerG();
    shopG();
};

startGame();

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
            shopGold += items[0].cost;
            createElement1();
    };

    playerG();
    shopG();
    removeElement1();
});

item2.addEventListener('click', function(){
    
    if(playerGold >= items[1].cost) {
            playerInventory.push(items[1]);
            playerGold -= items[1].cost;
            shopGold += items[1].cost;
            createElement2();
    }

    playerG();
    shopG();
    removeElement2();
});

//DOM Manipulation :: **Refract code later**
function createElement1() { // Add Parameters
    playerInv = document.createElement('ol');
    playerInv2 = document.getElementById('inv').getElementsByTagName('ul')[0];
    playerInv2.appendChild(playerInv);
    playerInv.innerHTML = 'Sword'
};

function createElement2() {
    playerInv = document.createElement('ol');
    playerInv2 = document.getElementById('inv').getElementsByTagName('ul')[0];
    playerInv2.appendChild(playerInv);
    playerInv.innerHTML = 'Shield';
};

function playerStats1() {
    playerStats = randomNum(3, 10);
    attack.innerHTML = `${playerStats}`;
};

function playerStats2() {
    playerStats = randomNum(3, 10);
    defense.innerHTML = `${playerStats}`;
};

function playerG() {
    playerGold;
    pGold.innerHTML = `${playerGold}`;

};

function shopG() {
    shopGold;
    sGold.innerHTML = `${shopGold}`;
};

function removeElement1() {
    shopInv = document.getElementById('item1');
    shopInv.disabled = true;
};

function removeElement2() {
    shopInv = document.getElementById('item2');
    shopInv.disabled = true;
};

function removeButton() {
    start.disabled = true;
};

function removeButton1() { //NOTE TO SELF :: DRY CODING! GAH! CHANGE IT ASAP!
    disButtons = document.getElementById('dis1');
    disButtons2 = document.getElementById('dis2');
    disButtons3 = document.getElementById('dis3');
    disButtons4 = document.getElementById('dis4');
    disButtons.disabled = true;
    disButtons2.disabled = true;
    disButtons3.disabled = true;
    disButtons4.disabled = true;
};


