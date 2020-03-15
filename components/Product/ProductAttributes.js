import React from 'react'
import { Header, Button, Modal } from 'semantic-ui-react'
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';

function ProductAttributes({ description, _id, }) {
  const [modal, setModal] = React.useState(false)


  function handleDelete() {
    const url = `${baseUrl}/api/product`
    const payload = { params: { _id } }
    axios.delete(url, payload)
  }

  return <>
    <Header as='h3'>
      About this ProductAttributes    </Header>
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
          content='Cansel'
          onClick={() => setModal(false)}
        />
        <Button
          negative
          icon='trash'
          content='Delete'
          onClick={handleDelete}
        />
      </Modal.Actions>
    </Modal>

  </>;
}

export default ProductAttributes;
