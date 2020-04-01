function calculateCartTotal(products) {
    const total = products.reduce((acc, el) => {
        acc += el.product.price * el.quantity
        return acc;
    }, 0)

    //it corrects decimal number to multiply correct
    const catrTotal = ((total * 100) / 100).toFixed(2)

    const stripeTotal = Number((total * 100).toFixed(2))

    return { catrTotal, stripeTotal }
}

export default calculateCartTotal;