import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom'; // 新しいバージョンでのインポート

import MemberList from './MemberList'; // 会員一覧ページ
import Results from './Results'; // 対局結果ページ

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/MemberList">会員一覧</Link>
            </li>
            <li>
              <Link to="/Results">対局結果</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/Results" element={<Results />} />
          <Route path="/MemberList" element={<MemberList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
