import { Router } from 'express'
import { Product } from '../models/productModel.js';
import asyncHandler from '../middleware/asyncHandler.js';


const router = Router()

router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id
    const product = await Product.findById(id)

    if (product){
        res.json(product)
    } else {
        res.status(404).json({ message: `product not found`})
    }

}))


export default router