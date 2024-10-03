// Intercept and translate chat messages
// interacts with the message input and output
function translateChats() {
     const messages = document.querySelectorAll('.message-in .selectable-text span');
     messages.forEach(msg => {
       const originalText = msg.innerText;
       chrome.storage.sync.get('language', ({ language }) => {
         // Send message to the backend API for translation
         fetch('http://localhost:5000/api/translate', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ message: originalText, targetLanguage: language })
         })
         .then(response => response.json())
         .then(data => {
           msg.innerText = data.translatedMessage; // Update the chat with the translated message
         });
       });
     });
   }
   
   // Observe the DOM for new messages
   const observer = new MutationObserver(translateChats);
   observer.observe(document, { childList: true, subtree: true });
   