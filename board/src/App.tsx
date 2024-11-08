import React from 'react';
import BoardView from './page/BoardView';
import BoardList from './page/BoardList';
import BoardDetail from './page/BoardDetail';

function App() {
  return (
    <div>
      <BoardView />
      <BoardDetail />
      <BoardList />
    </div>
  );
}

export default App;
