import { useState } from 'react';
import { Route, Routes } from 'react-router';
import MailboxList from './components/MailboxList/MailboxList';
import NavBar from './components/NavBar/NavBar';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';


const initialState = [
  {_id: 1, boxSize: 'Small', boxOwner: 'Alex'},
  {_id: 2, boxSize: 'Medium', boxOwner: 'Newly'},
  {_id: 3, boxSize: 'Large', boxOwner: 'Edward'},
  {_id: 4, boxSize: 'Extra Large', boxOwner: 'Louie'},
];

const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState);

  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  };

  return (
  <>
    <NavBar />
    <h1>Post Office</h1>
    <Routes>
      <Route path="/" element={<h2>Home Page</h2>} />
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
      <Route 
      path="/new-mailbox" 
      element={<MailboxForm addBox={addBox} />} 
      />
      <Route 
      path="/mailboxes/:mailboxId"
      element={<MailboxDetails mailboxes={mailboxes} />} 
      />
      <Route path="*" elements={<h2>Mailbox not found!</h2>} />
    </Routes>
  </>
  );
};

export default App;