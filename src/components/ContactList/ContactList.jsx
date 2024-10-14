import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";

export default function ContactList() {
  // const contacts = useSelector(selectContact);
  const filteredContact = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();
  // const filteredContact = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  return (
    <>
      <ul className={s.contactlist}>
        {filteredContact.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact
                name={contact.name}
                number={contact.number}
                onDelete={() => dispatch(deleteContact(contact.id))}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
