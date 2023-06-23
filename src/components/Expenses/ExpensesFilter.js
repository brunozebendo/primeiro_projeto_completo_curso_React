/**Esse módulo vai ser responsável por criar um drop down constando alguns anos para serem selecionados,
 * O primeiro passo é capturar as mudanças ocorridas na tag select, ou seja, guardar qual dos valores foi
 * selecionado. Para isso foi inserido um onChange dentro da tag e dentro dele é apontada uma função,
 * acima dele criada, que irá capturar o valor da tag. Portanto, repetindo, o onChange captura
 * qualquer mudança no estado no elemento tag e a função ali apontada diz o que fazer com essa informação.
 * Então foi adicionada uma tag no módulo Expenses.js para que ele mostre o componente dentro do Card
 * que criamos nas aulas anteriores. Também dentro do Expense é criada uma função (filterChangeHandler)
 * para capturar o valor selecionado, foi importado o {useState} e também lá foi criada
 * a função para guardar o estado  const [filteredyear, setFilteredYear] = useState('2020')
 * Então a função criada para lidar com a mudança vai receber esse estado alterado, abaixo a função:
 *  filterChangeHandler = selectedYear => {
 *   selectedYear(selectedYear);
 * Então, aqui dentro da tag ExpenseFilter é criada uma variável para guardar o estado inicial do prop
 * e ela é devolvida aqui dentro da tag select através do código value={props.selected}, ou seja, 
 * foi usado o two way binding para pegar um valor inicial selecionada e fazê-lo aparecer na tela
 * 
 */
import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )
};

export default ExpensesFilter;