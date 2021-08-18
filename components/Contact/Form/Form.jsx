import { stubFalse } from 'lodash';
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
      validated={canSubmit}
      onSubmit={handleSubmit}
      method='post'
      data-netlify='true'
      name='contact'
      action='/success'
    >
      <Form.Group>
        <Form.Label>Your name</Form.Label>
        <Form.Control
          required
          type='text'
          placeholder='What shall we call you?'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
        {/* <Form.Text className='text-muted'>
          I will only use this to write back to you
        </Form.Text> */}
      </Form.Group>
      <Form.Group>
        <Form.Label>Your message:</Form.Label>
        <Form.Control required as='textarea' rows={5} />
      </Form.Group>

      <Button variant='primary' type='submit' placeholder=''>
        Send it off!
      </Button>
    </Form>
  );
}
