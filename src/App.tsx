import React, { useState } from 'react';
import Column from './components/Column';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Tarefa 1', content: 'Descrição da Tarefa 1', status: 'todo' },
    { id: 2, title: 'Tarefa 2', content: 'Descrição da Tarefa 2', status: 'todo' },
    { id: 3, title: 'Tarefa 3', content: 'Descrição da Tarefa 3', status: 'todo' },
  ]);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: `Tarefa ${tasks.length + 1}`,
      content: `Descrição da Tarefa ${tasks.length + 1}`,
      status: 'todo',
    };
    setTasks([...tasks, newTask]);
  };

  const updateTaskContent = (id: number, newContent: string) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, content: newContent } : task
      )
    );
  };

  const startTask = (id: number) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, status: 'in-progress' } : task
      )
    );
  };

  const completeTask = (id: number) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, status: 'done' } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-4">
      <h1 className="text-2xl font-bold text-center mb-8">Meu Quadro Kanban</h1>
      <div className="flex gap-4 p-8">
        <Column
          title="Para Fazer"
          cards={tasks.filter((task) => task.status === 'todo')}
          onAddTask={addTask}
          onUpdateTaskContent={updateTaskContent}
          onStartTask={startTask}
        />
        <Column
          title="Em Progresso"
          cards={tasks.filter((task) => task.status === 'in-progress')}
          onUpdateTaskContent={updateTaskContent}
          onCompleteTask={completeTask}
        />
        <Column
          title="Concluído"
          cards={tasks.filter((task) => task.status === 'done')}
          onUpdateTaskContent={updateTaskContent}
        />
      </div>
    </div>
  );
}

export default App;