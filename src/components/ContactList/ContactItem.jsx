// import React from 'react';
// import { AiOutlinePhone } from 'react-icons/ai';
// import { AiOutlineUserDelete } from 'react-icons/ai';
// import {
//   ContactsName,
//   ContactsNumber,
//   Button,
// } from './ContactList.styled';
// import { useDispatch } from "react-redux";
// import { deleteContact } from '../../redux/contactsSlice';


// const ContactItem = ({id, name, number }) => {
//     const dispatch = useDispatch();
//      return (
//             <div>
//             <AiOutlinePhone color="rgb(73, 136, 195)" />
//             <ContactsName>
//               {name}:<ContactsNumber>{number}</ContactsNumber>
//             </ContactsName>
//             <Button type="button" onClick={() => dispatch(deleteContact(id))}>
//               {' '} 
//               Delete <AiOutlineUserDelete align-self="center" />
//             </Button>
//             </div>
//     );
//   };
//   export default ContactItem;