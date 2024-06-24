import { CONTACTS } from '../../constants';
import './sidebar.css';

function Sidebar({contact, onContactChange}) {
  return (
      <div className="sidebar">
        <h2>Contacts</h2>
        <ul>
            {
                CONTACTS.map(item => <li 
                                            onClick={() => onContactChange(item)}
                                            className={contact.id === item.id ? 'activeContact' : 'contact' } 
                                            key={item.id}
                                        >
                                            {item.name}
                                        </li>)
            }
        </ul>
      </div>
  );
}

export default Sidebar;
