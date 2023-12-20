class Shark extends Fish {
    constructor(name, health, isFlying, foodPreferings){
        super (name, health, isFlying, ['meat'] )
    }
    byte(target){
        console.log(`${this.name} выпрыгнула из воды и укусила ${target.name}`)
    }
}

const sharkfish = new Shark ("Акула", "good", "false")

sharkfish.byte(stepa)