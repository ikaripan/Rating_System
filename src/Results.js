import React, { useState } from 'react';
import './Results.css';

function Results() {
  const [firstPlayerNumber, setFirstPlayerNumber] = useState('');
  const [firstPlayerName, setFirstPlayerName] = useState('');
  const [secondPlayerNumber, setSecondPlayerNumber] = useState('');
  const [secondPlayerName, setSecondPlayerName] = useState('');
  const [handicap, setHandicap] = useState('平手');
  const [firstPlayerResult, setFirstPlayerResult] = useState(''); // 先手の勝敗
  const [secondPlayerResult, setSecondPlayerResult] = useState(''); // 後手の勝敗

  const [resultsHistory, setResultsHistory] = useState([]);

  const isAddButtonDisabled =
    !firstPlayerNumber ||
    !firstPlayerName ||
    !secondPlayerNumber ||
    !secondPlayerName ||
    !handicap ||
    !firstPlayerResult ||
    !secondPlayerResult;

  const addResult = () => {
    const newResult = {
      firstPlayerNumber,
      firstPlayerName,
      secondPlayerNumber,
      secondPlayerName,
      handicap,
      firstPlayerResult,
      secondPlayerResult,
    };

    setResultsHistory([newResult, ...resultsHistory]);

    setFirstPlayerNumber('');
    setFirstPlayerName('');
    setSecondPlayerNumber('');
    setSecondPlayerName('');
    setHandicap('平手');
    setFirstPlayerResult('');
    setSecondPlayerResult('');
  };

  // 先手の勝敗を設定したとき、後手の勝敗も自動的に設定する
  const handleFirstPlayerResultChange = (value) => {
    setFirstPlayerResult(value);
    if (value === '〇') {
      setSecondPlayerResult('×');
    } else if (value === '×') {
      setSecondPlayerResult('〇');
    } else {
      setSecondPlayerResult('△');
    }
  };

  // 後手の勝敗を設定したとき、先手の勝敗も自動的に設定する
  const handleSecondPlayerResultChange = (value) => {
    setSecondPlayerResult(value);
    if (value === '〇') {
      setFirstPlayerResult('×');
    } else if (value === '×') {
      setFirstPlayerResult('〇');
    } else {
      setFirstPlayerResult('△');
    }
  };

  return (
    <div>
      <h1>対局結果</h1>

      <div className="form-container">
        <div className="form-row">
          <label>先手</label>
          <input
            type="number"
            value={firstPlayerNumber}
            placeholder="会員番号"
            onChange={(e) => setFirstPlayerNumber(e.target.value)}
          />
          <input
            type="text"
            value={firstPlayerName}
            placeholder="名前"
            onChange={(e) => setFirstPlayerName(e.target.value)}
          />
          <select
            value={firstPlayerResult}
            onChange={(e) => handleFirstPlayerResultChange(e.target.value)}
          >
            <option value="">勝敗</option>
            <option value="〇">〇</option>
            <option value="×">×</option>
            <option value="△">△</option>
          </select>
        </div>
        <div className="form-row">
          <label>後手</label>
          <input
            type="number"
            value={secondPlayerNumber}
            placeholder="会員番号"
            onChange={(e) => setSecondPlayerNumber(e.target.value)}
          />
          <input
            type="text"
            value={secondPlayerName}
            placeholder="名前"
            onChange={(e) => setSecondPlayerName(e.target.value)}
          />
          <select
            value={secondPlayerResult}
            onChange={(e) => handleSecondPlayerResultChange(e.target.value)}
          >
            <option value="">勝敗</option>
            <option value="〇">〇</option>
            <option value="×">×</option>
            <option value="△">△</option>
          </select>
        </div>
        <div className="form-row">
          <label>手合</label>
          <select
            value={handicap}
            onChange={(e) => setHandicap(e.target.value)}
          >
            <option value="平手">平手</option>
            <option value="香落ち">香落ち</option>
            <option value="角落ち">角落ち</option>
            <option value="飛香落ち">飛香</option>
            <option value="飛角落ち">飛角落ち</option>
          </select>
        </div>
      </div>

      <button onClick={addResult} disabled={isAddButtonDisabled}>
        結果を追加
      </button>
      <h2>対局結果表</h2>
      <table className="results-table">
        <thead>
          <tr>
            <th>先手会員番号</th>
            <th>先手名前</th>
            <th>後手会員番号</th>
            <th>後手名前</th>
            <th>手合</th>
            <th>先手勝敗</th>
            <th>後手勝敗</th>
          </tr>
        </thead>
        <tbody>
          {resultsHistory.map((result, index) => (
            <tr key={index}>
              <td>{result.firstPlayerNumber}</td>
              <td>{result.firstPlayerName}</td>
              <td>{result.secondPlayerNumber}</td>
              <td>{result.secondPlayerName}</td>
              <td>{result.handicap}</td>
              <td>{result.firstPlayerResult}</td>
              <td>{result.secondPlayerResult}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Results;
