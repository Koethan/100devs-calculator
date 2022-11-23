class Calculator{
    constructor(color, size, buttonShape,){
        this.color = color
        this.size = size
        this.buttonShape = buttonShape
    }
    add(a,b){
        return a+b
    }
    subtract(a,b){
        return a-b
    }
    multiply(a,b){
        return a*b
    }
    divide(a,b){
        return a/b
    }
    display(a){
        console.log(a)
    }

}
let calc = new Calculator('black', 'medium', 'round')


    
