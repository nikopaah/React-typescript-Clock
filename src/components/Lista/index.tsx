import Item from './Item';
import style from './Lista.module.scss';

import { ITarefa } from '../../types/tarefa'

function Lista({ tarefas }: { tarefas: ITarefa[] }){
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do Dia </h2>
            <ul>
                {
                    tarefas.map((item, index) => (
                        <Item 
                        key = { index }
                            { ...item }
                            /* ou
                            tarefa = { item.tarefa }
                            tempo = { item.tempo } */
                        />
                    ))
                }
            </ul>
        </aside>
    )
}

export default Lista;