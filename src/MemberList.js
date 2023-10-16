import React, { useState } from 'react';
import './members.css';

function MemberList() {
  const [members, setMembers] = useState([]);
  const [memberNumber, setMemberNumber] = useState('');
  const [memberName, setMemberName] = useState('');
  const [memberRating, setMemberRating] = useState('');

  const isAddButtonDisabled = !memberNumber || !memberName || !memberRating;

  const addMember = () => {
    const newMember = {
      number: memberNumber,
      name: memberName,
      rating: memberRating,
      wins: 0,
      losses: 0,
    };
    setMembers([...members, newMember]);
    setMemberNumber('');
    setMemberName('');
    setMemberRating('');
  };

  const removeMember = (index) => {
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setMembers(updatedMembers);
  };

  const sortedMembers = [...members].sort((a, b) => b.rating - a.rating);
  const rankedMembers = sortedMembers.map((member, index) => ({
    ...member,
    rank: index + 1,
  }));

  return (
    <div>
      <h1>会員一覧</h1>
      <form className="add-member-container">
        <input
          type="number"
          placeholder="会員番号"
          value={memberNumber}
          onChange={(e) => setMemberNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="名前"
          value={memberName}
          onChange={(e) => setMemberName(e.target.value)}
        />
        <input
          type="number"
          placeholder="初期レーティング"
          value={memberRating}
          onChange={(e) => setMemberRating(e.target.value)}
        />
        <button onClick={addMember} disabled={isAddButtonDisabled}>
          会員を追加
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>順位</th>
            <th>会員番号</th>
            <th>名前</th>
            <th>レーティング</th>
            <th>勝ち数</th>
            <th>負け数</th>
            <th>削除</th>
          </tr>
        </thead>
        <tbody>
          {rankedMembers.map((member, index) => (
            <tr key={index}>
              <td>{member.rank}</td>
              <td>{member.number}</td>
              <td>{member.name}</td>
              <td>{member.rating}</td>
              <td>{member.wins}</td>
              <td>{member.losses}</td>
              <td>
                <button onClick={() => removeMember(index)}>削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MemberList;
