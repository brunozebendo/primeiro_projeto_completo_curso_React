/**A aula 38 desenvolveu mais um pouco o conceito de props, para isso, a função para mostra a data foi separada
 * da função de mostrar os itens, assim foi criada a função abaixo, repetindo que os componentes No React nada mais 
 * são que funções, desta forma foi copiada a função abaixo que estava anteriormente no outro módulo, foram dados nomes
 * classes para que pudessem ser aplicados CSS e no módulo ExpenseItem a função foi passada como <ExpenseDate date={props.date} />
 * Lembrando que esse é o conceito do REACT, aninhar funções e elementos e ir passando de um para o outro.
 */

import './ExpenseDate.css';

const ExpenseDate = (props) => {

    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return(

    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
    </div>  
)
}

export default ExpenseDate;