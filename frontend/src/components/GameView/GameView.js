import React from "react";
import HTML5Backend from "react-dnd-html5-backend";
// import MultiBackend from 'react-dnd-multi-backend';
import { DndProvider } from "react-dnd";
import "./GameView.scss";
import Board from "../Board/Board";
import DragPanel from "../Draggable/DragPanel/DragPanel";

import TouchBackend from "react-dnd-touch-backend";
import MultiBackend, {
  TouchTransition,
  Preview
} from "react-dnd-multi-backend";

const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend
    },
    {
      backend: TouchBackend, // Note that you can call your backends with options
      options: { enableMouseEvents: true },
      preview: true,
      transition: TouchTransition
    }
  ]
};

function generatePreview(type, item, style) {
  return <div style={{ width: "50px", height: "50px" }}>{type}</div>;
}

export default function GameView() {
  const mockBoard = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ];

  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <div className="gamePanel">
        <Board fields={mockBoard} />
        <DragPanel />
        <Preview generator={generatePreview} />>
      </div>
    </DndProvider>
  );
}
