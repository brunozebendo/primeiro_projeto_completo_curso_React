/**Na aula 91 vamos começar a inserir o último elemento que falta que é a barra de gráficos.
 * Serão criados dois elementos o chart em si e outro para as barras, por isso já foi importado
 * o ChartBar que ainda será criado. Então é criado o componente que vai ser dinâmico e vai mapear
 * o dataPoint (que ainda será criado) e vai retornar os props dentro da div <ChartBar>
 * 
 */

import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';
/**Na aula 93 é acrescentada a lógica abaixo para achar o maior valor, já que
 * agora foi criado um array no ExpenseChart com o aumont (valor total de despesas) de cada mês
 * Então, a lógica é que o map vai iterar pelo array, transformar o conteúdo em um valor
 * (reparar na identação e na arrow function) e aí a TotalMaximum vai achar o valor máximo
 * dentro do array. Aqui foram usados o spread operator para tornar os elementos do array
 * em elementos individuais. Por fim, esse totalMaximum é passado como argumento
 * no MaxValue que vai ser o que vai servir para fazer o cálculo que está no Chartbar
 * No Expenses.js é passado o
 * <ExpenseChart expenses={filteredExpenses}
 * localizando onde o filtro deve ficar localizada, sendo o filteredExpenses os dados já filtrados
 * por ano
 */
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
    <div className="chart">
        {props.dataPoints.map((dataPoint) => (
             <ChartBar
              key={dataPoint.label}   
              value={dataPoint.value}
              maxValue={totalMaximum}
              label={dataPoint.label}
               />
              ))}
    </div>
    );
        };

export default Chart;