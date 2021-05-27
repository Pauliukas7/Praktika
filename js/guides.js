"use strict";
var tourists = [
    {
        id: 1,
        firstName: "John",
        languages: ["eng", "no"],
        goals: [1, 7],
        family: [5],
    },
    {
        id: 2,
        firstName: "Angelina",
        languages: ["rus"],
        goals: [1, 2, 3, 4],
        family: [],
    },
    {
        id: 3,
        firstName: "Robert",
        languages: ["esp"],
        goals: [1, 2, 3, 5, 8],
        family: [],
    },
    {
        id: 4,
        firstName: "James",
        languages: ["eng"],
        goals: [4, 8],
        family: [],
    },
    {
        id: 6,
        firstName: "Linda",
        languages: ["lt", "rus", "eng", "fr"],
        goals: [1, 3, 4, 5, 6, 7],
        family: [1],
    },
    {
        id: 7,
        firstName: "Thomas",
        languages: ["fr"],
        goals: [2, 3, 4, 5, 6],
        family: [6],
    },
];
var tourGuides = [
    {
        firstName: "Ineta",
        company: "Novaturas",
        languages: ["en", "fr", "esp"],
        places: [1, 3, 5, 8],
    },
    {
        firstName: "Skirmantas",
        company: "Tez Tour",
        languages: ["lt", "rus"],
        places: [1, 3, 4],
    },
    {
        firstName: "Skirmantas",
        company: "Tez Tour",
        languages: ["lt", "rus"],
        places: [1, 3, 4],
    },
    {
        firstName: "Agnė",
        company: "AirGuru",
        languages: ["lt", "en", "lv"],
        places: [2, 6],
    },
    {
        firstName: "Ernestas",
        company: "AirGuru",
        languages: ["lt", "lv"],
        places: [1, 2, 6],
    },
];
var visitedPlaces = [
    {
        id: 1,
        title: "Trakų pilis",
    },
    {
        id: 2,
        title: "Gedimino pilis",
    },
    {
        id: 3,
        title: "Lajų pilis",
    },
    {
        id: 4,
        title: "Kirkilų apžvalgos bokštas",
    },
    {
        id: 5,
        title: "Ilzenbergo dvaras",
    },
    {
        id: 6,
        title: "Etnokosmologijos muziejus",
    },
    {
        id: 7,
        title: "Baterija „Memel Nord“ ",
    },
    {
        id: 8,
        title: "Klinčių karjerai ",
    },
];
function getAllLanguages(people) {
    var langs = [];
    people.forEach(function (person) {
        person.languages.forEach(function (lang) {
            if (!langs.includes(lang))
                langs.push(lang);
        });
    });
    return langs;
}
var guideLang = getAllLanguages(tourGuides);
var turistaiLang = getAllLanguages(tourists);
function reSort(langs) {
    langs.sort();
    return langs;
}
function compareLang(languageList1, languageList2) {
    return languageList1.some(function (l) { return languageList2.includes(l); });
}
function compareGoals(goal1, goal2) {
    return goal1.some(function (w) { return goal2.includes(w); });
}
function getClients(tourGuide, tourists) {
    return tourists.filter(function (tourist) {
        return tourist.languages.find(function (lang) { return tourGuide.languages.includes(lang); });
    });
}
var guideWithClients = tourGuides.map(function (guide) { return ({
    guideName: guide.firstName,
    clients: getClients(guide, tourists),
}); });
console.log(guideWithClients);
var abcGuideLang = reSort(guideLang);
var abcTuristaiLang = reSort(turistaiLang);
var guideColumn = "";
abcGuideLang.forEach(function (lang) {
    guideColumn += lang + ", <br>";
});
var turistaiColumn = "";
abcTuristaiLang.forEach(function (lang) {
    turistaiColumn += lang + ", <br>";
});
var gidaiHtml = document.getElementById("gidai");
var turistaiHtml = document.getElementById("turistai");
var guidesClients = document.getElementById("guideswithclients");
var guidesClientsHtml = "";
//if (gidaiHtml) gidaiHtml.innerHTML = guideColumn;
//if (turistaiHtml) turistaiHtml.innerHTML = turistaiColumn;
if (guidesClients)
    guidesClients.innerHTML = guideWithClients.toString();
