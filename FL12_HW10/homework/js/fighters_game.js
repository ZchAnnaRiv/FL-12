function Fighter(obj) {
    let fighter = obj;
    let wins = 0;
    let losses = 0;
    const hpTotal = fighter.hp;

    return {
        getName: () => fighter.name,
        getDamage: () => fighter.damage,
        getHealth: () => fighter.hp,
        getStrength: () => fighter.strength,
        getAgility: () => fighter.agility,


        attack: (enemy) => {
            let successOfAttack = Math.random() * 100;
            if (100 - enemy.getAgility() - enemy.getStrength() > successOfAttack) {
                console.log(`${fighter.name} makes ${fighter.damage} damage to ${enemy.getName()}`);
                enemy.dealDamage(fighter.damage);
                console.log(enemy.getDamage());
            } else {
                console.log(`${enemy.getName()} attack missed`);
            }
        },

        logCombatHistory: () => {
            console.log(`Name: ${fighter.name}, Wins: ${wins}, Losses: ${losses}`)
        },

        heal: (increaseHP) => {
            fighter.hp += increaseHP;
            if (hpTotal < fighter.hp) {
                fighter.hp = hpTotal;
            }
        },

        dealDamage: (decreaseHP) => {
            fighter.hp -= decreaseHP;
            if (fighter.hp <= 0) {
                fighter.hp = 0;
            }
        },

        addWin: () => wins++,

        addLoss: () => losses++
    }
}

let user = new Fighter({name: 'Cat', damage: 30, hp: 100, strength: 18, agility: 56});
let user2 = new Fighter({name: 'Dog', damage: 10, hp: 100, strength: 20, agility: 24});


function battle(fighter1, fighter2) {
    if (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
        while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);
        }
        let winner = fighter1.getHealth() > fighter2.getHealth() ? fighter1 : fighter2;
        let looser = winner ? fighter2 : fighter1;
        console.log(`${winner.getName()} has won`);
        winner.addWin();
        looser.addLoss();
        return;
    }

    let wimp = fighter1.getHealth() > fighter2.getHealth() ? fighter2 : fighter1;
    console.log(`${wimp.getName()} is dead and can't fight`);
}

battle(user, user2);
