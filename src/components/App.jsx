import {useEffect } from "react";

import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { useSelector, useDispatch } from "react-redux";
import {addItem, removeItem, filterValue} from "../reduxStore/actions"

export const App = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const visibleContacts = contacts
  .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  // useEffect(() => {
  //   const KEY = "contacts"
  //   const savedData = localStorage.getItem(KEY) ? JSON.parse(localStorage.getItem(KEY)) : [];

  //   if (savedData.length > 0) {
  //     setContacts(savedData)
  //   }
  // }, []); 

  // useEffect(() => {
  //   const KEY = "contacts";
  //   const dataToSave = JSON.stringify(contacts);

  //   localStorage.setItem(KEY, dataToSave)
  // }, [contacts]);

    function onInputChange(e) {
      const { value } = e.target;
      dispatch(filterValue(value))
    }

    function addContact(name, number) {
      if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
        alert(`${name} is already in contacts`)
        return
      } else {
        dispatch(addItem({
            id: nanoid(),
            name: name,
            number: number,
        }));
      }
    }

    function deleteContact(id) {
      dispatch(removeItem(id))
    }
  
  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>

      <Filter value={filter} onChange={onInputChange} />

      <ContactList contacts={visibleContacts} onClick={deleteContact} />

    </div>
  )
}