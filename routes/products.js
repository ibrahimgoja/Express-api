import express from "express"

const router = express.Router();

let products =[
{ id: 1, name: "Laptop", price: 1200 },
{ id: 2, name: "Phone", price: 800 }
];

router.get("/", (req,res) => {
res.json(products)
});

router.get("/:id", (req,res) => {
const product = products.find((product) => product.id == req.params.id);
product ? res.json(product) : product.json("Product not found");
});


router.post("/", (req,res) => {
products.push(
    {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    }
);
    res.json(products);
});

router.put("/:id", (req,res) => {
const productId = req.params.id;
const product = products.find(product => product.id == productId);
if (req.body.name) product.name = req.body.name
if (req.body.price) product.price = req.body.price;
res.json(products);
})

router.delete("/:id", (req,res) => {
const id = req.params.id;
const newProducts = products.filter(product => product.id != id); 
products = newProducts;
res.json(products);
});






export default router