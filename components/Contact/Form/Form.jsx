import { Form } from 'react-bootstrap';
import styles from './Form.module.css';
export default function () {
  return (
    <form
      className={styles.form}
      name='contact'
      action='/success'
      method='POST'
      data-netlify='true'
    >
      <input type='hidden' name='form-name' value='contact' />
      <p
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
        }}
      >
        <label htmlFor='yourname'>Your Name:</label> <br />
        <input
          className={styles.firstName}
          type='text'
          placeholder='Your first name here'
          name='firstname'
          id='firstname'
        />
        <input
          className={styles.lastName}
          type='text'
          name='name'
          id='yourname'
        />
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
