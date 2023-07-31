declare let literral1: 1 | 2 | 3;
declare let literral2: 1 | 20 | 30;
declare function calculatePrice(q: 1 | 2, prices: number): number;
declare let total: number;
declare function getRandomValue(): 1 | 2 | 3 | 4;
declare enum Weather {
    London = "LON",
    Paris = "PAR",
    Chicago = "CHI"
}
declare function getMixedValue(): 1 | "Hello" | true | Weather.London;
declare function getMixedValue2(input: 1): 1;
declare function getMixedValue2(input: 2 | 3): "Hello" | true;
declare function getMixedValue2(input: 4): Weather.London;
