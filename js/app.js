"use strict";
var _a;
function addNumbers(a, b) {
    return a + b;
}
var sum = addNumbers(10, 15);
console.log("Sum of the tow numbers is: " + sum);
var tourism = [
    "1",
    "Traku_pilis",
    "Malborko_pilis",
    "Laju_takas",
    "Krekenavos_turizmo_centras",
    "Rundales_pilis",
    "Smetonos_dvaras",
];
var template = [
    "Traku_pilis",
    "Laju_takas",
    "Krekenavos_turizmo_centras",
    "Smetonos_dvaras",
];
function getLithuaniaPlaces(tourism, template) {
    var naujas = tourism.filter(function (vietove) { return template.includes(vietove); });
    return naujas;
}
function arrayWithoutNumbers(tourism) {
    var naujas = [];
    tourism.filter(function (item) {
        if (isNaN(Number(item))) {
            naujas.push(item);
        }
    });
    return naujas;
}
var result = arrayWithoutNumbers(tourism);
(_a = document.getElementById("app")) === null || _a === void 0 ? void 0 : _a.append(result.toString());
