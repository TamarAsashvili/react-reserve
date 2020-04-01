import React from 'react'
import { Divider, Segment, Button } from 'semantic-ui-react';
import calculateCartTotal from '../../utils/calculateCartTotal';

function CartSummary({ products }) {
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
      <Button
        icon='cart'
        disabled={isCartEmpty}
        color='teal'
        floated='right'
        content='checkout' />



    </Segment>
  </>);
}

export default CartSummary;