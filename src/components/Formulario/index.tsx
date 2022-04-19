import React from 'react';
import Botao from '../Botao';
import { ITarefa } from '../../types/tarefa'
import { v4 as uuidv4 } from 'uuid' // Biblioteca q cria IDs aleatórios

import style from './Formulario.module.scss';

class Formulario extends React.Component<{ 
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    // State da classe
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    /* Não precisa escrever "function"
        Esse "evento" é do submit do formulário
        oq está entre <> poderia ser retirado, foi só pra especificar bastante
    */   
    addTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                { 
                    ...this.state ,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        )
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={ this.addTarefa.bind(this) }>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label><br/>
                    <input 
                        type="text" 
                        name="tarefa" 
                        id="tarefa" 
                        value={ this.state.tarefa }
                        // Sem o onChange, a escolha do valor não muda no front
                        onChange={ evento => this.setState({ ...this.state, tarefa: evento.target.value }) }
                        placeholder="O quê você quer estudar" 
                        required
                    />
                </div>
                <br/><br/>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label><br/>
                    <input 
                        type="time" 
                        step="1" 
                        name="tempo" 
                        id="tempo" 
                        value={ this.state.tempo }
                        onChange={ evento => this.setState({ ...this.state, tempo: evento.target.value }) }  
                        min="00:00:00" 
                        max="01:30:00" 
                        required
                    />
                </div>

                <Botao type="submit"> Adicionar </Botao>
            </form>
        )
    }
}

export default Formulario;