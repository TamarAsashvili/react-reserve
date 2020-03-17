import React from 'react'
import { Form, Input, TextArea, Icon, Button, Image, Message, Header } from "semantic-ui-react";

const INITIAL_PRODUCT = {
  name: '',
  price: '',
  media: '',
  description: ''
}

function CreateProduct() {
  const [product, setProduct] = React.useState(INITIAL_PRODUCT);
  const [mediaPreview, setMediaPreview] = React.useState('')
  const [success, setSuccess] = React.useState(false)

  function handleChange(event) {
    const { name, value, files } = event.target;
    if (name === 'media') {
      setProduct(prevState => ({ ...prevState, media: files[0] }));
      setMediaPreview(window.URL.createObjectURL(files[0]))
    } else {

      setProduct((prevState) => ({ ...prevState, [name]: value }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(product)
    setProduct(INITIAL_PRODUCT)
    setSuccess(true)

  }

  return (<>

    <Header as='h2' block >
      <Icon name='add' color='orange' />
        Create New Product
      <Form success={success} onSubmit={handleSubmit}>
        <Message
          success
          icon='check'
          header='Success'
          content='your product has been posted'
        />
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            name='name'
            label='Name'
            placeholder='Name'
            type='text'
            onChange={handleChange}
            value={product.name}
          />
          <Form.Field
            control={Input}
            name='price'
            label='Price'
            placeholder='Price'
            min='0.00'
            step='0.01'
            type='number'
            onChange={handleChange}
            value={product.price}
          />
          <Form.Field
            control={Input}
            name='media'
            label='Media'
            accept='image/*'
            type='file'
            content='Select Image'
            onChange={handleChange}

          />

        </Form.Group>
        <Image src={mediaPreview} rounded centered size='small' />
        <Form.Field
          control={TextArea}
          name='description'
          label='Description'
          placeholder='Description'
          onChange={handleChange}
          value={product.description}
        />
        <Form.Field
          control={Button}
          //  disabled={disabled || loading}
          color='blue'
          icon='pencil alternate'
          content='Submit'
          type='submit'
        />

      </Form>
    </Header>
  </>)
}

export default CreateProduct;
