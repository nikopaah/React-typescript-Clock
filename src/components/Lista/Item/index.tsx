import { ITarefa } from '../../../types/tarefa';
import style from '../Lista.module.scss';

export default 
function Item({ tarefa, tempo, selecionado, completado, id }: ITarefa){
    return (
        <li className={style.item}> 
        {/* Esse key é do react, lembra o ID */}
            <h3> { tarefa } </h3>
            <span> {tempo }</span>
        </li>
    )
}