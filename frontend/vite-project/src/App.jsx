import React, { useState } from 'react';

const App = () => {
  // State to hold the message and selected language
  const [message, setMessage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es'); // Default to Spanish
  const [translatedMessage, setTranslatedMessage] = useState('');

  // Function to handle form submission
  const handleTranslate = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Fetch API call to translate the message
    fetch('/api/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message, // Message from the state
        targetLanguage, // Target language from the state
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Translated Message:', data.translatedMessage);
        setTranslatedMessage(data.translatedMessage); // Update the translated message
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h1>WhatsApp Chat Translator</h1>
      <form onSubmit={handleTranslate}>
        {/* Input field for entering the message */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Update message state
          placeholder="Enter your message"
        />
        
        {/* Select dropdown for choosing the target language */}
        <select
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)} // Update language state
        >
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          {/* Add more languages as needed */}
        </select>

        {/* Submit button */}
        <button type="submit">Translate</button>
      </form>

      {/* Display the translated message */}
      {translatedMessage && (
        <div>
          <h3>Translated Message:</h3>
          <p>{translatedMessage}</p>
        </div>
      )}
    </div>
  );
};

export default App;
