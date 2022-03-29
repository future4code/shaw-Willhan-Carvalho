import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(),
        texto: "Arrumar casa",
        completa: true
      },

      {
        id: Date.now() + 1,
        texto: "Limpar quintal",
        completa: false
      }
      
    ],
    inputValue: '',
    filtro: ''
  }

  salvarLocalStorage = () => {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
  };

  buscarLocalStorage = () => {

    const receberTarefa = localStorage.getItem("ListaTarefas");
    const tarefasNovas = JSON.parse(receberTarefa)
    this.setState({
      ListaTarefas: tarefasNovas || []})
};

componentDidUpdate = () => {
  this.salvarLocalStorage();

};

componentDidMount = () => {
  this.buscarLocalStorage();
};

onChangeInput = (event) => {
  this.setState({ inputValue: event.target.value })
}

criaTarefa = () => {
  const novaTarefa = {
    id: Date.now(),
    texto: this.state.inputValue,
    completa: false
  }

  const novaTarefaParaFazer = [...this.state.tarefas, novaTarefa]
  this.setState({
    tarefas: novaTarefaParaFazer,
    inputValue: ''
  })
}

selectTarefa = (feitoId) => {
   const novoStatusTarefa = this.state.tarefas.map((feito) => {
    if (feitoId === feito.id) {
      const novoStatus = {
        ...feito,
        completa: !feito.completa
      }
      return novoStatus
    } else {
      return feito
    }
  })

  this.setState({ tarefas: novoStatusTarefa })
}

onChangeFilter = (event) => {
  this.setState({ filtro: event.target.value })
}

render() {
  const listaFiltrada = this.state.tarefas.filter(tarefa => {
    switch (this.state.filtro) {
      case 'pendentes':
        return !tarefa.completa
      case 'completas':
        return tarefa.completa
      default:
        return true
    }
  })

  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <InputsContainer>
        <input value={this.state.inputValue} onChange={this.onChangeInput} />
        <button onClick={this.criaTarefa}>Adicionar</button>
      </InputsContainer>
      <br />

      <InputsContainer>
        <label>Filtro</label>
        <select value={this.state.filter} onChange={this.onChangeFilter}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
      </InputsContainer>
      <TarefaList>
        {listaFiltrada.map(tarefa => {
          return (
            <Tarefa
              completa={tarefa.completa}
              onClick={() => this.selectTarefa(tarefa.id)}
            >
              {tarefa.texto}
            </Tarefa>
          )
        })}
      </TarefaList>
    </div>
  )
}
}

export default App