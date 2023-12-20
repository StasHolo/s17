class Carp extends Fish {
    constructor(name, health, isFlying, foodPreferings){
        super (name, health, isFlying, ['meat'] )
    }
    swim(target){
        console.log(`${this.name} плавал вместе с ${target.name}`)
    }
}

const carpik = new Carp ("Карпик", "good", "false")

carpik.swim(sharkfish)