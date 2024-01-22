class Fish extends Chordate {
    constructor (name: string, health: HealthType, isFlying: boolean, foodPreferings: FoodPreferingsType[]){
        super(name, health, isFlying, true, foodPreferings)
    }
}