import s from './Contact.module.css';
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

const Contact = ({ name, number }) => (
    <li className={s.item}>
      <div className={s.container}>
         <p className={s.name}> <IoPerson /> {name}</p>
         <p className={s.number}> <FaPhone /> {number}</p>
      </div>
      <button className={s.button}>Delete</button>
    </li>
  );

export default Contact