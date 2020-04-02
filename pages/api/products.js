//import products from '../../static/products.json';
import Product from '../../models/Product'
import conectDb from '../../utils/connectDb';

conectDb();


export default async (req, res) => {
    const { page, size } = req.query;
    //convert query string value to numbers
    const pageNum = Number(page)
    const pageSize = Number(size)
    let products = [];
    const totalDocs = await Product.countDocuments()
    const totalPages = Math.ceil(totalDocs / pageSize)
    if (pageNum === 1) {
        products = await Product.find().limit(pageSize);
    }
    else {
        const skips = pageSize * (pageNum - 1)
        products = await Product.find().skip(skips).limit(pageSize)
    }
    //const products = await Product.find()
    res.status(200).json({ products, totalPages })
}