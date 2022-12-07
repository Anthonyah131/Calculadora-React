import React, { useState } from "react";
import Buttons from "./Buttons";

const Calculadora = () => {
  const [resultado, setResultado] = useState(0);
  const [suma, setSuma] = useState("");

  const handleClickOperation = (buttonValue) => {
    let result = '';
    if (buttonValue && buttonValue === '=') { 
      return;
    } else if (buttonValue && buttonValue === 'C') {
      result = '';
      setResultado("0");
    } else if (buttonValue && buttonValue === 'borrar') {
      result = '';
    } else if (buttonValue && buttonValue === 'mod') {
      let resto = prompt('¿Por cuanto lo deseas %?');
      while (resto === null || /\D/.test(resto) || resto === "") {
        resto = prompt("Digite un número VÁLIDO: ");
      };
      setResultado(botonIgual() % resto);
    } else if (buttonValue && buttonValue === 'elevar') {
      let elevado = prompt('¿Por cuanto lo deseas elevar?');
      while (elevado === null || /\D/.test(elevado) || elevado === "") {
        elevado = prompt("Digite un número VÁLIDO: ");
      };
      setResultado(Math.pow(botonIgual(), elevado));
    } else if (buttonValue && buttonValue === 'raiz') {
      setResultado(Math.sqrt(botonIgual()));
    } else if (buttonValue && buttonValue === '<=' && suma !== '') {
      let val = suma;
      result = val.substring(0, val.length - 1);
    } else if (buttonValue && buttonValue !== '=' && buttonValue !== '<=') {
      result = suma+buttonValue;
    }
    setSuma(result);
  };

  const botonIgual = () => {
    if(suma) {
      let primerCaracter = suma.charAt(0);
      // console.log(primerCaracter);
  
      // if (!isNaN(primerCaracter) && primerCaracter) {
      //     console.log(primerCaracter);
      //     setResultado(0);
      //     setResultado(eval(suma)) ;
      //     setSuma("");
      // } else if (primerCaracter) {
      //     setResultado(eval(resultado + suma)) ;
      //     setSuma("");
      // }
  
      let cadena = "";
  
      if (!isNaN(primerCaracter) && primerCaracter) cadena = suma;
      else if (primerCaracter) cadena = resultado + suma;
  
      let division = cadena.split("/");
      // alert(cadena);
      let adiv = division[0];
      let mult1 = adiv.split("*");
      let amult = 1;
      for (let i = 0; i < mult1.length; i++) {
          let sumar = mult1[i].split("+");
  
          let restar = sumar[0].split("-");
          let res1 = restar[0];
          // alert(res1);
          for (let j = 1; j < restar.length; j++) {
              res1 = res1 - restar[j];
          }
          let sum1 = res1;
          for (let j = 1; j < sumar.length; j++) {
              restar = sumar[j].split("-");
              res1 = restar[0];
              for (let k = 1; k < restar.length; k++) {
                  res1 = res1 - restar[k];
              }
              sum1 = sum1 * 1 + res1 * 1;
          }
          amult = amult * sum1;
          // alert(amult);
      }
      // alert(amult);
      adiv = amult;
      for (let i = 1; i < division.length; i++) {
          let adivn = division[i];
          let multn = adivn.split("*");
          let sumar = multn[0].split("+");
  
          let restar = sumar[0].split("-");
          let res1 = restar[0];
          // alert(res1);
          for (let j = 1; j < restar.length; j++) {
              res1 = res1 - restar[j];
          }
          let sumn = res1;
          for (let h = 1; h < sumar.length; h++) {
              restar = sumar[h].split("-");
              res1 = restar[0];
              for (let k = 1; k < restar.length; k++) {
              res1 = res1 - restar[k];
              }
              sumn = sumn + res1 * 1;
          }
          adiv = adiv / sumn;
          for (let j = 1; j < multn.length; j++) {
              sumar = multn[i].split("+");
              restar = sumar[0].split("-");
              res1 = restar[0];
              // alert(res1);
              for (let k = 1; k < restar.length; k++) {
                  res1 = res1 - restar[k];
              }
              sumn = res1;
  
              for (let h = 1; h < sumar.length; h++) {
                  restar = sumar[h].split("-");
                  res1 = restar[0];
                  for (let k = 1; k < restar.length; k++) {
                      res1 = res1 - restar[k];
                  }
                  sumn = sumn * 1 + res1 * 1;
              }
              adiv = adiv * sumn;
          }
      }
      setResultado(adiv);
      setSuma("");
      return adiv;
    } else {
      return resultado;
    }
  };

  return (
    <section className="calculadora">
      <h4>Calculadora Anthony</h4>
      <div className="arriba">
        <div className="pantallaBorde">
          <div className="pantalla" id="idPantalla">
            <label type="number" className="pantallaTotal" id="total">
            {resultado}
            </label>
            <label type="number" className="pantallaSuma" id="suma">
            {suma}
            </label>
          </div>
        </div>
      </div>
      <Buttons handleClickOperation={handleClickOperation} botonIgual = {botonIgual}/>
    </section>
  );
};

export default Calculadora;
