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

let login_user = 0

app.get("/", (req, res)=>{
    res.json("hello world")
})

app.use(express.json())
app.use(cors())


// user

app.get("/login", (req, res)=>{
    const q = "SELECT * FROM users"

    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/login", (req, res) => {
    const q = "INSERT INTO users (`user_id`, `user_name`, `user_password`) VALUES (?)"
    console.log("inserting new user")

    const values = [
        req.body.user_id,
        req.body.user_name,
        req.body.user_password,
    ]
    
    login_user = req.body.user_id,

    console.log(values)
    db.query(q, [values], (err, data)=>{
        if(err) return res.json(err)
        return res.json("Inserted into Cart")
    })
})

app.get("/user", (req, res)=>{
    const q = "SELECT * FROM users WHERE user_name = ?"
    console.log(req.query.variable)
    const n = req.query.variable

    db.query(q, n, (err, data)=>{
        if(err) return res.json(err)
        login_user = data[0].user_id
        return res.json(data)
    })
})

app.get("/landingpage", (req, res)=> {
    res.json(login_user)
})

app.post("/logout", (req, res)=> {
    login_user = req.body.data;
})



// products

app.get("/products", (req, res)=>{
    const q = "SELECT * FROM products"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

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


// cart

app.get("/cart", (req, res) => {
    const q = "SELECT order_id, products.id, products.name, products.price, products.img, users.user_id, quantity FROM shoppingcart JOIN products ON shoppingcart.product_id = products.id JOIN users ON shoppingcart.user_id = users.user_id WHERE users.user_id = ?;"
    //const q = "SELECT * FROM cart where `user_id` = ?"
    const userID = login_user

    db.query(q, userID, (err, data)=>{
        if(err) {
            return res.json(err)
        } 
        else {
            return res.json(data)
        }
    })
})

app.post("/cart", (req, res) => {
    //const q = "INSERT INTO cart (`product_id`, `product_name`, `product_price`, `product_img`, `user_id`, `quantity`) VALUES (?)"
    const q = "INSERT INTO shoppingcart (`product_id`, `user_id`, `quantity`) VALUES (?)"
    console.log("inserting into cart")

    const values = [
        req.body.id,
        login_user,
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
    const q = "DELETE FROM shoppingcart WHERE order_id = ?"

    db.query(q, [cartID], (err, data) => {
        if (err) return res.json(err)
        return res.json("Cart Item Deleted")
    })
})

app.put("/cart/:id", (req, res)=>{
    const cartID = req.params.id
    const q = "UPDATE shoppingcart SET `quantity` = ? WHERE order_id = ?";

    const values = [
        req.body.quantity
    ]

    db.query(q, [...values, cartID], (err, data)=>{
        if(err) return res.json(err)
        return res.json("Quantity has been updated")
    })
})



// coupons 
app.get("/coupons", (req, res) => {
    const q = "SELECT * FROM coupons"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})



// listen to server

app.listen(8800, () => {
    console.log("Connected to backend !")
})







/*

app.get("/cart", (req, res) => {
    const q = "SELECT * FROM cart where `user_id` = ?"
    const userID = login_user

    db.query(q, userID, (err, data)=>{
        if(err) {
            return res.json(err)
        } 
        else {
            return res.json(data)
        }
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
        login_user,
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


*/





// ALTER TABLE cart CHANGE COLUMN `user_id` `user_id` INT NOT NULL DEFAULT 555;




/*
app.get("/selected/:id", (req, res)=>{
    const productID = req.params.id
    const q = "SELECT * FROM products WHERE id = ?"

    db.query(q, [productID], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

*/