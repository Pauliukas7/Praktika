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

let htmlResult: string = "";
result.forEach((item: ToursismObj) => {
  htmlResult += `id: ${item.id}, title: ${item.title}<br>`;
});

const el = document.getElementById("app");

if (el) el.innerHTML = htmlResult;
