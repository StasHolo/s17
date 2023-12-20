class Chicken extends Bird {
    constructor(name, health, isFlying, foodPreferings){
        super(name, health, isFlying, ['plant'])
    }
    yells(target){
        console.log(`${this.name} кричит КУ-КА-РЕ-КУ`)
    }
}

const chik = new Chicken ("Цыпа", "good", false)

chik.yells()