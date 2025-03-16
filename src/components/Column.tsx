import React from 'react';

interface Card {
  id: number;
  title: string;
  content: string;
}

interface ColumnProps {
  title: string;
  cards: Card[];
  onAddTask?: () => void;
  onUpdateTaskContent: (id: number, newContent: string) => void;
  onStartTask?: (id: number) => void;
  onCompleteTask?: (id: number) => void; // Nova prop para o botão "Concluir"
}

const Column: React.FC<ColumnProps> = ({ title, cards, onAddTask, onUpdateTaskContent, onStartTask, onCompleteTask }) => {
  let bgColor = 'bg-gray-100'; // Cor padrão
  if (title === 'Para Fazer') bgColor = 'bg-blue-100';
  if (title === 'Em Progresso') bgColor = 'bg-yellow-100';
  if (title === 'Concluído') bgColor = 'bg-green-100';

  return (
    <div className={`${bgColor} p-4 rounded-lg w-64`}>
      <h2 className="font-bold mb-4">{title}</h2>
      {onAddTask && (
        <button
          onClick={onAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 w-full"
        >
          Criar Tarefa +
        </button>
      )}
      {cards.map((card) => (
        <div key={card.id} className="bg-white p-2 rounded shadow mb-2">
          <textarea
            value={card.content}
            onChange={(e) => onUpdateTaskContent(card.id, e.target.value)}
            className="w-full p-1 rounded border border-gray-300 mb-2"
            placeholder="Digite a descrição da tarefa..."
          />
          {title === 'Para Fazer' && onStartTask && (
            <button
              onClick={() => onStartTask(card.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
              Iniciar
            </button>
          )}
          {title === 'Em Progresso' && onCompleteTask && (
            <button
              onClick={() => onCompleteTask(card.id)}
              className="bg-green-500 text-white px-4 py-2 rounded w-full"
            >
              Concluir
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Column;