import React from 'react';

interface Task {
  id: number;
  title: string;
}

interface ColumnProps {
  title: string;
  tasks: Task[];
  onAddTask: () => void;
}

const Column: React.FC<ColumnProps> = ({ title, tasks, onAddTask }) => {
  return (
    <div className="flex-1 bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <button
        onClick={onAddTask}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Criar Tarefa +
      </button>
      {tasks.map((task) => (
        <div key={task.id} className="bg-gray-50 p-3 rounded shadow mb-2">
          {task.title}
        </div>
      ))}
    </div>
  );
};

export default Column;
