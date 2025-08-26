import {sumar,dividir,restar} from "./calculadora.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });

  it("deberia dividir dos numeros", () => {
    expect(dividir(4, 2)).toEqual(2);
  });

  it("deberia dividir dos numeros cualquiera", () => {
    expect(dividir(10, 2)).toEqual(5);
  });

  it("deberia restar dos numeros ", () => {
    expect(restar(10, 2)).toEqual(8);
  });

  it("deberia restar dos numeros cualquiera", () => {
    expect(restar(10, 9)).toEqual(1);
  });
});


