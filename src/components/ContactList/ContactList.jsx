import Contact from '../Contact/Contact.jsx';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => (
    <ul className={s.wrapper}>
      {contacts.map(contact => (
        <Contact key={contact.id} name={contact.name} number={contact.number} />
      ))}
    </ul>
);


export default ContactList