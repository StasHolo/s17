class Rabbit extends Mammal {
    constructor(name, health){
        super(name, health, ['plant'])

    }

    jump() {
        console.log(`${this.name} подпрыгнул очень высоко`)
    }
}

const rodjer = new Rabbit ("Кролик Роджер", "good")

rodjer.jump()