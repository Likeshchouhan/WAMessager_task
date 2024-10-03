// Popup HTML to interact with the user
import React, { useState } from 'react';
import './Popup.css';
// popup JavaScript to handle user input and translation
function Popup() {
  const [language, setLanguage] = useState('en');

  const saveLanguage = () => {
    chrome.storage.sync.set({ language }, () => {
      alert(`Language preference set to ${language}`);
    });
  };

  return (
    <div className="popup-container">
      <h3>Select Preferred Language</h3>
      <select value={language} onChange={e => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        {/* Add more languages as needed */}
      </select>
      <button onClick={saveLanguage}>Save</button>
    </div>
  );
}

export default Popup;
