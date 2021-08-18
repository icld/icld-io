import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import styles from './Form.module.css';
import { useRouter } from 'next/router';

export default function () {
  const router = useRouter();

  const [canSubmit, setCanSubmit] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      setShowModal(false);
      event.preventDefault();
      event.stopPropagation();
    } else {
      setCanSubmit(true);
      setShowModal(true);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        margin: 'auto 0',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Form
        style={{ width: '75%' }}
        // noValidate
        validated={canSubmit}
        onSubmit={handleSubmit}
        name='contact'
        method='POST'
        data-netlify='true'
        // action='success'
        role='form'
      >
        <input type='hidden' name='form-name' value='contact' />
        <Form.Group className='mb-3'>
          <Form.Label>Your name</Form.Label>
          <Form.Control
            required
            type='text'
            name='name'
            placeholder='What shall we call you?'
            controlId='name'
            lg='4'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type='email'
            name='email'
            controlId='email'
            placeholder='Enter an email'
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Your message:</Form.Label>
          <Form.Control
            required
            name='message'
            as='textarea'
            rows={5}
            controlId='message'
            placeholder=''
          />
        </Form.Group>

        <Button className='mb-3' variant='primary' type='submit' placeholder=''>
          Send it off!
        </Button>
      </Form>

      <Modal
        style={{ top: '30%' }}
        show={showModal}
        onHide={() => router.push('/')}
      >
        <Modal.Header closeButton>
          <Modal.Title>Thanks for reaching out!</Modal.Title>
        </Modal.Header>
        <Modal.Body>I will get right back to you</Modal.Body>
      </Modal>
    </div>
  );
}
