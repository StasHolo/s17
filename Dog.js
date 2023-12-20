class Dog extends Mammal {
    constructor(name, health) {
        super(name, health, ['meat', 'plant'])
    }

    byte(target){
        console.log(`${this.name} укусил ${target.name}`)
    }
 }

 const grom = new Dog ("Пес", "bad")

 grom.byte(lion)