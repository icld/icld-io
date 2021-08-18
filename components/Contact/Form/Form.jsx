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
    <Form
      // noValidate
      // validated={canSubmit}
      // onSubmit={handleSubmit}
      name='contact'
      method='POST'
      data-netlify='true'
      action='/success'
      role='form'
    >
      <input type='hidden' name='form-name' value='contact' />
      <Form.Group>
        <Form.Label>Your name</Form.Label>
        <Form.Control
          type='text'
          name='name'
          placeholder='What shall we call you?'
          controlId='name'
          lg='4'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='email'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
        {/* <Form.Text className='text-muted'>
          I will only use this to write back to you
        </Form.Text> */}
      </Form.Group>
      <Form.Group>
        <Form.Label>Your message:</Form.Label>
        <Form.Control
          // required
          name='message'
          as='textarea'
          rows={5}
          controlId='message'
        />
      </Form.Group>

      <Button variant='primary' type='submit' placeholder=''>
        Send it off!
      </Button>
    </Form>
  );
}
