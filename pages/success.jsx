import { Modal } from 'react-bootstrap';
import router, { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
export default function Success() {
  return (
    <div>
      <Modal style={{ top: '30%' }} show={true} onHide={() => router.push('/')}>
        <Modal.Header closeButton>
          <Modal.Title>Thanks for reaching out!</Modal.Title>
        </Modal.Header>
        <Modal.Body>I will get right back to you</Modal.Body>
      </Modal>
    </div>
  );
}
