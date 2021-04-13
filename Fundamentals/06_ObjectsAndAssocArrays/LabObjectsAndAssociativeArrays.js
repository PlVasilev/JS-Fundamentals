let obj = {name : "SoftUni", age : 3}; // инциализиране на обект key are only string or number
console.log(obj.hasOwnProperty('name')); // проверка за съдържане на ключ
let keys = Object.keys(obj);
console.log(keys);
let values = Object.values(obj);
console.log(values);
if (values.includes(3)) console.log(3); // проверка за съдържане на стойност
Object.freeze(obj); // правим обекта ReedOnly
Object.seal(obj); // на обкета може да променяме стойности без да изтриваме и добавяне на стойности

let obj1 = { name : "SoftUni", age : 3 };
let str = JSON.stringify(obj1); // обект към стинг
let str1 = "{\"name\":\"Nakov\",\"age\":24}"
let obj2 = JSON.parse(str1); // sting to object

let polygon = {
    about: { name: "triangle", color: "red" },
    corners: [{x:2, y:6}, {x:3, y:1}, {x:-2, y:2}]
};
console.log(polygon.about.color); // достъване на стойности на обекти в обецти

let laptop = { RAM: '8GB', CPU: 'i7 2.20 GHz' };
for (let key in laptop) { // Използва се for IN за обхождане на key and laptop[key] за стойности
    console.log(key);          // RAM, CPU
    console.log(laptop[key]);  // 8GB, i7 2.20 GHz
}
    //for (let value of laptop) {
    // TypeError: laptop is not iterable
    //}

let obj3= { a: {price: 2}, c: {price: 1}, b: {price: 0.5}};   // няма значение в какъв ред вкарваме ключове те се подреждат Random
let keys3 = Object.keys(obj3).sort((key1,key2) => {return obj3[key1].price - obj3[key2].price}); // сортиране по price възходящо
console.log(keys3);

//MAP
let mapa = {};
let map = new Map();
console.log(map.set(mapa, 5)); // пази подребтата на вкарване на елементите
console.log(map.get({})); // на позиция празен обект връща undefined
console.log(map.get(mapa)); // трябва да се викне с променлива

let score = new Map(); // дефиниция
score.set("Peter", 130); // добавяне на стойност
score.set("Peter", 10); // промяна на стойност
score.set("Jhon", 20);
score.delete("Jhon", 20); // изтриване на стойност
score.set("Maria", 85);
for (let [k, v] of score) // за разлика от обекта можем да врънем of цикъл и ни връща key value pair
    console.log(k + ' -> ' + v);
console.log(score.size); // има размер .size
console.log(Array.from(map.keys())); // ["1", "3", "2", "z", "a"] правене на масив от ключове

//SET масив който не позволява повторения
let names = new Set();
names.add("Peter"); names.add(20);
names.add("Maria"); names.add(5);
console.log(names.has('Peter')); // true
names.add("Maria"); // Duplicates are skipped
names.delete(20); // Delete element if exists
for (let name of names) console.log(name);

