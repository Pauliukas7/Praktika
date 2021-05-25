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
const result = getLithuaniaPlaces(tourism, template);

document.getElementById("app")?.append(result.toString());
