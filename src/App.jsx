import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/NavBar'
import MainPage from './pages/MainPage'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'
import MailboxDetails from './components/MailboxDetails'
import LetterForm from './components/LetterForm'


const App = () => {
  const [mailboxes, setMailboxes] = useState([])
  const [letters, setLetters] = useState([])

  const addMailbox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailbox])
  }

  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path="/new-mailbox" element={<MailboxForm addMailbox={addMailbox}/>}/>
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}/>
        <Route path="/new-letter" 
        element={<LetterForm 
        mailboxes={mailboxes} 
        setLetters={setLetters} 
        letters={letters}
        />} />
      </Routes>
    </>
  );
};

export default App;
