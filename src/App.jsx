import { useState } from 'react';

export default function App() {
  const [tarefaTexto, setTarefaTexto] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (e) => {
    e.preventDefault();
    if (tarefaTexto.trim() === '') return;

    setTarefas((prev) => [...prev, tarefaTexto.trim()]);
    setTarefaTexto('');
  }; 

  const removerTarefa = (indexParaRemover) => {
    setTarefas((prev) => prev.filter((_, index) => index !== indexParaRemover));
  };

  return (
    <div className="container">
      <h1>Mini Lista de Tarefas</h1>

      <form onSubmit={adicionarTarefa} className="form-tarefa">
        <input
          type="text"
          placeholder="Digite uma nova tarefa..."
          value={tarefaTexto}
          onChange={(e) => setTarefaTexto(e.target.value)}
        />
        <button type="submit" className="btn-adicionar">
          Adicionar
        </button>
      </form>

      <ul className="lista-tarefas">
        {tarefas.length === 0 ? (
          <p className="mensagem-vazia">Nenhuma tarefa cadastrada.</p>
        ) : (
          tarefas.map((tarefa, index) => (
            <li key={index} className="item-tarefa">
              <span>{tarefa}</span>
              <button
                onClick={() => removerTarefa(index)}
                className="btn-remover"
              >
                Remover
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}