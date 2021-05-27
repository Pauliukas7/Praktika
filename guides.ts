interface Tourist {
  id: number;
  firstName: string;
  languages: Array<string>;
  goals: Array<number>;
  family: Array<number>;
}

interface Guide {
  firstName: string;
  company: string;
  languages: Array<string>;
  places: Array<number>;
}

interface VisitedPlace {
  id: number;
  title: string;
}
interface GenParams {
  languages: Array<string>;
}

const tourists: Array<Tourist> = [
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

const tourGuides: Array<Guide> = [
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

const visitedPlaces: Array<VisitedPlace> = [
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

function getAllLanguages<T extends GenParams>(people: Array<T>): Array<string> {
  const langs: Array<string> = [];
  people.forEach((person) => {
    person.languages.forEach((lang) => {
      if (!langs.includes(lang)) langs.push(lang);
    });
  });
  return langs;
}

const guideLang = getAllLanguages(tourGuides);
const turistaiLang = getAllLanguages(tourists);

function reSort(langs: Array<string>): Array<string> {
  langs.sort();
  return langs;
}

function compareLang(
  languageList1: string[],
  languageList2: string[]
): boolean {
  return languageList1.some((l) => languageList2.includes(l));
}

function compareGoals(goal1: number[], goal2: number[]): boolean {
  return goal1.some((w) => goal2.includes(w));
}

/*function getClients(
  tourGuide: Guide,
  tourists: Array<Tourist>
): Array<Tourist> {
  return tourists.filter((tourist) =>
    tourist.languages.find((lang) => tourGuide.languages.includes(lang)) && (tourist) =>
    tourist.languages.find((lang) => tourGuide.languages.includes(lang))
  );
}

const guideWithClients = tourGuides.map((guide) => ({
  guideName: guide.firstName,
  clients: getClients(guide, tourists),
}));
console.log(guideWithClients); */

const abcGuideLang = reSort(guideLang);
const abcTuristaiLang = reSort(turistaiLang);

let guideColumn: string = "";
abcGuideLang.forEach((lang) => {
  guideColumn += `${lang}, <br>`;
});
let turistaiColumn: string = "";
abcTuristaiLang.forEach((lang) => {
  turistaiColumn += `${lang}, <br>`;
});

const gidaiHtml = document.getElementById("gidai");
const turistaiHtml = document.getElementById("turistai");
const guidesClients = document.getElementById("guideswithclients");
let guidesClientsHtml: string = "";

//if (gidaiHtml) gidaiHtml.innerHTML = guideColumn;
//if (turistaiHtml) turistaiHtml.innerHTML = turistaiColumn;
//if (guidesClients) guidesClients.innerHTML = guideWithClients.toString();
