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
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectFilter } from "../../redux/selectors";
import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectContacts);
  const filter =  useSelector(selectFilter);
  const visibleContact = contact.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
   return (
    <ContactsList>
      {visibleContact.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <AiOutlinePhone color="rgb(73, 136, 195)" />
          <ContactsName>
            {name}:<ContactsNumber>{number}</ContactsNumber>
          </ContactsName>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            {' '} 
            Delete <AiOutlineUserDelete align-self="center" />
          </Button>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};

