//  Exercise
//  Since you already know about pseudocode, let’s solve this exercise through pseudocode first, and 
//  then convert it into a programming code!

//   ● Write a code to find area of rectangle.
//   ○ Example : length = 5, width = 3
//   ○ Output : 15
const _length : number = 5;
const _width : number = 3;
console.log("length = " + _length + ", width = " + _width);
console.log("Output : " + _length * _width);

//   ● Write a code to find perimeter of rectangle.
//   ○ Example : length = 5, width = 3
//   ○ Output : 16
console.log("length = " + _length + ", width = " + _width);
console.log("Output : " + 2 * (_length + _width));

//   ● Write a code to find diameter, circumference and area of a circle.
//   ○ Example : radius = 5
//   ○ Output : diameter = 10, circumference = 31.4159, area = 78.539
const _radius : number = 5;
const _pi : number = Math.PI;
let _diameter : number;
let _circumference : number;
let _area : number;
_diameter = (2 * _radius);
_circumference = (_diameter * _pi);
_area = (_pi * (_radius * _radius));
console.log("radius = " + _radius);
console.log("Output : diameter = " + _diameter + " circumference = " + _circumference.toFixed(4) + " area = " + _area.toFixed(3));

//   ● Write a code to find angles of triangle if two angles are given.
//   ○ Example : a = 80, b = 65
//   ○ Output : 35
const _a : number = 80;
const _b : number = 65;
const _c : number = (180 - _a - _b);
console.log("a = " + _a + ", b = " + _b);
console.log("Output : " + _c);

//   ● Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 
//  days). 
//  ○ Example : 400 days → 1 year, 1 month, 5 days
//   ○ Example: 366 days → 1 year, 0 month, 1 day

const _nilai : number = 1984;
let _year : number = parseInt(_nilai / 365);
let _month : number = parseInt((_nilai - (365 * _year)) / 30 );
let _day : number = parseInt(_nilai - (365 * _year) - (30 * _month)); 
let _tahun : string;
let _bulan : string;
let _hari : string;
let _initial : string;
if (_year <= 1) { _tahun = " year"; } else { _tahun = " years"; }
if (_month <= 1) { _bulan = " month"; } else { _bulan = " months"; }
if (_day <= 1) { _hari = " day"; } else { _hari = " days"; }
if (_nilai <= 1) { _initial = " day"; } else { _initial = " days"; }
console.log(_nilai + _initial + " -> " + _year + _tahun + ", " + _month + _bulan + ", " + _day + _hari);


//   ● Write a code to get difference between dates in days.
//   ○ Example : date1 = 2022-01-20, date2 = 2022-01-22
//   ○ Output : 2

const _year1 : number = 2022;
const _month1 : number = 1;
const _day1 : number = 22;

const _year2 : number = 2022;
const _month2 : number = 1;
const _day2 : number = 20;

let _calculate1 : number;
_calculate1 = (_day1 + (_month1 * 30) + (_year1 * 365));
let _calculate2 : number;
_calculate2 = (_day2 + (_month2 * 30) + (_year2 * 365));

function _berhitung(_angkatahun: number, _angkabulan: number, _angkahari: number) {
    return (_angkatahun * 365) + (_angkabulan * 30) + (_angkahari);
}

console.log(_calculate1);
console.log(_calculate2);
console.log((_calculate1 - _calculate2));
console.log((_berhitung(_year1, _month1, _day1) - _berhitung(_year2, _month2, _day2)));


