class Parrot extends Bird {
    constructor(name, health, isFlying, foodPreferings){
        super(name, health, isFlying, ['plant'])
    }
    repeat(target){
        console.log(`${this.name} повторяет за ${target.name}`)
    }
}

const kesha = new Parrot ("Кеша", "good", true)

kesha.repeat(stepa)