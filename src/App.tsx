import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;
const Board = styled.div`
  background-color: ${props => props.theme.boardColor};
`;

const Card = styled.div`
  background-color: ${props => props.theme.cardColor};
`;

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {magic => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                <Draggable draggableId="first" index={0}>
                  {magic => (
                    <Card
                      ref={magic.innerRef}
                      {...magic.dragHandleProps}
                      {...magic.draggableProps}
                    >
                      One
                    </Card>
                  )}
                </Draggable>
                {/* <Draggable draggableId="second" index={1}>
                {magic => (
                  <li ref={magic.innerRef} {...magic.draggableProps}>
                    <span {...magic.dragHandleProps}>⚒️</span>
                    Two
                  </li>
                )}
              </Draggable> */}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
