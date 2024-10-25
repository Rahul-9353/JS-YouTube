const mar_heroes = ["thor", "Daredevil", "Punisher"]
const dc_heroes = ["Batman", "Superman", "Flash"]

mar_heroes.push(dc_heroes)

// console.log(mar_heroes);
// console.log(mar_heroes[3][1]);

// const all_heroes = mar_heroes.concat(dc_heroes)
// console.log(all_heroes);

const all_new_heroes = [...mar_heroes, ...dc_heroes]
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Rahul"));
console.log(Array.from("Rahul"));
console.log(Array.from({name: "Rahul"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

