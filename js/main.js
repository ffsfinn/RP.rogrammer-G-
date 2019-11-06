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
const buttonsAll = document.getElementsByTagName('button');

let removed = [];

//Player1
let playerGold = 100;
let playerInventory = [];
let playerStatsAtk = 0;
let playerStatsDef = 0;

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
        name : 'Sword',
        damageSword: 10,
        cost: 10
    },
    {
        name: 'Shield',
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
            playerStatsAtk += items[0].damageSword;
            createElement1();
    };

    
    playerG();
    shopG();
    // removeElement1();
});

item2.addEventListener('click', function(){
    
    if(playerGold >= items[1].cost) {
            playerInventory.push(items[1]);
            playerGold -= items[1].cost;
            shopGold += items[1].cost;
            playerStatsDef += items[1].shieldBlock;
            createElement2();
    };

    playerG();
    shopG();
    // removeElement2();
});

//More Functions

//DOM Manipulation :: **Refract code later**
function createElement1() { // Add Parameters
    playerInv = document.createElement('ol');
    playerInv2 = document.getElementById('inv').getElementsByTagName('ul')[0];
    playerInv2.appendChild(playerInv);
    playerInv.innerHTML = items[0].name;
};

function createElement2() {
    playerInv = document.createElement('ol');
    playerInv2 = document.getElementById('inv').getElementsByTagName('ul')[0];
    playerInv2.appendChild(playerInv);
    playerInv.innerHTML = items[1].name;
};

function playerStats1() {
    playerStatsAtk = randomNum(3, 10);
    attack.innerHTML = `${playerStatsAtk}`;
};

function playerStats2() {
    playerStatsDef = randomNum(3, 10);
    defense.innerHTML = `${playerStatsDef}`;
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


