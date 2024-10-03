document.getElementById('translate-form').addEventListener('submit', function (event) {
     event.preventDefault();
     
     // Handles the logic of the popup form
     const message = document.getElementById('message').value;
     const targetLanguage = document.getElementById('language').value;
   
     // Send the message and language to the backend
     fetch('http://localhost:5000/api/translate', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         message,
         targetLanguage,
       }),
     })
     .then(response => response.json())
     .then(data => {
       // Display translated message
       document.getElementById('result').innerText = data.translatedMessage;
     })
     .catch(error => console.error('Error:', error));
   });
   