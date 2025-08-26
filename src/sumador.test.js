import {sumar,dividir} from "./calculadora.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });

  it("deberia dividir dos numeros", () => {
    expect(dividir(4, 2)).toEqual(2);
  });
});


