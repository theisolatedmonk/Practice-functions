// // Aria of Circle

// // area.circle (4)

// function ariaOfCircle(r) {
//     const area = 3.14 * r * r;
//     return area;
// }
// console.log('Aria of Circle is =', ariaOfCircle(5));
// // Perimeter of Circle
// function parameterOfCircle(r) {
//     const Perimeter = 2 * 3.14 * r
//     return Perimeter;
// }
// console.log('Perimeter of Circle is =', parameterOfCircle(5));




// // Aria of Square
// function ariaOfSquare(l) {
//     const area = l * l;
//     return area;
// }
// console.log('Aria of Square is =', ariaOfSquare(5));

// // Perimeter of  Square
// function parameterOfSquare(l) {
//     const perimeter = 4 * l;
//     return perimeter;
// }
// console.log('Perimeter of Square is =', parameterOfSquare(5));

// // Aria of Rectangle
// function ariaOfRectangle(l, w) {
//     const area = l * w;
//     return area;
// }
// console.log('Aria of Rectangle is =', ariaOfRectangle(5, 4));

// // Perimeter of  Rectangle
// function parameterOfRectangle(l, w) {
//     const perimeter = 2 * (l + w);
//     return perimeter;
// }
// console.log('Perimeter of Rectangle is =', parameterOfRectangle(5, 4));

// // Aria of Triangle
// function ariaOfRectangle(a, b, c) {
//     const s = (a + b + c) / 2;
//     const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
//     return area;
// }
// console.log('Aria of Triangle is =', ariaOfRectangle(3, 4, 5));

// // Perimeter of  Triangle
// function parameterOfTriangle(a, b, c) {
//     const perimeter = a + b + c
//     return perimeter;
// }
// console.log('Perimeter of Triangle is =', parameterOfTriangle(3, 4, 5));

// // Square  root of number
// function sqrtOf(a) {
//     const sqrt = Math.sqrt(a)
//     return sqrt;
// }
// console.log('Square  root of number is =', sqrtOf(4));

// // Square   of number
// function sqrOf(a) {
//     const sqr = a * a
//     return sqr;
// }
// console.log('Square of number is =', sqrOf(4));


// Function using Object;

// Area Object function


// const aria = {
//     circle: function(r) {
//         const area = 3.14 * r * r;
//         return area;
//     },
//     square: function(l) {
//         const sqrarea = l * l;
//         return sqrarea;
//     },
//     rectangle: function(l, w) {
//         const area = l * w;
//         return area;
//     },
//     triangle: function(a, b, c) {
//         const s = (a + b + c) / 2;
//         const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
//         return area;
//     }
// }
// console.log(aria.circle(5))

// // Perimeter Object function;

// const perimeters = {
//     circle: function(r) {
//         const perimeter = 2 * 3.14 * r
//         return perimeter;

//     },
//     square: function(l) {
//         const perime = 4 * l;
//         return perime;
//     },
//     rectangle: function(l, w) {
//         const perimeter = 2 * (l + w);
//         return perimeter;
//     },
//     triangle: function(a, b, c) {
//         const perimeter = a + b + c
//         return perimeter;
//     }

// }
// console.log(aria.circle(5))

const pluse = document.getElementById("pluse")
const count = document.getElementById("count")
const minus = document.getElementById("minus")
const resetBtn = document.getElementById("reset")
let countNumer = 0

resetBtn.addEventListener("click", function() {
    count.innerHTML = 0;

});



pluse.addEventListener("click", function() {
    count.innerHTML = addCount()
})

minus.addEventListener("click", function() {
    count.innerHTML = subtractCount()
})



function addCount() {
    countNumer = ++countNumer;
    return countNumer
}

function subtractCount() {
    countNumer = --countNumer;
    return countNumer
}