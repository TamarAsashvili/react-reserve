import { Header, Button } from 'semantic-ui-react'

function ProductAttributes({ description }) {
  return <>
    <Header as='h3'>
      About this ProductAttributes
     <p>{description}</p>
      <Button
        icon='trash alternate outline'
        content='Delete Product'
        color='orange'
      />
    </Header>
  </>;
}

export default ProductAttributes;
