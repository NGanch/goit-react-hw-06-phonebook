// import { createSlice } from "@reduxjs/toolkit";

// export const userSlice = createSlice({
//     name: 'user',
//     initialState:{
//         contacts: [],
//         isAddtoContacts: false,
//     },
//     reducers: {
//         addTo(state, action) {
//             state.contacts = action.payload;
//             state.isAddtoContacts = true;
//         },
//         removeFrom(state, action) {
//             state.contacts = ''
//             state.isAddtoContacts = false;
//         }
//     }
// })
// export const {addTo, removeFrom} = userSlice.actions;
//============================================================================
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  contacts: [  
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
],
filter: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
            
    
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
      //   setFilter(evt.target.value);
  // };
  // filterContact(state,action){
  //   state.filter = state.filter(evt.target.value)
  // },
  
  },
);

export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
export default contactsSlice.reducer;
//============================================================================