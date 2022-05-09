import express from "express"
import bcrypt from "bcrypt";


const route = express.Router();

route.post('/', (req, res ) => {
    const uEmail = req.body.email;
    const uPass = req.body.password;

    try {
        res.json({
            pass: uPass,
            email: uEmail
        })
    } catch (error) {
        console.log(error)
        res.status(400).send("Error")
    }
})

export default route;
