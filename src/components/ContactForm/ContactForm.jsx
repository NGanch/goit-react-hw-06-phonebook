import React from 'react';

import { useState } from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineUserAdd } from 'react-icons/ai';
import {
  SearchFormStyled,
  LabelName,
  InputName,
  LabelNumber,
  InputNumber,
  Button,
} from './ContactForm.styled.jsx';

import { useDispatch } from "react-redux";
import { addContact } from 'redux/contactsSlice.js';
import { nanoid } from '@reduxjs/toolkit';

//================================================================
export function ContactForm() {

const dispatch = useDispatch();

const [name, setName] = useState('');
const [number, setNumber] = useState('');




  //---- Опрацювання полів форми -----
  const handleNameChange = evt => {
    console.log(evt.currentTarget.value)
    setName(evt.currentTarget.value);

    // setId(nameId);
  };
  const handleNumberChange = evt => {
    setNumber(evt.target.value);
  };

  //---- Опрацювання форми -----
  const handleSubmit = evt => {
    evt.preventDefault();
    //Виклик функції  Submit
    const contact = {
      id: nanoid(), 
      name: name, 
      number: number,
    }
    dispatch(addContact(contact))

    // Очишення
    setName('');
    setNumber('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <LabelName>
        <AiOutlineUserAdd />
        Name
        <InputName
          type="text"
          name="name"
          // value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelName>
      <LabelNumber>
        <AiOutlinePhone />
        Number
        <InputNumber
          type="tel"
          name="number"
          // value={number}
          onChange={handleNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelNumber>

      <Button type="submit">Add contact</Button>
    </SearchFormStyled>
  );
}



