function minusOneCycle(a: number): number {
  for (let b = a; b > 0; b--) {
    console.log(a + " skaičius mažinamas po 1: " + b);
  }
  return a;
}

minusOneCycle(10);
