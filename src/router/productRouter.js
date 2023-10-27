import { Router } from 'express'
import productModel from '../dao/models/product';

const productRouter = Router ()

productRouter.get('/', async (res,req)=>{
    try {
        const { limit } = req.query;
        let data;
      
        if (!limit) {
            data = await manager.getProducts();
        } else {
            data = await manager.getProducts().slice(0, limit);
        }
        res.json(data);
        } catch (error) {
        res.status(500).send(error.message);
        } 
});

productRouter.get('/:pid', async (req,res)=>{
    try {
        const productId = req.params.pid;
        const productos = await manager.productModel();
        const productoFilter = productos.filter(
          (product) => product.id == productId
        );
        
        if (productoFilter.length) {
          res.send(productoFilter);
        } else {    
          res.send({error: "Producto no encontrado"});
        }
      } catch (error) {
        res.status(500).send(error.message);
      }   
})

productRouter.post('/', async (req, res)=> {
    
})

productRouter.put('/:pid', (req,res)=>{
    const { pid } = req.params;
    const updatedData = req.body;
    productModel.updateProduct(parseInt(pid), updatedData);
    res.json({ message: 'Producto actualizado con éxito' });  
});
  
productRouter.delete('/:pid', (req,res)=>{
    const { pid } = req.params;
    productModel.deleteProduct(parseInt(pid));
    res.json({ message: 'Producto eliminado con éxito' });
});

export default productRouter

