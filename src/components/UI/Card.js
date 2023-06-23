/**Na aula 39 foi criada esse CARD que é um nome comum para criar um tipo de container com bordas arredondadas
 * drop shadows e elementos em comum. Portanto, mais uma vez, aqui se está separando por módulos, dessa vez
 * o container onde os itens vão ficar inseridos. Então, no módulo ExpenseItem.js foi inserido o Card ao invés de uma div
 * ou seja, os itens devem aparecer dentro desse card q está sendo criado aqui, mas não apareceu nada, 
 * por isso foi criado esse props.children que é uma forma de permitir que componentes sejam inseridos direto
 * no "html", children é um nome reservado para que o sistema entenda que o conteúdo vai ser o que estiver entre as tags,
 * ou seja, no caso o que estiver entre a tag CLASS no módulo EspenseItem.js
 * . Depois foi criada uma variável classes para guardar os nomes da classe de maneira dinâmica. Pelo que entendi, os 
 * atributos css das diferentes classes serão adotados dinâmicamente. Atentar que há um espaço após o 'card ', pois
 *  sem ele, não funcionou. Portanto, a tag que está no return do outro módulo, como nesse <Card className="expenses">,
 * agora vai ser aplicado de maneira dinâmica. 
*/
import "./Card.css"

const Card = (props) => {

    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;