import React from 'react';

interface Card {
  id: number;
  title: string;
}

interface ColumnProps {
  title: string;
  cards: Card[];
}

const Column: React.FC<ColumnProps> = ({ title, cards }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg w-64">
      <h2 className="font-bold mb-4">{title}</h2>
      {cards.map((card) => (
        <div key={card.id} className="bg-white p-2 rounded shadow mb-2">
          {card.title}
        </div>
      ))}
    </div>
  );
};

export default Column;