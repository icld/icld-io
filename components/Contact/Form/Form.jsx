import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Form.module.css';
import { useRouter } from 'next/router';

export default function MyForm() {
  const router = useRouter();

  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isMessage, setIsMessage] = useState(false);

  const [canSubmit, setCanSubmit] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      // setShowModal(false);
      event.preventDefault();
      event.stopPropagation();
    }
    setCanSubmit(true);
  };

  return (
    <div className={styles.form}>
      <form
        className={styles.form}
        name='contact'
        method='POST'
        netlify-data='true'
        action='/success'
      >
        <input type='hidden' name='form-name' value='contact' />
        <div className={styles.fields}>
          <label hidden htmlFor='yourname'>
            Your Name:
          </label>{' '}
          <br />
          <input
            className={styles.userName}
            placeholder='what is your name?'
            type='text'
            name='name'
            id='name'
          />
          {/* <input type='text' name='name' id='yourname' /> */}
        </div>
        <div className={styles.fields}>
          <label hidden htmlFor='youremail'>
            Your Email:
          </label>{' '}
          <br />
          <input
            placeholder='what is your email?'
            className={styles.email}
            type='email'
            name='email'
            id='youremail'
          />
        </div>
        <div className={styles.fields}>
          <label hidden htmlFor='yourmessage'>
            Message:
          </label>{' '}
          <br />
          <textarea
            placeholder='what can I help you make?'
            className={styles.message}
            name='message'
            id='yourmessage'
          ></textarea>
        </div>
        <div className={styles.fields}>
          <button className={styles.button} type='submit'>
            Send it off!
          </button>
        </div>
      </form>

      {/* <Modal
        style={{ top: '30%' }}
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Thanks for reaching out!</Modal.Title>
        </Modal.Header>
        <Modal.Body>I will get right back to you</Modal.Body>
      </Modal> */}
    </div>
  );
}
