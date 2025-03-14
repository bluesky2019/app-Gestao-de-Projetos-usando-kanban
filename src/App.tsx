import React from 'react';
import Column from './components/Column.tsx'; // Verifique este caminho
import './App.css';

function App() {
  const cards = [
    { id: 1, title: 'Tarefa 1' },
    { id: 2, title: 'Tarefa 2' },
    { id: 3, title: 'Tarefa 3' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Meu Quadro Kanban</h1>
      <div className="flex gap-4">
        <Column title="Para Fazer" cards={cards} />
        <Column title="Em Progresso" cards={[]} />
        <Column title="Concluído" cards={[]} />
      </div>
    </div>
  );
}

export default App;