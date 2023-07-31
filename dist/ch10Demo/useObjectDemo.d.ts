declare type ObjShape1 = {
    id: number;
    name: string;
    price?: number;
};
declare type ObjShape2 = {
    id: number;
    name: string;
    city: string;
};
declare let obj8: {
    id: number;
    name: string;
    price: number;
};
declare let obj9: {
    id: number;
    name: string;
    price: number;
};
declare let obj10: {
    id: number;
    name: string;
    price: number;
};
declare let obj11: {
    id: number;
    name: string;
    city: string;
};
declare let dataItems1: (ObjShape1 | ObjShape2)[];
declare type UnionType = {
    id: number | string;
    name: string;
};
declare function isPerson(testObj: any): testObj is ObjShape2;
