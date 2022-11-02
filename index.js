var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
var obj = {
    name: "Nhan vien ",
    age: 21,
    sex: "Nam"
};
// Class members also be given special modifiers which affect visibility.
var Persons = /** @class */ (function () {
    function Persons(name) {
        this.name = name;
    }
    Persons.prototype.getName = function () {
        return this.name;
    };
    return Persons;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    return Square;
}(Rectangle));
var persons = new Persons("Jane");
console.log(persons.getName());
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(404);
printStatusCode('404');
// The type void can be used to indicate a function doesn't return any value.
function printHello() {
    console.log("Hello World");
}
printHello();
// Parameters
function sum(a, b) {
    return a * b;
}
sum(2, 5);
// Optional Parameters 
function add(a, b, c) {
    return a + b + (c || 0);
}
add(2, 18);
// Casting with as
var x = "ABC";
console.log(x.length);
// OR
console.log(x.length);
// Generics with functions help make more generalized methods which more accurately represent the types used and returned.
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 35));
// Destructuring
var a, b, rest;
_a = [10, 20, 20, 30, 40], a = _a[0], b = _a[1], rest = _a.slice(2);
console.log(rest);
var mySq = new Square(20);
var myRect = new Rectangle(10, 20);
var myName = "Nguyen Xuan Doan";
console.log(myRect.getArea());
console.log(obj);
