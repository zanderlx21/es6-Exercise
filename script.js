// ES6 Exercise 

class Room 
{
    constructor (name, length, width, capacity){
    this.name = name;
    this.length = length;
    this.width = width;
    this.available = true;
    this.capacity = 15;
 }
 getArea(){
    return this.length * this.width
 }
 getPerimeter(){
    return (this.length * 2) + (this.width * 2) 
 }
}

let room1 = new Room("Sun", 30, 20);
let room2 = new Room("Green", 15, 20);

room2.available = false;

console.log(room1.available)
console.log(room2.available)

console.log("------------------------")

console.log(room1);
console.log(room2);

console.log("------------------------")

console.log(`Name: ${room1.name}`);
console.log(`Length: ${room1.length}`);
console.log(`Width: ${room1.width}`)
console.log(`Area: ${room1.getArea()}`);
console.log(`Perimeter:${room1.getPerimeter()}`);

console.log("------------------------")

console.log(`Name: ${room2.name}`);
console.log(`Length: ${room2.length}`);
console.log(`Width: ${room2.width}`)
console.log(`Area: ${room2.getArea()}`);
console.log(`Perimeter:${room2.getPerimeter()}`);

console.log("------------------------")

room2.capacity = 18;

console.log(`Room 1 Capacity: ${room1.capacity}`);
console.log(`Room 2 Capacity: ${room2.capacity}`);

console.log("------------------------")

console.log("Hooray! The End.")