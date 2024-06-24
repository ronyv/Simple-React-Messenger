import { LOGGEDIN_CONTACT } from '../../constants';
import './chatcard.css';

function ChatCard({data = {}}) {
  return (
    <div className="chatCard" key={data.timestamp}>
        <div className="sender">{LOGGEDIN_CONTACT.name}</div>
        <div className="message">{data.message}</div>
        <div className="timestamp">{String(data.timestamp)}</div>
    </div>
  );
}

export default ChatCard;
