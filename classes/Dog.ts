class Dog extends Mammal {
    constructor(name:string, health:HealthType) {
        super(name, health, ['meat', 'plant'])
    }

    byte(target: Mammal){
        console.log(`${this.name} укусил ${target.name}`)
    }
 }

 const grom = new Dog ("Пес", "bad")

 grom.byte(lion)