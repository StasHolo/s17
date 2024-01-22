class Shark extends Fish {
    constructor(name: string, health: HealthType, isFlying: boolean, foodPreferings: FoodPreferingsType[]){
        super (name, health, isFlying, ['meat'] )
    }
    byte(target: Chordate){
        console.log(`${this.name} выпрыгнула из воды и укусила ${target.name}`)
    }
}

const sharkfish = new Shark ("Акула", "good", false, ['meat'])

sharkfish.byte(stepa)