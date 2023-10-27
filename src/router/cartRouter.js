import { Router } from 'express'
import cartModel from '../dao/models/cart';


const cartRouter = Router ()

cartRouter.post('/', (req,res)=>{
    const { cid } = req.params;
    const newCart = cartModel.createCart(parseInt(cid));
    res.json(newCart);  
});

cartRouter.get('/:cid', (req,res)=>{
    const { cid } = req.params;
    const cart = cartModel.getCardbyId(parseInt(cid));
    if (cart) {
       res.json(cart)
    } else {
       res.status(404).json({ error: 'Carrito no encontrado' });
    }   
});

cartRouter.post('/:cid/products/:pid', (req,res)=>{
    const { cid,pid } = req.params;
    const { quantity } = req.body;
    const success = cartModel.addProductToCart(parseInt(cid), parseInt(pid), quantity);
    if (success) {
      res.json({ message: 'Producto agregado al carrito con éxito' });
    } else {
      res.status(404).json({ error: 'Carrito o producto no encontrado' });
    }
});

cartRouter.get('/:cid/products', (req, res) => {
    const { cid } = req.params;
    const products = cartModel.getProductsInCart(parseInt(cid));
    res.json(products);
});

cartRouter.delete('/:cid/product/:pid', (req, res) => {
    const { cid, pid } = req.params;
    const success = CartManager.removeProductFromCart(parseInt(cid), parseInt(pid));
    if (success) {
     res.json({ message: 'Producto eliminado del carrito con éxito' });
    } else {
     res.status(404).json({ error: 'Carrito o producto no encontrado en el carrito' });
    }
});

export default cartRouter