"use strict";
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
function getCastles(tourism) {
    var castles = new Array();
    tourism.forEach(function (i) {
        if (i.includes("_pilis")) {
            i = i.replace("_pilis", "");
            castles.push(i);
        }
    });
    return castles;
}
function getDetails(tourism) {
    var info = tourism.map(function (item) { return item + " - " + item.length; });
    return info;
}
function toObject(tourism) {
    return tourism.reduce(function (acc, item) {
        acc.push({ title: item });
        return acc;
    }, []);
}
var result = toObject(tourism);
var htmlResult = "";
result.forEach(function (item) {
    htmlResult += "title: " + item.title + "<br>";
});
var el = document.getElementById("app");
if (el)
    el.innerHTML = htmlResult;
