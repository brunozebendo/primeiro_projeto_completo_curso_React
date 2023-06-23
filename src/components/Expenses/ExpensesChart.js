/**Na aula 93 é criado esse componente que vai baicamente passar o conteúdo
 * do ChartBar, ou seja, os valores e a lógica das barras, abaixo da barra vai ficar o nome
 * do mês e dentro dela a "altura" de acordo com o valor do item naquele mês. Portanto foi criado
 * a variável chartDataPoints para guardar um array com esses valores.
 */

import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {

    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];
/**Aqui é feita uma iteração pelo array do expenses que, acho, está no EspensesList, assim
 * a variável expenseMonth vai guardar a informação do mês daquela despesa (expense) e 
 * chartDataPoints (que é o array acima) vai transformar isso em um valor e depois vai somar
 * o total de determinado valor. Como o array do chartDataPoints e o array dos meses vão de
 * 0 a 11, foi usado [] pois o valor apurado da despesa vai equivaler ao do mês correspondente
 * (foi o que entendi...)
 */
    for (const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }
/**aqui é retornado o array acima criado, lembrando que dataPoints é o nome que é esperado como
 * props no componente Chart.js, ou seja o return aqui serve para passar para o chart o que 
 * vai ser mostrado em tela
 */
    return <Chart dataPoints = {chartDataPoints} />;
    };

export default ExpensesChart;