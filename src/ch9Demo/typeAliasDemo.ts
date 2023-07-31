enum Position {
    London = "LON",
    Paris = "PAR",
    Chicago = "CHI",
}
type comboType = 1 | 2 | 3 | Position.London | number;
type comboTupleType = [string, number | boolean, comboType];

let result: comboTupleType[] = [
    ["Apples", 100, 2],
    ["Orange", true, Position.London],
];
result.forEach((item: comboTupleType) => {
    console.log(`Result: ${item}`);
});