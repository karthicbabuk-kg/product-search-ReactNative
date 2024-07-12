const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/productDB');

const productSchema = new mongoose.Schema({
    productName: String,
    description: String,
    price: Number,
    image: String,
});

const ProductModel = mongoose.model('items', productSchema);

app.get('/fetch-products', async (req, res) => {
    try {
        const response = await axios.get('https://dummyjson.com/products');
        const products = response.data.products;

        for (let product of products) {
            const newProduct = new ProductModel({
                productName: product.title,
                description: product.description,
                price: product.price,
                image: product.thumbnail,
            });
            await newProduct.save();
        }

        res.send('Products fetched and stored successfully!');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
