/**Na aula 64 o código foi modificado para receber os itens de maneira dinâmica.
 * Primeiro, foi importado o useState, necessário para atualização do estado de componentes.
 * Lembro que na aula anterior foi criada a lógica para deixar os itens dinâmicos no componente
 * Expenses.js, lá o  seguinte código vai iterar por cada novo item inserido:
 *  {props.items.map((expense) => (
        <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
        ))
*Assim, aqui herdamos o expense que será passado como argumento para função que controla
*a adição de novos elementos:  const addExpenseHandler = expense =>
*Então, os itens iniciais foram salvos na variável DUMMY_EXPENSES, ou seja, são itens
stateless e por isso foi dado esse nome. Serão itens mostrados toda vez que o site for
iniciado.
* Depois foi criado dentro da função const = App a função de controle de estado que recebe
esse DUMMY_EXPENSES como estado inicial.
* Agora,  essa função que controle a adição de novos itens recebe uma função, onde, repito,
o expense é o parâmetro recebido do componente Expenses.js, e após a => o setExpenses, ou seja, o 
estado alterado dos expenses, recebe o (prevExpenses) que é o estado prévio do array, conforme depois
é passado com o spread operator ... para copiar o array anterior.
* Portanto, há uma função dentro da função visando receber o novo item, mas manter o array anterior.
* Prestar atenção na sintaxe!
*/

import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2',
   title: 'New TV', 
   amount: 799.49,
   date: new Date(2021, 2, 12)
   },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

     return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {<Expenses items={expenses}/>}
    </div>
  );
}

export default App;
