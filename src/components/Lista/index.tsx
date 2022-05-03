import Item from './Item';
import style from './Lista.module.scss';

import { ITarefa } from '../../types/tarefa'
import { isExternalModule } from 'typescript';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void 
}

function Lista({ tarefas, selecionaTarefa }: Props){
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do Dia </h2>
            <ul>
                {
                    tarefas.map((item) => (
                        <Item 
                        selecionaTarefa={ selecionaTarefa }
                        key = { item.id }
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