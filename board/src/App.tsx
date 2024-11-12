import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardView from './page/BoardView';
import BoardList from './page/BoardList';
import BoardDetail from './page/BoardDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardList />} />
        <Route path="/detail" element={<BoardDetail />} />
        <Route path="/view" element={<BoardView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
