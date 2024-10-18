// array methods

const dc = ["Superman", "Flash", "Batman", "Aquaman", "Joker"]
// console.log(dc.slice(1,4)); // slice COPIES elements from index 1 to 3 // [ 'Flash', 'Batman', 'Aquaman' ]
// console.log(dc); // ["Superman", "Flash", "Batman", "Aquaman", "Joker"]

const mcu = ["Thor", "Ironman", "Spiderman", "Cap", "DrStrange"]
// console.log(mcu.splice(1,3)); // splice CUTs 3 REFERENCEs starting from index 1 // [ 'Ironman', 'Spiderman', 'Cap' ]
// console.log(mcu); // [ 'Thor', 'DrStrange' ]

// dc.push(mcu)
// console.table(dc)
// console.table(dc[5][2]) // bad practice of indexing

// console.log(dc.concat(mcu)) // [ 'Superman', 'Flash', 'Batman',   'Aquaman', 'Joker',    'Thor', 'Ironman',  'Spiderman', 'Cap', 'DrStrange' ]
// console.log([...mcu, ...dc]) // concat & sprade >> ...arr does same work, sprade method is more used

// const arrNested = [3,43,4556,56,7,78, [23,45,65],[2,34,6,["asdf","g32",213,5546]], []]
// console.log(arrNested); // type : object
// console.log(arrNested.flat(Infinity)) // flats all nests

// a=1; b=2; c=3; d='x'; arrrrr= [a,b,c,d] // [a,b,c,d] >> Array.of(a,b,c,d)
// console.log(arrrrr);

// const name = "mizan";
// console.log(Array(name));
// console.log(Array.from(name));

console.log(Array.from({ n : "mrkhan" })); // not possible normally, RETURNS empty array
