let char = {
    hp: 60,
    attack: 15
}

const textDialogue = document.getElementsByClassName(".dialogue_box");

let bossEnemy = {
  name: "Slime",
  hp: 35,
  attack: 10
}

let Mulkaan = {
  name: "????",
  hp: 200,
  attack: 60
}

let trap = 30;

let strength = false;

let R = document.querySelectorAll("#relic");

let BH = document.querySelectorAll(".firstFight");

/* Starting the game */
let game = document.getElementById("begin");
game.addEventListener("click", games);
function games () {
    document.getElementsByClassName("title")[0].style.display = "none";

    const disclaimer = document.querySelector(".disclaimer");
    
    disclaimer.classList.toggle("hidden");
}
/* Start game END */

/* Scene Transitions */
function next () {
    const disclaimer = document.querySelector(".disclaimer");
    disclaimer.classList.toggle("hidden");

    const prologue = document.querySelector(".prologue");

    prologue.classList.toggle("hidden");

    progressBar();
}
// -------- Main Room --------
function mainRoom () {
  
    const disclaimer = document.querySelector(".disclaimer");
    disclaimer.style.display = "none";

    const prologue = document.querySelector(".prologue");
    prologue.style.display = "none";

    const story = document.querySelector(".content");

    story.classList.toggle("hidden");
}

// -------- Leaving the Room --------
function journeyStart () {
  const mainRoom = document.querySelector(".story");
  mainRoom.style.display = "none";

  const journeyStart = document.querySelector(".journeyStart");
  journeyStart.classList.toggle("hidden");
}

// -------- Exposition --------
function exposition () {
  const firstFight = document.querySelector(".firstFight");
  firstFight.classList.toggle("hidden");

  const interlude = document.querySelector(".interlude");
  interlude.classList.toggle("hidden");
}

// -------- Reload Exposition --------
function reload () {
  let expo = document.getElementById("relic");
  let characterActions  = document.getElementById("playeractions");
  characterActions.style.display = "none";

  let exButton = document.getElementById("moreExpo");
  exButton.style.display = "none";

  let nextButton = document.getElementById("toDungeon");
  nextButton.innerText = `Continue`;

  expo.innerText = `Okay, from the top. Source is a form of energy that not everyone can use. I was made to be able to absorb and redirect that energy, I don't remember my creator or why I was created with this ability. But Mulkaan found me and used me to make the construct that nearly destroyed your village.`;
}

// -------- Main Dungeon --------
function mainTower () {
  const interlude = document.querySelector(".interlude");
  interlude.classList.toggle("hidden");

  const dungeon = document.querySelector(".dungeon");
  dungeon.classList.toggle("hidden");
}

// -------- North Wing --------
function goNorth () {
  let info = document.getElementById("info");
  info.innerText = `You go forth to the north wing, which is poorly lit. You smell blood and begin to feel your heart pace increase out of fear but you still press on. As you move forward you feel your foot press down on one of the stones. A trap! You are impaled by javelins over head. Your adventure has ended.`

  R[1].style.display = "none";

  let northButton = document.getElementById("northWing");
  northButton.style.display = "none";

  let westButton = document.getElementById("westWing");
  westButton.style.display = "none";

  let eastButton = document.getElementById("eastWing");
  eastButton.style.display = "none";

  deadImg = document.querySelector(".died");
  deadImg.classList.toggle("hidden");

  dungeonImg = document.querySelector(".dungeonImg");
  dungeonImg.classList.toggle("hidden");
}

// -------- West Wing --------
function goWest () {
  let eastButton = document.getElementById("eastWing");
  eastButton.style.display = "none";

  let northButton = document.getElementById("northWing");
  northButton.style.display = "none";

  let westButton = document.getElementById("westWing");
  westButton.style.display = "none";

  let info = document.getElementById("info");
  
  trapDmg = Math.floor(Math.random() * trap);
  playerHP = char.hp - trapDmg;

  if (playerHP <= 0) {
    char.hp = 0;
    
    info.innerText = `You walk to the west wing and shortly after you hear something fall over. You quickly turn around in a battle stance only to be greeted by a flurry of arrows. You take ${trapDmg} damage. You succumb to your injuries and your journey has ended.`;
    R[1].innerText = `Wait. No! Come on, get up!`;

    dungeonImg = document.querySelector(".dungeonImg");
    dungeonImg.classList.toggle("hidden");

    deadImg = document.querySelector(".died");
    deadImg.classList.toggle("hidden");
  }

  if (playerHP > 0) {
    char.hp = 60;

    R[1].innerText = `Here, let me fix that up for you. That was a close one!`;

    info.innerText = `You feel a shock all around your body, you wrack with pain for a moment before you feel your wounds quickly closing, and feel like you're back at 100%`;

    let activate = document.querySelector(".activate");
    activate.classList.toggle("hidden");

  }

}

// -------- Activate the Relic --------
function activate () {
  let eastButton = document.getElementById("eastWing");
  eastButton.style.display = "inline";

  let westButton = document.getElementById("westWing");
  westButton.style.display = "none";

  let activateButton = document.querySelector(".activate");
  activateButton.classList.toggle("hidden");

  let tinkerer = document.querySelector(".smartguy");
  tinkerer.classList.toggle("hidden");

  dungeonImg = document.querySelector(".dungeonImg");
  dungeonImg.classList.toggle("hidden");

  let speech = document.getElementById("tinkerer");
  speech.innerText = `I am glad to see you again my creation, my time will sadly be brief but hero, I will activate the full power of the relic. You will need it to completely defeat Mulkaan, otherwise I don't think you will survive the encounter.`;

  let info = document.getElementById("info");
  info.innerText = `You feel a giantic surge of energy going through your whole body, feeling like you can take on the entire world. Your relic glows even brighter with power. You look up to thank the mysterious man but he is no longer there. You can feel the Source all around you. It overwhelms you but with this you can know where Mulkaan is: the east wing.`

  strength = true;
  char.hp = 200;
  char.attack = 70;
  return strength;
  return char.hp;
  return char.attack;
}

// -------- East Wing --------
function goEast () {
  const dungeon = document.querySelector(".dungeon");
  dungeon.classList.toggle("hidden");

  const setUp = document.querySelector(".setUp");
  setUp.classList.toggle("hidden");

  let deadImg = document.querySelector(".ded");

  let monologue = document.getElementById("villain");
  let fate = document.getElementById("command");

  let endButton = document.getElementById("endThis");

  if (strength == false) {
    deadImg.classList.toggle("hidden");
    endButton.style.display = "none";

    console.log(deadImg);

    monologue.innerText = `So you think you can defeat me? FOOL. I am power incarnate! I am eternal. I. AM. INFINITE!`;

    fate.innerText = `You run towards Mulkaan but with a simple wave of his hand you are engulfed in flames. You scream in agony as you are burned alive. The last thing you see is Mulkaan retrieving your relic with a smile on his face as the last thing you hear is uttered by him: weak.`
  }

  if (strength == true) {
    monologue.innerText = `You think you can challenge me? I'll show you how powerful I really am.`;
    fate.innerText = `You ready yourself for the final battle.`;
  }
}

/* Battle HUDs */
function fight () {
  const journeyStart = document.querySelector(".journeyStart");
  journeyStart.classList.toggle("hidden");
  
  let battleHUD = document.querySelector(".firstFight");
  battleHUD.classList.toggle("hidden");
  
  let charScreen = document.querySelector(".fightHUD");
  charScreen.classList.toggle("hidden");

  document.getElementById("enemyHP").innerText = `Enemy HP: ${bossEnemy.hp}`;

  document.querySelector(".char-hp").innerText = `Your HP: ${char.hp}`;
}

function endThis () {
  const finalHUD = document.querySelector(".finalBattle");
  finalHUD.classList.toggle("hidden");

  const oldText = document.querySelector(".setUp");
  oldText.classList.toggle("hidden");

  let warHUD = document.querySelector(".battleHUD");
  warHUD.classList.toggle("hidden");

  let villainImg = document.querySelector(".villain");
  villainImg.classList.toggle("hidden");

  let charScreen = document.querySelector(".fightHUD");
  charScreen.classList.toggle("hidden");

  document.querySelector(".player-hp").innerText = `Your HP: ${char.hp}`;

  document.getElementById("mulkaanHP").innerText = `Enemy HP: ${Mulkaan.hp}`;
}
/* Battle HUDs END */

function decision () {
  const finalHUD = document.querySelector(".finalBattle");
  finalHUD.classList.toggle("hidden");

  const endings = document.querySelector(".endings");
  endings.classList.toggle("hidden");

  let choices = document.getElementById("choice");
  choices.innerText = `Mulkaan cries out in pain as he is completely destroyed by the very source of his power. You fall forward from exhaustion. You feel the Source surrounding you and feel unlimited power in your finger tips. You feel as though you could do anything. Anything you wanted. With this power you could take over the world...or you could help your village. What do you want to do?`;
}

function embrace () {
  let goodEnding = document.getElementById("goodytwoshoes");
  goodEnding.style.display = "none";

  let badEnding = document.getElementById("badguy");
  badEnding.style.display = "none";

  let choices = document.getElementById("choice");
  choices.innerText = `You embrace it and decide to make Mulkaan look like a saint. Your reign of terror is known throughout all lands and soon you control all things in the world. Nobody dares challenges your authority but your relic; the source of your power leaves, no longer wanting anymore bloodshed. You are quickly killed as humanity tries to restore itself from your terrible reign.`

  let badImg = document.querySelector(".evilending");
  badImg.classList.toggle("hidden");
}

function resist () {
  let badEnding = document.getElementById("badguy");
  badEnding.style.display = "none";

  let goodEnding = document.getElementById("goodytwoshoes");
  goodEnding.style.display = "none";

  let choices = document.getElementById("choice");
  choices.innerText = `You decide to resist and help the people of the world. You go around the entire world helping everyone where you can, using the Source to create amazing things or cure diseases. Unlike Mulkaan you will use this gift to better the world.`;

  let windmills = document.getElementById("windmills");
  windmills.innerText = `"What is it about art anyway that we give it so much importance? The money earned, proof, pure and simple of the value of that individual: the artist. You can never explain to someone who uses this gift to enslave, that you have used this gift to be free." -Windmills`;

  let goodImg = document.querySelector(".goodending");
  goodImg.classList.toggle("hidden");
}
/* Scene Transitions END */

/* Fight Logic */

function Source () {
  let playerDmg = Math.floor(Math.random() * char.attack);
  let sourceButton = document.getElementById("magic-button");

  document.querySelector(".player-hp").innerText = `Your HP: ${char.hp}`;

  document.getElementById("mulkaanHP").innerText = `Enemy HP: ${Mulkaan.hp}`;

  Mulkaan.hp -= playerDmg;

  let battlelog = document.getElementById("warInfo");

  battlelog.innerText = `You have dealt ${playerDmg} damage!`;

  let mulkaanDmg = Math.floor(Math.random() * Mulkaan.attack);

  char.hp -= mulkaanDmg;

  if (char.hp <= 0) {
    char.hp = 0;

    let charScreen = document.querySelector(".battleHUD");
    charScreen.classList.toggle("hidden");

    battlelog.classList.toggle("hidden");

    deadImg = document.querySelector(".dedd");
    deadImg.classList.toggle("hidden");

    document.getElementById("mulkaanHP").innerText = `Mulkaan stands over you, bloodied and defeated. He takes the relic from you as you struggle to hold onto it with the last bit of your strength, but it is in vain. After he takes it from you he uses the Source to completely obliterate your body and binds your soul to the relic, letting you watch as he destroys everything you hold dear and being powerless to do anything about it.`;

    mulkaanImg = document.querySelector(".villain");
    mulkaanImg.classList.toggle("hidden");
  }

  if (Mulkaan.hp <= 0 ) {
    Mulkaan.hp = 0;
    let charScreen = document.querySelector(".battleHUD");
    charScreen.classList.toggle("hidden");

    document.getElementById("mulkaanHP").innerText = `You have won the battle!`;
    battlelog.classList.toggle("hidden");

    let respite = document.querySelector(".respite");
    respite.classList.toggle("hidden");
  }

  setTimeout(() =>{
    battlelog.innerText = `You have taken ${mulkaanDmg} damage!`;

  }, 300);
}

function melee () {
  let playerDmg = Math.floor(Math.random() * char.attack);
  let attackButton = document.getElementById("attack-button");

  let nextScene = document.querySelector(".nextscene");
  

  bossEnemy.hp -= playerDmg;

  document.getElementById("enemyHP").innerText = `Enemy HP: ${bossEnemy.hp}`;
  document.querySelector(".char-hp").innerText = `Your HP: ${char.hp}`;

  let battlelog = document.getElementById("battleInfo");

  battlelog.innerText = `You have dealt ${playerDmg} damage!`;

  let enemyDmg = Math.floor(Math.random() * bossEnemy.attack);
  
  char.hp -= enemyDmg;

  if (char.hp <= 0) {
    char.hp = 0;

    let charScreen = document.querySelector(".fightHUD");
    charScreen.classList.toggle("hidden");

    bossImg = document.querySelector(".boss");
    bossImg.classList.toggle("hidden");

    battlelog.classList.toggle("hidden");

    deadImg = document.querySelector(".died");
    deadImg.classList.toggle("hidden");
  }

  if (bossEnemy.hp <= 0 ) {
    bossEnemy.hp = 0;
    let charScreen = document.querySelector(".fightHUD");

    document.getElementById("enemyHP").innerText = `You have won the battle!`;
    nextScene.classList.toggle("hidden");
    charScreen.classList.toggle("hidden");
    battlelog.classList.toggle("hidden");
  }

  setTimeout(() =>{
    battlelog.innerText = `You have taken ${enemyDmg} damage!`;

  }, 300);
}

/* Fight Logic END */

/* Reset Button */
function reset () {
    window.location.reload();
}

/* Progress Animation */
function progressBar () {

  // As of right now, if the user leaves and goes back, the loading bar glitches out, need to fix it when I have time.
    let i = 0;
    if (i == 0) {
      i = 1;
      let bar = document.getElementById("bar");
      let width = 1;
      let id = setInterval(frame, 65);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
          let loadingText = document.querySelector(".loadingText");
          loadingText.classList.toggle("hidden");

          let continueButton = document.querySelector(".continue")
          continueButton.classList.toggle("hidden");
        } else {
          width++;
          bar.style.width = width + "%";
        }
      }
    }
  }
/* Progress Animation END */