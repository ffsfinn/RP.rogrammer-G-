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
const classButtons = document.querySelectorAll('buttonClass');
const attack = document.getElementById('atk');
const defense = document.getElementById('def');
const pGold = document.getElementById('pGold');
const sGold = document.getElementById('sGold');
const start = document.getElementById('start');
const buttonsAll = document.getElementsByTagName('button');;
const playerHealthShow = document.getElementById('playerHealth');
const enemyHealthShow = document.getElementById('enemyHealth');
const player1AttackBtn = document.getElementById('player1')

// Array.from(buttonsAll).filter(item => item.id !== start).forEach(disableButton)
// disableButtons(...buttonsAll)

let removed = [];

//Enemies
let enemyHealth = 100;
let enemyStatsAtk = 0;
let enemyStatsDef = 0;
enemyHealthShow1();

//Player1
let playerHealth = 100;
playerHealthShow1();

let playerGold = 10;
let playerInventory = [];
let playerStatsAtk = 0;
let playerStatsDef = 0;

//Shopkeeper
let shopGold = 500;
let shopInventory = [];

//StartGame ?

startGame();

function startGame() {

    start.addEventListener('click', function() {
        alert('Choose a class from below! or refresh the page to restart!')
        // removeButton();
        startGame();
        chooseClass();
        player1Attack();
        shopKeeper();
    });
};

function player1Attack() {

    player1AttackBtn.addEventListener('click', function() {
        if(enemyHealth > 0) {
            enemyHealth -= playerStatsAtk;
            enemyHealthShow1();

            if(enemyHealth === 0) {
                alert('Game Over. Refresh to Play Again!');
            } else if(enemyHealth < 0) {
                alert('OVERKILL! Refresh to Play Again!');
            };
        }
    });

};

function chooseClass() {

    press.addEventListener('click', function() {
        playerInitialAtkStats();
        playerInitialDefStats();
        alert('SIKE! You get random stats! Good luck!')
        // disableButtons(classButtons);
    });

    playerG();
    shopG();
}

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
function shopKeeper () {
    item1.addEventListener('click', function(){

        if(playerGold >= items[0].cost) {
            playerInventory.push(items[0]);
            playerGold -= items[0].cost;
            shopGold += items[0].cost;
            playerAtk();
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
            playerDef();
            createElement2();
    };

    playerG();
    shopG();
    // removeElement2();
});
}

//More Functions
function playerAtk() {
    playerStatsAtk += items[0].damageSword;
    attack.innerHTML = `Attack :: ${playerStatsAtk}`
};

function playerDef() {
    playerStatsDef += items[1].shieldBlock;
    defense.innerHTML = `Defense :: ${playerStatsDef}`
};

//DOM Manipulation :: **Refract code later**
function createElement1() { // Add Parameters
    playerInv = document.createElement('div');
    playerInv2 = document.getElementById('inv').getElementsByTagName('div')[0];
    playerInv2.appendChild(playerInv);
    playerInv.innerHTML = items[0].name;
};

function createElement2() {
    playerInv = document.createElement('div');
    playerInv2 = document.getElementById('inv').getElementsByTagName('div')[0];
    playerInv2.appendChild(playerInv);
    playerInv.innerHTML = items[1].name;
};

function playerInitialAtkStats() {
    playerStatsAtk = randomNum(3, 10);
    attack.innerHTML = `Attack :: ${playerStatsAtk}`;
};

function playerInitialDefStats() {
    playerStatsDef = randomNum(3, 10);
    defense.innerHTML = `Defense :: ${playerStatsDef}`;
};

function playerG() {
    playerGold;
    pGold.innerHTML = `Your Gold :: ${playerGold}`;

};

function shopG() {
    shopGold;
    sGold.innerHTML = `Shopkeepers Gold :: ${shopGold}`;
};

function removeElement1() {
    shopInv = document.getElementById('item1');
    shopInv.disabled = true;
};

function removeElement2() {
    shopInv = document.getElementById('item2');
    shopInv.disabled = true;
};

function playerHealthShow1() {
    playerHealthShow.innerHTML = `Your Health :: ${playerHealth}`
};

function enemyHealthShow1() {
    enemyHealthShow.innerHTML = `Enemies Health :: ${enemyHealth}`
}


//Disable Buttons Function (Still a Work In Progress..)
function disableButtons(...elements) { // This function takes infinite amount of arguments
   Array.from(elements).forEach(element => {
       element.setAttribute('disabled', true) //Then disables them
   })
};

function enableButtons(...elements) {
    Array.from(elements).forEach(element => {
        element.setAttribute('disabled', true);
    });
};


