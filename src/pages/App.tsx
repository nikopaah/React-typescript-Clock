import React, { useState } from 'react';
import { Cronometro } from '../components/Cronometro'
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefa } from '../types/tarefa';

import style from './App.module.scss';

function App() {
  /* Estado, Função que muda o estado    
  const [tarefas, setTarefas] = useState([
    {
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: 'JS',
        tempo: '01:00:00'
    },{
        tarefa: 'TypeScript',
        tempo: '03:00:00'
    }
  ]);*/

  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={ setTarefas }/>
      <Lista 
        tarefas={ tarefas }
        selecionaTarefa={ selecionaTarefa }
      />
      <Cronometro selecionado={ selecionado }/>
    </div>
  );
}

export default App;
