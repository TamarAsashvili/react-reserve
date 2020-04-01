import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import { Divider, Segment, Button } from 'semantic-ui-react';
import calculateCartTotal from '../../utils/calculateCartTotal';

function CartSummary({ products, handleCheckout, success }) {
  const [cartAmount, setCartAmount] = React.useState(0)
  const [stripeAmount, setStripeAmount] = React.useState(0)
  const [isCartEmpty, setCartEmpty] = React.useState(false)



  //it makes diseble button
  React.useEffect(() => {
    const { catrTotal, stripeTotal } = calculateCartTotal(products)
    setCartAmount(catrTotal)
    setStripeAmount(stripeTotal)
    setCartEmpty(products.length === 0)

  }, [products])

  return (<>
    <Divider />
    <Segment clearing size='large'>
      <strong>Sub total: </strong> ${cartAmount}
      <StripeCheckout
        name='React Reserve'
        amount={stripeAmount}
        image={products.length > 0 ? products[0].product.mediaUrl : ''}
        currency='USD'
        shippingAddress={true}
        billingAddress={true}
        zipCode={true}
        stripeKey='pk_test_97O3w7M7tzU4ryrbjPiz0Aoz002Jqpzivy'
        token={handleCheckout}
        triggerEvent='onClick'
      >
        <Button
          icon='cart'
          disabled={isCartEmpty || success}
          color='teal'
          floated='right'
          content='checkout' />
      </StripeCheckout>
    </Segment>
  </>);
}

export default CartSummary;