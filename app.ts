function addNumbers(a: number, b: number): number {
  return a + b;
}

var sum = addNumbers(10, 15);
console.log("Sum of the tow numbers is: " + sum);
const tourism = [
  "1",
  "Traku_pilis",
  "Malborko_pilis",
  "Laju_takas",
  "Krekenavos_turizmo_centras",
  "Rundales_pilis",
  "Smetonos_dvaras",
];
const template = [
  "Traku_pilis",
  "Laju_takas",
  "Krekenavos_turizmo_centras",
  "Smetonos_dvaras",
];
type Tourism = Array<string>;

function getLithuaniaPlaces(tourism: Tourism, template: Tourism): Tourism {
  const naujas = tourism.filter((vietove) => template.includes(vietove));
  return naujas;
}
function arrayWithoutNumbers(tourism: Tourism): Tourism {
  let naujas: Tourism = [];
  tourism.filter((item) => {
    if (isNaN(Number(item))) {
      naujas.push(item);
    }
  });
  return naujas;
}

function getCastles(tourism: Tourism): Tourism {
  const castles: Tourism = new Array();
  tourism.forEach((i) => {
    if (i.includes("_pilis")) {
      i = i.replace("_pilis", "");
      castles.push(i);
    }
  });
  return castles;
}

function getDetails(tourism: Tourism) {
  const info = tourism.map((item) => item + " - " + item.length);
  return info;
}
type ToursismObj = {
  id: number;
  title: string;
};

function toObject(tourism: Tourism): Array<ToursismObj> {
  let index = 0;
  return tourism.reduce((acc, item) => {
    index++;
    acc.push({ id: index, title: item });
    return acc;
  }, <Array<ToursismObj>>[]);
}

const result = toObject(tourism);

const filtered = result.filter((item) => !item.title.includes("turizmo"));

type VisitedPlaces = Array<number>;
const visitedPlaces: VisitedPlaces = [3, 5, 7];

let htmlResult: string = "";
const tarpai = result.map((item) => {
  return { ...item, title: item.title.split("_").join(" ") };
});
function getData() {
  let lentele: HTMLTableElement = <HTMLTableElement>(
    document.getElementById("lentele")
  );
  lentele.hidden = false;
  tarpai.forEach((item: ToursismObj) => {
    let eilute = lentele.insertRow(-1);
    let nr = eilute.insertCell(0);
    let pavadinimas = eilute.insertCell(1);
    let aplankyta = eilute.insertCell(2);
    nr.setAttribute("style", "border: 1px solid black;");
    pavadinimas.setAttribute("style", "border: 1px solid black;");
    aplankyta.setAttribute("style", "border: 1px solid black;");

    if (visitedPlaces.includes(item.id)) {
      htmlResult += nr.innerHTML = item.id.toString().strike();
      pavadinimas.innerHTML = item.title.strike();
      aplankyta.innerHTML = "taip";
    } else {
      htmlResult += nr.innerHTML = item.id.toString();
      pavadinimas.innerHTML = item.title;
      aplankyta.innerHTML = "";
    }
  });
  const el = document.getElementById("app");
  if (el) el.innerHTML = htmlResult;
}
function insertData() {
  const val: string = (document.getElementById("place") as HTMLInputElement)
    .value;
  tarpai.push({ id: tarpai.length + 1, title: val });
}
