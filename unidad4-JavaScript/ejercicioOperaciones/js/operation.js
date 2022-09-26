const number1 = +prompt("Ingrese el primer numero");
const number2 = +prompt("Ingrese el segundo numero");
let result;
let operation;
do {
  operation = prompt(
    "Ingrese una operación válida:1.Suma 2.Resta 3.Multiplicacion 4.Division"
  );
} while (
  operation !== "1" &&
  operation !== "2" &&
  operation !== "3" &&
  operation !== "4"
);
if (operation === "4" && number2 === 0) alert("No se puede dividir por 0");
else {
  switch (operation) {
    case "1":
      result = number1 + number2;
      break;
    case "2":
      result = number1 - number2;
      break;
    case "3":
      result = number1 * number2;
      break;
    case "4":
      result = number1 / number2;
      break;
  }
  alert(`El resultado de la operacion es ${result}`);
}
