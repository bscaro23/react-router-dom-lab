// src/App.jsx
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';


import Navbar from './components/Navbar';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';
import LetterForm from './components/LetterForm';


const initialState = [
  {_id: 1, boxHolder: 'Oscar', boxSize: 'Large'}
];

const App = () => {
  
  const [mailbox, setMailbox] = useState(initialState);
  const [letter, setLetter] = useState([]);
  console.log(letter)
  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailbox.length +1;
    setMailbox([...mailbox, newMailboxData]);
  };
  const addLetter = (newLetterData) => {
    newLetterData._id = letter.length +1;
    setLetter([...letter, newLetterData]);
  };
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>Post Office</h1>} />
        <Route path='/mailbox' element={<MailboxList mailbox={mailbox} />} />
        <Route path='/new-mailbox' element={<MailboxForm addMailbox={addMailbox} />} />
        <Route path='/mailbox/:mailboxId' element={<MailboxDetails mailbox={mailbox} letter={letter}/>} />
        <Route path='/new-letter' element={<LetterForm mailbox={mailbox} letter={letter} addLetter={addLetter}/>} />
        <Route path='*' element={<h1>Whoops, nothing here!</h1>} />
      </Routes>
    </>
  );
};

export default App;