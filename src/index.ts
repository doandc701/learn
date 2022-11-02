interface Person {
    name?: string,
    age: number,
    sex: string,
}
interface Shape {
    getArea: () => number;
}
const obj: Person = {
    name: "Nhan vien ",
    age: 21,
    sex: "Nam"
}

// Class members also be given special modifiers which affect visibility.
class Persons {
    private name: string;
    public constructor(name: string) {
        this.name = name
    }
    public getName():string {
        return this.name
    }
}
class Rectangle implements Shape {
    public constructor( protected readonly width: number , protected height:number) {}

    public getArea () : number {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    public constructor (width:number) {
        super(width, width)
    }
}

const persons = new Persons("Jane")
console.log(persons.getName())

function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
}
printStatusCode(404)
printStatusCode('404')


// The type void can be used to indicate a function doesn't return any value.
function printHello (): void {
    console.log("Hello World")
}
printHello();

// Parameters
function sum (a:number , b:number) {
    return a * b;
}
sum(2,5);


// Optional Parameters 
function add(a:number, b:number , c?:number) {
    return a+b + ( c || 0)
}
add(2,18)

// Casting with as
const x: string = "ABC"
console.log((x as string).length)
// OR
console.log((<string>x).length)

// Generics with functions help make more generalized methods which more accurately represent the types used and returned.
function createPair<S,T>(v1:S, v2:T):[S,T] {
    return [v1,v2]
}
console.log(createPair<string, number>('hello',35))

// Destructuring
let a:number ,b:number ,rest:any ;
[a ,b , ...rest] = [10,20, 20,30 ,40]
console.log(rest)



const mySq = new Square(20);
const myRect = new Rectangle(10,20)
const myName: string | number | {} | [] = "Nguyen Xuan Doan"
console.log(myRect.getArea())
console.log(obj)