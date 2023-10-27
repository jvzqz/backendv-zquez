import express from 'express'
import cartRouter from './router/cartRouter'
import productRouter from './router/productRouter'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'
import __dirname from './utils'

const app = express ()
const mongoURL= 'mongodb+srv://juliavazquez289:<password>@cluster0.zfytfk3.mongodb.net/?retryWrites=true&w=majority'
const mongoDBName= 'ecommerce'


app.engine('handlebars', handlebars.engine());
app.set('views', __dirname+'views');
app.set('view engine', 'handlebars');

app.use(express.static(__dirname+'/public'));

app.use('api/products', productRouter);
app.use ('api/carts', cartRouter);

mongoose.connect(mongoUR, {dbName: mongoDBName})
    .then(() => {
    console.log('DB connected0')
    app.listen (8080, () => console.log ('Listening...'))
   })
   .catch (error => {
    console.error('Error connect')
   });

  