import React, { useState } from "react";

const Player = ({ name, symbol, isActive, onNameChange }) => {
  const [editedName, setEditedName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
    if(isEditing){
      onNameChange(symbol,editedName)
    }
  }
  function handleInputChange(e) {
    setEditedName(e.target.value);
  }

  let playerName = <span className="player-name">{editedName}</span>;
  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={editedName}
        onChange={(e) => {
          handleInputChange(e);
        }}
        placeholder="name"
      />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
