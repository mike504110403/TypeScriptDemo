var Position;
(function (Position) {
    Position["London"] = "LON";
    Position["Paris"] = "PAR";
    Position["Chicago"] = "CHI";
})(Position || (Position = {}));
let result = [
    ["Apples", 100, 2],
    ["Orange", true, Position.London],
];
result.forEach((item) => {
    console.log(`Result: ${item}`);
});
