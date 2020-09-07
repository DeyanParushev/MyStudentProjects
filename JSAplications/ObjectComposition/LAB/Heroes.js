function solve() {
    function mage(heroName) {
        let caster = {
            name: heroName,
            health: 100,
            mana: 100,
            cast: function (spellName) {
                this.mana--;
                console.log(`${this.name} cast ${spellName}`);
            }
        };

        return caster;
    }

    function fighter(heroName) {
        let knight = {
            name: heroName,
            health: 100,
            stamina: 100,
            fight: function () {
                this.stamina--;
                console.log(`${this.name} slashes at the foe!`);
            }
        };

        return knight;
    };

    return {
        mage,
        fighter
    };
};

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
