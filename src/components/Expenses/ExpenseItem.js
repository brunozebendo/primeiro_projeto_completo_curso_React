import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
/**Na aula 47 vai criar efetivamente a função de mudar o título, para isso, cria-se uma variável para
 * guardar o valor inicial, a let title, abaixo, que depois foi passada para o h2. No entanto, da forma que
 * o código está, o título não é mudado quando o botão é clicado. Isso se dá pela forma como o REACT é construído
 * onde cada componente é uma função e essa função só é chamada quando a página é carregada, para lidar
 * com essas mudanças de estado então será ensinado o conceito de state nas próximas aulas.
 * Já na aula 48 foi incluído a linha do import react acima para começarmos a trabalhar com o conceito de state
 * Para usar o useState() que é um hook do react, como vários outros que começam com a palavra use, primeiro,
 * o chama dentro do componente, mas não dentro do return ou de outra função aninhada. Primeiro, é passado o elemento
 * que vai ser trabalhado como um argumento para o useState, nesse caso, o title. Então esse useState é atribuído para 
 * uma variável que vai ser uma constante (const), e vai guardar dois valores, a variável que se quer modificar
 * e a função que será chamada para modificá-la, por convenção, com o nome setEonomedavariável.
 * Então, dentro da função para lidar com o clique, é chamada a função para modificar o título,
 * essa função, setTitle nesse caso, vai atribuir um novo valor ao campo e vai fazer com o componente
 * seja novamente renderizado.
 * Depois a função foi modificada para tirar o botão de uptade.
 */

const ExpenseItem = (props) => {
      
    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className='expense-item__descripition'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>          
        </Card>
        </li>
        );
}

export default ExpenseItem;