

// import React, { useState } from 'react';

// const TextInputForm = ({ onSubmit }) => {
//   const [text, setText] = useState('');
//   const [image, setImage] = useState(null);

//   const handleTextChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ text, image });
//     setText('');
//     setImage(null);
//   };

//   return (
//     <form onSubmit={handleSubmit} >
//       <textarea
//         placeholder="Type your text here..."
//         value={text}
//         onChange={handleTextChange}
//         required
//       />
//       <input type="file" onChange={handleImageChange} accept="image/*" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default TextInputForm;

// TextInputForm.jsx

import React, { useState } from 'react';

const TextInputForm = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ text, image });
    setText('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={handleTextChange}
        required
      />
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TextInputForm;


