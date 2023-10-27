import mongoose from "mongoose";

const cartCollection = 'carts'

const cartSchema = new mongoose.Schema ({
        tittle: String,
        description: String,
        price: Number,
        thumbnail: String,
        code: String,
        stock: Number
      })

const cartModel = mongoose.model(cartCollection, cartSchema)

export default cartModel