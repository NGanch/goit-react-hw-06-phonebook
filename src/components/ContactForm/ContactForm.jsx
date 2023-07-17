// import React from 'react';
// import { useState } from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineUserAdd } from 'react-icons/ai';
// import { addContact } from 'redux/contactsSlice.js';
// import { nanoid } from '@reduxjs/toolkit';
// Імпортуємо хуки useSelector, useDispatch
import { useSelector, useDispatch } from 'react-redux';
// Імпортуємо action
import { addContact } from 'redux/contactsSlice';
// Імпортуємо селектор
import { getContacts } from 'redux/selectors';
// Імпортуємо стилізовані компоненти
import {
  SearchFormStyled,
  LabelName,
  InputName,
  LabelNumber,
  InputNumber,
  Button,
} from './ContactForm.styled.jsx';
// //================================================================

export function ContactForm() {
  const dispatch = useDispatch();
  // Отримуємо список контактів зі стану
  const contacts = useSelector(getContacts);

  // Опрацювання форми
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const isInContacts = contacts.some(
      ({ name }) =>
        name.toLowerCase() === form.elements.name.value.toLowerCase()
    );

    // Перевірка на наявність контакту в списку
    if (isInContacts) {
      alert(`${form.elements.name.value} is already in contacts`);
      return;
    }

    // Додавання контакту
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    form.reset();
  };

// const [name, setName] = useState('');
// const [number, setNumber] = useState('');

//   //---- Опрацювання полів форми -----
//   const handleNameChange = evt => {

//     setName(evt.currentTarget.value);
//   };

//   const handleNumberChange = evt => {
//     setNumber(evt.currentTarget.value);
//   };

//   //---- Опрацювання форми -----
//   const handleSubmit = evt => {
//     evt.preventDefault();
//     //Виклик функції  Submit
//     const contact = {
//       id: nanoid(), 
//       name: name, 
//       number: number,
//     }
//     dispatch(addContact(contact))

//     // Очишення
//     setName('');
//     setNumber('');
//   };
    return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <LabelName htmlFor="name">
        <AiOutlineUserAdd />
        Name
        <InputName
          type="text"
          name="name"
          // value={name}
          // onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelName>
      <LabelNumber htmlFor="number">
        <AiOutlinePhone />
        Number
        <InputNumber
          type="tel"
          name="number"
          // value={number}
          // onChange={handleNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelNumber>

      <Button type="submit">Add contact</Button>
    </SearchFormStyled>
  );
}



