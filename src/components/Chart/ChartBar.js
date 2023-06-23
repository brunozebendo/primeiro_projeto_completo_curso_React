/**Aula 92 começa a criar as barras de componente, é um gráfico de barras horizontais que vai receber
 * os valores dos produtos...acho
 * A função ChartBar abaixo vai criar a variável barFillHeight para controlar a altura das barras
 * se a altura máxima for maior que 0, então o valor da barra vai ser dividido pelo valor máximo * 100,
 * ou seja, vai achar um percentual, creio que para equivaler todas as barras.
 * Já dentro da div "char-bar_inner" foi passado um style, que é uma função do JS puro, mas como
 * vai ser passado de maneira dinâmica, é incluída mais uma chave. Assim, a altura (height) vai ser
 * determinada dinâmicamente pela função acima.
 */

import React from "react";

import './ChartBar.css';

const ChartBar = (props) => {
    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round ((props.value / props.maxValue) * 100) + '%';
    }


    return (<div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill"
            style={{ height: barFillHeight}}
            ></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>);
};

export default ChartBar;