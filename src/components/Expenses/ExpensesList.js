/**Revendo o que foi criado na aula 63 vamos começar a deixar o aplicativo dinâmico, para isso é necessário renderizar o expenses que
 * foi criado no módulo App.js e lá passado como items, assim: <Expenses items={expenses}/> e aqui será passado como props.
 * Então, a lógica para criar de forma dinâmica os elementos a serem exibidos é a seguinte:
 * o props.items vai passar os dados que estão digitados no items no módulo App, o map vai iterar por esse array lá criado,
 * o (expense) é passado como um argumento para a própria função, ou seja, esse nome não faz referência um item criado em outro
 * lugar, então, dentro da tag <ExpenseItem /> que também está sendo criada dinâmicamente, são criados os items que receberão
 * os dados, o esquema é o nome do item={expense.o nome do item no array}, por exemplo:  title={expense.title}
 *
 * Já na aula 67 é criado esse componente para retirar a lógica de composição dos itens de dentro
 * do componente Expenses.js. Então tem que ser feitas as devidas importações de componentes e CSS.
 * A mudança aqui se deu na lógica do lenght, antes ele renderizava se fosse maior que zero, agora, 
 * se for igual a zero ele mostra (deveria mostrar) a mensagem que está no h2, a lógica é que como agora
 * é um componente separado, pode comparar o componente inteiro e não só a parte que estava sendo renderizada.
 * Por fim, dentro do ExpenseItem o conteúdo retornado foi envolto em uma <li> para fins semânticos(???)
 */

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';


const ExpensesList = (props) => {
  if (props.items.lenght === 0) {
      return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
      }

return (
<ul    className="expenses-list">
    {props.items.map((expense) => (
      <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      />
      ))}
</ul>
);
    };
export default ExpensesList;