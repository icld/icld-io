import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './Form.module.css';

export default function () {
  const [canSubmit, setCanSubmit] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setCanSubmit(true);
  };

  return (
    <form name='contact' method='POST' netlify-data='true'>
      <input type='hidden' name='form-name' value='contact' />
      <p>
        <input type='text' name='firstname' id='firstname' />
        <label htmlFor='yourname'>Your Name:</label> <br />
        <input type='text' name='name' id='yourname' />
      </p>
      <p>
        <label htmlFor='youremail'>Your Email:</label> <br />
        <input type='email' name='email' id='youremail' />
      </p>
      <p>
        <label htmlFor='yourmessage'>Message:</label> <br />
        <textarea name='message' id='yourmessage'></textarea>
      </p>
      <p>
        <button type='submit'>Send</button>
      </p>
    </form>
  );
}
