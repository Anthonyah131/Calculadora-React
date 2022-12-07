import React from "react";

const Buttons = (props) => {

    const handleClickOperation = (event)=>{
        props.handleClickOperation(event.target.value)
    }

    return (
        <div className="abajo">
            <div className="contenedorVacio"></div>
            <div className="contenedorbotones">
                <div className="col">
                    <button className="boton"></button>
                    <button className="boton" onClick={handleClickOperation} value="elevar">n^</button>
                    <button className="boton" onClick={handleClickOperation} value="raiz">√</button>
                    <button className="boton"></button>
                    <button className="boton"></button>
                    <button className="boton"></button>
                    <button className="boton"></button>
                </div>
                <div className="col">
                    <button className="boton" onClick={handleClickOperation} value="3.14">π</button>
                    <button className="boton"></button>
                    <button className="boton"></button>
                    <button className="botonn" name="num" onClick={handleClickOperation} value={7}>7</button>
                    <button className="botonn" name="num" onClick={handleClickOperation} value={4}>4</button>
                    <button className="botonn" name="num" onClick={handleClickOperation} value={1}>1</button>
                    <button className="botonn"></button>
                </div>
                <div className="col">
                    <button className="boton"></button>
                    <button className="boton"></button>
                    <button className="boton"></button>
                    <button className="botonn" name="num" onClick={handleClickOperation} value={8}>8</button>
                    <button className="botonn" name="num" onClick={handleClickOperation} value={5}>5</button>
                    <button className="botonn" name="num" onClick={handleClickOperation} value={2}>2</button>
                    <button className="botonn" name="num" onClick={handleClickOperation} value={0}>0</button>
                </div>
                <div className="col">
                    <button className="boton" onClick={handleClickOperation} value="C">C</button>
                    <button className="boton"></button>
                    <button className="boton"></button>
                    <button className="botonn" name="num" onClick={handleClickOperation} value={9}>9</button>
                    <button className="botonn" name="num" onClick={handleClickOperation} value={6}>6</button>
                    <button className="botonn" name="num" onClick={handleClickOperation} value={3}>3</button>
                    <button className="botonn" onClick={handleClickOperation} value=".">.</button>
                </div>
                <div className="col">
                    <button className="boton" onClick={handleClickOperation} value="borrar">borrar</button>
                    <button className="boton" onClick={handleClickOperation} value="mod">mod</button>
                    <button className="boton" onClick={handleClickOperation} value="/">/</button>
                    <button className="boton" onClick={handleClickOperation} value="*">*</button>
                    <button className="boton" onClick={handleClickOperation} value="-">-</button>
                    <button className="boton" onClick={handleClickOperation} value="+">+</button>
                    <button className="boton" onClick={props.botonIgual} value="=">=</button>
                </div>
            </div>
        </div>
    );
};

export default Buttons;
