import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineUserDelete } from 'react-icons/ai';
import {
  ContactsList,
  ContactsItem,
  ContactsName,
  ContactsNumber,
  Button,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = () => {
  // Отримуємо список контактів
  const contacts = useSelector(getContacts);
  // Отримуємо значення фільтру
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  // Фільтровані контакти
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  // Видалення контакту
  const handleContactDelete = contactID => dispatch(deleteContact(contactID));
  
  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <AiOutlinePhone color="rgb(73, 136, 195)" />
          <ContactsName>
            {name}:<ContactsNumber>{number}</ContactsNumber>
          </ContactsName>
          <Button type="button" onClick={() => handleContactDelete(id)}>
            Delete <AiOutlineUserDelete align-self="center" />
          </Button>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};
