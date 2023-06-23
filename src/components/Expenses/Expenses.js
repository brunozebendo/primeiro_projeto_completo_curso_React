

import React, { useState } from "react";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";


const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020')


  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
/**Na tarefa 3 foi criado o código abaixo, cujo objetivo é filtrar os itens que irão aparecer na tela pelo ano selecionado
 * no dropdown criado no componente ExpensesFilter, ou seja, só aparecerão os itens do determinado ano selecionado. Lembrando
 * que o componente ExpensesFilter tem a lógica do ano selecionado aqui nesse componente no código acima e que é devolvida para
 * lá por meio de props. Portanto, o selectedYear já está aqui neste componente, assim, o código abaixo cria a função filteredExpenses
 * que receberá o item filtrado (filter é uma função build in que criará um novo array com base no critério estabelecido)
 * que será o item dentro do array expense, cujo item data,
 * mas filtrado por ano convertido para string, seja igual ao item filteredYear (o ano selecionado), é necessária a conversão
 * para string para a comparação ser feita corretamento. 
 * Por fim, a filteredExpenses é abaixo repassada dentro do return da DIV, ou seja, dentro do que será mostrado em tela.
 */
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
/**Na aula 66 é inserido o conceito de operação ternária, no material extra explico melhor as diferentes sintaxes,
 * também na aula foi mostrada as possibilidades de inserir a lógica dentro do return, no entanto, o professor optou
 * por colocar a lógica antes e só apontar para a variável dentro do return, assim, ele fica mais limpo. Portanto,
 * o componente a princípio mostra a mensagem que não há componentes para aquele determinado ano, mas se o comprimento
 * do array for maior que zero, ou seja, se houverem componentes, é aplicada a função para mostrá-los na tela. 
 *depois, o expensesContent foi removido para o componente ExpenseList*/
  

    return (
    <div>         
      <Card className="expenses">
        <ExpensesFilter
         selected={filteredYear}
         onChangeFilter={filterChangeHandler}
         />
         <ExpenseChart expenses={filteredExpenses}/>
         <ExpensesList items={filteredExpenses} />
    </Card>
    </div>)
}

export default Expenses;