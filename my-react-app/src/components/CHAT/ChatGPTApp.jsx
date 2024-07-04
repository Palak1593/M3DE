

// import React, { useState } from 'react';
// import TextInputForm from './TextInputForm';
// import Sidebar from './SideBar';

// const ChatGPTApp = () => {
//   const [chats, setChats] = useState([]);
//   const [selectedChatIndex, setSelectedChatIndex] = useState(null);

//   const handleSubmit = ({ text, image }) => {
//     const newEntry = { text, image, output: '' };

//     setTimeout(() => {
//       let result = '';

//       if (text) {
//         result += `**Text Input**: ${text}\n\n`;
//       }

//       if (image) {
//         result += `**Uploaded Image**: ${image.name}\n`;
//         result += `Image Size: ${(image.size / 1024).toFixed(2)} KB\n`;
//         result += `Image Type: ${image.type}\n`;
//       }

//       const simulatedResponse = text
//         ? `Here's a simulated response based on your text input.`
//         : 'Please provide some text input for a response.';

//       result += `\n**Simulated ChatGPT Response**:\n${simulatedResponse}`;

//       newEntry.output = result;
//       setChats((prevChats) => {
//         const updatedChats = [...prevChats];
//         if (selectedChatIndex !== null) {
//           updatedChats[selectedChatIndex].history.push(newEntry);
//         } else {
//           updatedChats.push({ history: [newEntry] });
//           setSelectedChatIndex(updatedChats.length - 1);
//         }
//         return updatedChats;
//       });
//     }, 1000);
//   };

//   const handleNewChat = () => {
//     setChats((prevChats) => [...prevChats, { history: [] }]);
//     setSelectedChatIndex(chats.length);
//   };

//   const handleSelectChat = (index) => {
//     setSelectedChatIndex(index);
//   };

//   return (
//     <div className="app-container">
//       <Sidebar chats={chats} onSelectChat={handleSelectChat} onNewChat={handleNewChat} />
//       <div className="chat-container">
//         <h1>M3DE</h1>
//         <TextInputForm onSubmit={handleSubmit} />
//         <div className="history">
//           {selectedChatIndex !== null &&
//             chats[selectedChatIndex].history.map((entry, index) => (
//               <div key={index} className="card">
//                 <h2>Input {index + 1}</h2>
//                 {entry.text && <p><strong>Text:</strong> {entry.text}</p>}
//                 {entry.image && (
//                   <p>
//                     <strong>Image:</strong> {entry.image.name} ({(entry.image.size / 1024).toFixed(2)} KB, {entry.image.type})
//                   </p>
//                 )}
//                 <pre>{entry.output}</pre>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatGPTApp;

// ChatGPTApp.jsx

import React, { useState } from 'react';
import TextInputForm from './TextInputForm';
import Sidebar from './SideBar';

const ChatGPTApp = () => {
  const [chats, setChats] = useState([]);
  const [selectedChatIndex, setSelectedChatIndex] = useState(null);

  const handleSubmit = ({ text, image }) => {
    const newEntry = { text, image, output: '' };

    setTimeout(() => {
      let result = '';

      if (text) {
        result += `**Text Input**: ${text}\n\n`;
      }

      if (image) {
        result += `**Uploaded Image**: ${image.name}\n`;
        result += `Image Size: ${(image.size / 1024).toFixed(2)} KB\n`;
        result += `Image Type: ${image.type}\n`;
      }

      const simulatedResponse = text
        ? `Here's a simulated response based on your text input.`
        : 'Please provide some text input for a response.';

      result += `\n**Simulated ChatGPT Response**:\n${simulatedResponse}`;

      newEntry.output = result;
      setChats((prevChats) => {
        const updatedChats = [...prevChats];
        if (selectedChatIndex !== null) {
          updatedChats[selectedChatIndex].history.push(newEntry);
        } else {
          updatedChats.push({ history: [newEntry] });
          setSelectedChatIndex(updatedChats.length - 1);
        }
        return updatedChats;
      });
    }, 1000);
  };

  const handleNewChat = () => {
    setChats((prevChats) => [...prevChats, { history: [] }]);
    setSelectedChatIndex(chats.length);
  };

  const handleSelectChat = (index) => {
    setSelectedChatIndex(index);
  };

  return (
    <div className="app-container">
      <Sidebar chats={chats} onSelectChat={handleSelectChat} onNewChat={handleNewChat} />
      <div className="chat-container">
        <h1 >M3DE</h1>
        <TextInputForm onSubmit={handleSubmit} />
        <div className="history">
          {selectedChatIndex !== null &&
            chats[selectedChatIndex].history.map((entry, index) => (
              <div key={index} className="card">
                <h2>Input {index + 1}</h2>
                {entry.text && <p><strong>Text:</strong> {entry.text}</p>}
                {entry.image && (
                  <p>
                    <strong>Image:</strong> {entry.image.name} ({(entry.image.size / 1024).toFixed(2)} KB, {entry.image.type})
                  </p>
                )}
                <pre>{entry.output}</pre>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ChatGPTApp;



