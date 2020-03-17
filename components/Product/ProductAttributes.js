import React from 'react'
import { Header, Button, Modal } from 'semantic-ui-react'
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import { useRouter } from 'next/router';

function ProductAttributes({ description, _id, }) {
  const [modal, setModal] = React.useState(false);
  const router = useRouter()


  async function handleDelete() {
    const url = `${baseUrl}/api/product`;
    const payload = { params: { _id } }
    await axios.delete(url, payload)
    router.push('/');

  }

  return <>
    <Header as='h3'>      About this ProductAttributes </Header>
    <p>{description}</p>
    <Button
      icon='trash alternate outline'
      content='Delete Product'
      color='orange'
      onClick={() => setModal(true)}
    />
    <Modal open={modal} dimmer='blurring'>
      <Modal.Header>Confirm Delete</Modal.Header>
      <Modal.Content>
        <p>Are you sure you wont to delete this product?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content='Cancel'
          onClick={() => setModal(false)}
        />
        <Button
          negative
          icon='trash'
          content='Delete'
          labelPosition='right'
          onClick={handleDelete}
        />
      </Modal.Actions>
    </Modal>

  </>;
}

export default ProductAttributes;
