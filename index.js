const express = require('express');

const app = express();
const port = 4041

let products = [
    {
        id: 1,
        price: 101,
        name: "Fjallraven",
        category:  "electronics",
        description:"vitae nunc sed velit dignissim sodales ut eu sem integer vitae",
    },
    {
        id: 2,
        price: 64,
        name: "dfsdfsn",
        category: "jewelery",
        description:"vitae nunc sed velit dignissim sodales ut eu sem integer vitae",
    },
    {
        id: 3,
        price: 85,
        name: "vaekwolse",
        category: "men's clothing",
        description:"vitae nunc sed velit dignissim sodales ut eu sem integer vitae",
    },

    {
        id: 4,
        price: 39,
        name: "opwportfkl",
        category: "women's clothing",
        description:"vitae nunc sed velit dignissim sodales ut eu sem integer vitae",
    },

    {
        id: 5,
        price: 23,
        name: "ewrvadfen",
        category: "men's clothing",
        description:"vitae nunc sed velit dignissim sodales ut eu sem integer vitae",
    },

]


app.listen(port, () => {
    console.log(`Uno_express listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send(products)
})

app.get('/products/:id', (req, res) => {

    let productId = parseInt(req.params.id)
    console.log(productId)

    let matchedProduct = products.find(product => product.id === productId)
    console.log(matchedProduct)

    res.send(matchedProduct)
})

app.get('/products/:categoryName', (req, res) => {

    let categoryName = req.params.categoryName
    console.log(categoryName);


    let matchedProducts = products.filter(product => product.category === categoryName);
    console.log(matchedProducts);

    res.send(matchedProducts)

})

app.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id)
    console.log(productId)

    const body = req.body

    let matchedProductIndex = products.findIndex(product => product.id === productId)
    console.log(matchedProductIndex)

    if (matchedProductIndex !== -1) {
        const matchedProduct = products[matchedProductIndex]
        console.log(matchedProduct)

        const updatedProduct = {
            ...matchedProduct,
            ...body
        }

        products[matchedProductIndex] = updatedProduct

        console.log(products)

        res.send(updatedProduct)
    } else {
        res.status(404).send('Product not found')
    }
})


app.delete('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    console.log(productId);

    const index = products.findIndex((product) => product.id === productId);

    if (index !== -1) {
        products.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});




