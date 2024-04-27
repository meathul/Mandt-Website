import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "timonmysql10",
    database: "mandtdb"
})

app.get("/", (req, res)=>{
    res.json("hello world")
})

app.use(express.json())
app.use(cors())

app.get("/products/men", (req, res)=>{
    const q = "SELECT * FROM products WHERE category='men'"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/products/women", (req, res)=>{
    const q = "SELECT * FROM products WHERE category='women'"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/products/unisex", (req, res)=>{
    const q = "SELECT * FROM products WHERE category='unisex'"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/user", (req, res)=>{
    const q = "SELECT * FROM users"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, () => {
    console.log("Connected to backend !")
})

app.get("/selected/:id", (req, res)=>{
    const productID = req.params.id
    const q = "SELECT * FROM products WHERE id = ?"

    db.query(q, [productID], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/cart", (req, res) => {
    const q = "SELECT * FROM cart"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/coupons", (req, res) => {
    const q = "SELECT * FROM coupons"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/cart", (req, res) => {
    const q = "INSERT INTO cart (`product_id`, `product_name`, `product_price`, `product_img`, `user_id`, `quantity`) VALUES (?)"
    console.log("inserting into cart")

    const values = [
        req.body.product_id,
        req.body.product_name,
        req.body.product_price,
        req.body.product_img,
        req.body.user_id,
        req.body.quantity,
    ]

    console.log(values)
    db.query(q, [values], (err, data)=>{
        if(err) return res.json(err)
        return res.json("Inserted into Cart")
    })
})

app.delete("/cart/:id", (req, res) => {
    const cartID = req.params.id
    const q = "DELETE FROM cart WHERE order_id = ?"

    db.query(q, [cartID], (err, data) => {
        if (err) return res.json(err)
        return res.json("Cart Item Deleted")
    })
})


app.put("/cart/:id", (req, res)=>{
    const cartID = req.params.id
    const q = "UPDATE cart SET `quantity` = ? WHERE order_id = ?";

    const values = [
        req.body.quantity
    ]

    db.query(q, [...values, cartID], (err, data)=>{
        if(err) return res.json(err)
        return res.json("Quantity has been updated")
    })
})