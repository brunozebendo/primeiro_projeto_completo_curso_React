import React, {useState} from 'react';

import "./ExpenseForm.css"
/**Esse arquivo vai controlar a forma dos novos itens a serem inseridos, a novidade
 * aqui é min e o step que são uma forma de se controlar o arquivo de entrada do input.
 * Na aula 52 foi inserido o onChange no botão de input, e foi criada a função que vai
 * acontecer quando houver alguma mudança naquele botão. Então a função foi escrita
 * para lidar com o evento e capturar o valor que será digitado dentro do input
 * e mostrá-lo no console, o que deve ser modificado nas próximas aula.
 * Na aula 53 foi importado o useState para guardar o valor que será digitado pelo usuário
 * Então, o procedimento padrão é criar a variável const abaixo que irá criar uma variável
 * e a sua função de alteração do estado desse variável, normalmente chamada como set e o nome da variável
 * então se chama o useState com estado original da variável, nesse caso, nenhum.
 * Depois, dentro da varíavel que vai guardar o valor digitado pelo usuário a função do
 * useState é chamada. O mesmo é feito para o amount e o date, ou seja, cada item cuidando do
 * seu estado, tema que será aprofundado na próxima aula.
 * Assim, na aula 54 foi mostrada uma alternativa, ao invés de cada componente guardar o seu estado,
 * como no código comentado, foi criado um useState para os 3 elementos do painel, no entanto,
 * nesses casos é preciso usar o ... para copiar os outros dois elementos a cada chamada do método,
 * pois se não, os elementos não serão atualizados.
 * Já na aula 55 foi mostrada uma alternativa para o código da aula anterior que é
 * chamar uma função anônima que é o que se usa normalmente quando se trabalha com um elemento que depende
 * de um estado prévio, os dois modos de chamar o código irão funcionar, mas o segundo, que usa (prevState),
 * garante que o estado chamado será o último, pois, como o React não atualiza automaticamente o estado,
 * mas agenda essa mudança, é possível que hajam problemas em códigos grandes.
 * Por fim, o professor comentou essas alternativas e voltou ao controle de estado inicial
 * Na aula 56 foi explicado que quando se coloca um evento onClick em um button, todo form é reenviado,
 * para se evitar isso, foi criada uma função chamada de submitHandle e passada para o <form> 
 * para lidar com a mudança e dentro dessa função foi passada uma função de JS event.preventDefault(); que evitará
 * o reenvio automático do formulário no clique do botão. Então, abaixo da função foram criadas variáveis para receber
 * os dados que foram digitados pelo usuário, reparar no esquema nomedavariável: o nome do estados passado aqui 
 * no começo. O date também tem um formato um pouco diferente
 * Na aula 57 foi ensinado o conceito de two-way binding que é uma das vantagens de se usar o useState, porque,
 * além de receber informações, é possível devolve-las. Para fazer isso, foi passado um value para cada input,
 * o value já é um valor padrão do input, aqui apenas foi passado o valor inicial setado para a variável,
 * um valor vazio nesse caso.
 */
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
 
   /*  const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    })
 */
    const titleChangeHandler = (event) => {
       setEnteredTitle(event.target.value);
       /*  setUserInput({
            ...userInput,
            enteredTitle: event.targe.value
        });
    }; */
   /*  setUserInput((prevState) =>{
        return { ...prevState, enteredTitle: event.target.value});*/
    };

    const amountChangeHandler = (event) => {
       setEnteredAmount(event.target.value);
       /*  setUserInput({
            ...userInput,
            enteredAmount: event.targe.value
        });*/
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredDate: event.targe.value
        }); */
    };
    const submitHandler = (event) => {
        event.preventDefault();
/**No enteredAmount abaixo foi incluído um + pois estava dando um bug e, aparentemente,
 * o + transforma a string em um número.
 */
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
          };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                     type="text"
                     value={enteredTitle}
                     onChange={titleChangeHandler} />
                </div>
            </div>
            <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Amount</label>
                <input
                type="number"
                min="0.01" step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler} />
            </div>
        </div>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Date</label>
                <input
                type="date"
                min='2019-01-01'
                max='2022-12-31'
                value={enteredDate}
                onChange={dateChangeHandler}/>
            </div>
        </div>      
        <div className="new-expense__actions">
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;