import React, { useState } from 'react';
import Column from './components/Column';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<{ id: number; title: string; status: string }[]>([
    { id: 1, title: 'Tarefa 1', status: 'todo' },
    { id: 2, title: 'Tarefa 2', status: 'in-progress' },
    { id: 3, title: 'Tarefa 3', status: 'done' },
  ]);

  const addTask = (status: string) => {
    const newTask = {
      id: tasks.length + 1,
      title: `Tarefa ${tasks.length + 1}`,
      status,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Meu Quadro Kanban</h1>
      <div className="flex gap-4">
        <Column
          title="Para Fazer"
          tasks={tasks.filter((task) => task.status === 'todo')}
          onAddTask={() => addTask('todo')}
        />
        <Column
          title="Em Progresso"
          tasks={tasks.filter((task) => task.status === 'in-progress')}
          onAddTask={() => addTask('in-progress')}
        />
        <Column
          title="Concluído"
          tasks={tasks.filter((task) => task.status === 'done')}
          onAddTask={() => addTask('done')}
        />
      </div>
    </div>
  );
}

export default App;
