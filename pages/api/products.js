//import products from '../../static/products.json';
import Product from '../../models/Product'
import conectDb from '../../utils/connectDb';

conectDb();

export default async (req, res) => {
    const products = await Product.find()
    res.status(200).json(products)
    // res.status(200).json(products)

}