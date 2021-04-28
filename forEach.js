const precios = [13.3, 25.4, 60, 1.5, 2.654];
const impuestos = 0.2;
const arr = [];

precios.forEach((precio, idx, precios) => {
  const precioIdx = { producto: idx + 1, precio: precio * (1 + impuestos) };
  arr.push(precioIdx);
});
console.log(arr);
