"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    var index = 0;
    return tourism.reduce(function (acc, item) {
        index++;
        acc.push({ id: index, title: item });
        return acc;
    }, []);
}
var result = toObject(tourism);
var filtered = result.filter(function (item) { return !item.title.includes("turizmo"); });
var visitedPlaces = [3, 5, 7];
var htmlResult = "";
var tarpai = result.map(function (item) {
    return __assign(__assign({}, item), { title: item.title.split("_").join(" ") });
});
function getData() {
    if (el)
        el.innerHTML = htmlResult;
}
tarpai.forEach(function (item) {
    if (visitedPlaces.includes(item.id)) {
        htmlResult += ("id: " + item.id + ", title: " + item.title + "<br>").strike();
    }
    else {
        htmlResult += "id: " + item.id + ", title: " + item.title + "<br>";
    }
});
var el = document.getElementById("app");
