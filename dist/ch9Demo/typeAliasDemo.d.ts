declare enum Position {
    London = "LON",
    Paris = "PAR",
    Chicago = "CHI"
}
declare type comboType = 1 | 2 | 3 | Position.London | number;
declare type comboTupleType = [string, number | boolean, comboType];
declare let result: comboTupleType[];
