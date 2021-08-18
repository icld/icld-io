import { Form, Button } from 'react-bootstrap';
import styles from './Form.module.css';
export default function () {
  return (
    // <Form
    //   className={styles.form}
    //   name='contact'
    //   action='/success'
    //   method='POST'
    //   data-netlify='true'
    // >
    //   <input type='hidden' name='form-name' value='contact' />
    //   <p
    //     style={{
    //       display: 'flex',
    //       flexDirection: 'column',
    //       width: '50%',
    //     }}
    //   >
    //     <label htmlFor='yourname'>Your Name:</label> <br />
    //     <input
    //       className={styles.firstName}
    //       type='text'
    //       placeholder='Your first name here'
    //       name='firstname'
    //       id='firstname'
    //     />
    //     <input
    //       className={styles.lastName}
    //       type='text'
    //       name='name'
    //       id='yourname'
    //     />
    //   </p>
    //   <p>
    //     <label htmlFor='youremail'>Your Email:</label> <br />
    //     <input type='email' name='email' id='youremail' />
    //   </p>
    //   <p>
    //     <label htmlFor='yourmessage'>Message:</label> <br />
    //     <textarea name='message' id='yourmessage'></textarea>
    //   </p>
    //   <p>
    //     <button type='submit'>Send</button>
    //   </p>
    // </Form>

    <Form method='POST' data-netlify='true' name='contact' action='/success'>
      <Form.Group>
        <Form.Label>Your name</Form.Label>
        <Form.Control type='text' placeholder='What shall we call you?' />
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
        <Form.Control as='textarea' rows={5} />
      </Form.Group>

      <Button variant='primary' type='submit' placeholder=''>
        Send it off!
      </Button>
    </Form>
  );
}
