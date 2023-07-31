let literral1: 1 | 2 | 3;
//literral1 = 100;

let literral2: 1 | 20 | 30;

literral1 = 1;
literral2 = literral1;
//console.log(literral2);

literral1 = 2;
//literral2 = literral1; // -> 報錯 literral2 的字面型別中沒有2

function calculatePrice(q: 1 | 2, prices: number): number {
    return q * prices;
}

let total = calculatePrice(1, 2000);
total = calculatePrice(2, 2000);
//total = calculatePrice(3, 2000); // 報錯

//#region 混用字面型別

function getRandomValue(): 1 | 2 | 3 | 4 {
    return (Math.floor(Math.random() * 4) + 1) as 1 | 2 | 3 | 4;
}
enum Weather {
    London = "LON",
    Paris = "PAR",
    Chicago = "CHI",
}
function getMixedValue(): 1 | "Hello" | true | Weather.London {
    // 指定回傳型別 且可混和型別
    switch (getRandomValue()) {
        case 1:
            return 1;
        case 2:
            return "Hello";
        case 3:
            return true;
        case 4:
            return Weather.London;
    }
}
console.log(`Value: ${getMixedValue()}`);
//#endregion

//#region 字面值型別做函示多載
function getMixedValue2(input: 1): 1;
function getMixedValue2(input: 2 | 3): "Hello" | true;
function getMixedValue2(input: 4): Weather.London;
function getMixedValue2(input: number): number | string | boolean | Weather {
    // 指定回傳型別 且可混和型別
    switch (getRandomValue()) {
        case 1:
            return 1;
        case 2:
            return "Hello";
        case 3:
            return true;
        case 4:
            return Weather.London;
    }
}
//#endregion