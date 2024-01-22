class Rabbit extends Mammal {
    constructor(name: string, health: HealthType){
        super(name, health, ['plant'])

    }

    jump() {
        console.log(`${this.name} подпрыгнул очень высоко`)
    }
}

const rodjer = new Rabbit ("Кролик Роджер", "good")

rodjer.jump()