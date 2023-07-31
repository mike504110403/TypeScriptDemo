//#region 物件形狀型別
// let obj1 = { name: "Hat", price: 100 };
// let obj2 = { name: "Gloves", price: 75 };
// let obj3 = { name: "Gloves" };
let typefunTest = {}.getContact; // ((field: string) => string) & ((field: number) => number);
let person1 = {
    id: "bsmith",
    name: "Bob Smith",
    city: "London",
    company: "Acme Co",
    dept: "Sales",
    contact: { name: "Alice", phone: 12345678 },
    getContact(field) {
        return typeof field === "string" ? "Alice" : 321321321;
    },
};
let person2 = {
    id: "bsmith2",
    name: "Bob Smith2",
    city: "London2",
    company: "Acme Co2",
    dept: "Sales2",
    contact: { name: "Alice", phone: 12345678 },
    getContact(field) {
        return typeof field === "string" ? "Alice" : 321321321;
    },
};
let stringtypeTest = person1.getContact("Alice"); // string
let numbertypeTest = person1.getContact(123); // number
//#endregion
