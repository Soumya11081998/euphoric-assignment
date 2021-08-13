import './App.css';
import ChatWindow from './components/chatwindow/ChatWindow';
import CurrentFriend from './components/currentuser/CurrentFriend';
import Inbox from './components/inbox/Inbox';

function App() {
  return (
    <div className="App">
      <Inbox className="inbox" />
      <ChatWindow />
      <CurrentFriend />
    </div>
  );
}

export default App;
