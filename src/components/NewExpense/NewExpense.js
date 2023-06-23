import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
/**Na aula 51 vai ser criada uma função para incluir novos itens, então foi criado
 * uma nova pasta e dentro dessa nova pasta, um novo arquivo js. Depois, foi criado ainda
 * mais um arquivo js com um css relacionado. A lógica aqui é que um arquivo cuide
 * da inclusão do novo item e outro cuida da forma dele.
 * Então foi criada a lógica do formulário no arquivo do ExpensForm, que foi aqui importado
 * e esse arquivo aqui vai ser exportado para o app.js que será importado para o index.js. (aulas 52 a 57 no expense form)
 * Na aula 58 é explicado como passar elementos de um módulo filho para um pai. A lógica é que os
 * dados que serão coletados do usuário não serão usados no ExpenseForm, mas aqui no NewExpense e depois App
 * component, ou seja, o usuário insere os dados no formulário, esse dados tem que ser capturados e utilizados em
 * outro local, respeitando a hierarquia de filho para pai, nesse caso. Para passar os elementos, ao invés de 
 * props, usaremos funções. Então foi criada a função onSaveExpenseData para que seja disparada uma função quando
 * algo acontecer no módulo ExpenseForm, é uma convenção começar com on.... Então foi criada função saveExpenseDataHandler
 * com o parâmetro que é um parâmetro aqui criado e que passa a ser obrigatório para a função. Então é copiado
 * através dos ... o objeto criado no módulo ExpenseForm.js que coleta todos os dados digitados. Também foi
 * criado um id só para salvar na demonstração. A função é então passada como valor dentro do return/ExpenseForm.
 * Então, essa função onsaveExpenseData é passada como prop dentro do ExpenseForm, acho que para permitir o acesso
 * naquele módulo.
 * Por fim é feita a mesma coisa no App.js, é criada uma função, que é apontada no return e que é passada como
 * props no NewExpense.js
 * Na atividade 04, após a aula 90, é inserido o código para que o formulário de inserção de novos itens seja
 * dinâmico e só apareça após o clique no botão de "Add New Expense", para isso foi usado a lógica ternária
 * que vou mostrar abaixo. Ressalto que o código para mostrar o formulário está aqui, apesar do formulário
 * está em outro componente, por isso lá foi incluído um segundo botão de cancel e foi passado por props
 * a função que faz o formulário sumir de novo.  
 */

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()   
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
 /**O código abaixo cria uma lógica ternária para a função setIsEditing que funciona
  * como controlador e é setado para false e vai ser modificado a depender da função que vai
  * ser chamada. */   
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };
/**A lógica abaixo é se o isEditing for true (o contrário do estado inicial) o botão aparece
 * e se ele for clicado muda o estado, a outra opção é o formulário aparecer. A variável onCancel foi criada
 * só para para apontar para a função que será passada como props no botão de cancel no formulário,
 * ou seja, como os dois botões fazem a mesma coisa que é o formulário sumir, ela foi passada para o botão.
 */
    return (
    <div className='new-expense'>
        {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
        )}
        {isEditing && (
        <ExpenseForm
         onSaveExpenseData={saveExpenseDataHandler}
         onCancel={stopEditingHandler}
        />
    )}
        </div>
        );
    };

export default NewExpense;