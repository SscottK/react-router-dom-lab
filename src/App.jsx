import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/NavBar'
import MainPage from './pages/MainPage'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'
// import MailboxDetails from './components/MailboxDetails'


const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  const addMailbox = (newMailbox) => {
    setMailboxes([...mailboxes, newMailbox])
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path="/new-mailbox" element={<MailboxForm addMailbox={addMailbox}/>}/>
        {/* <Route pathe="mailboxes/:mailboxId" element={<MailboxDetails />}/> */}
      </Routes>
    </>
  );
};

export default App;
