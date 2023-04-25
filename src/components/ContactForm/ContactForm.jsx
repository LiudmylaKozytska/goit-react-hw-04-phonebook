import React, { useState } from 'react';
import {
  alertContactInclude,
  alertAddContactSuccess,
} from 'components/Alert/Alert';
import { Form, Title, Input, Button } from './ContactFormStyle';

export const ContactForm = ({ onSubmit, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const contactIncludes = contacts.some(contact => contact.name === name);

    if (contactIncludes) {
      alertContactInclude(name);
      return;
    } else {
      alertAddContactSuccess();
    }

    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  const handleNameChange = event => {
    setName(event.currentTarget.value);
  };

  const handleNumberChange = event => {
    setNumber(event.currentTarget.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Phonebook</Title>
      <label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Type name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Type number"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
