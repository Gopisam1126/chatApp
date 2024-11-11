import express from "express";
import pkg from "pg";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";
import bcrypt, { hash } from "bcrypt";

const app = express();
const port = 3000;
const { Pool } = pkg;

dotenv.config();

const pg = new Pool({
    host: "localhost",
    port: process.env.DB_PORT,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE,
});

pg.connect();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", async (req, res) => {
    const email = req.body.usermail;
    console.log("email: ", email);
    
    const username = req.body.username;
    console.log("username", username);
    
    const pass = req.body.pass;
    console.log("pass: ", pass);

    try {
        const check = await pg.query("SELECT * FROM users WHERE email = $1", [email]);
        if (check.rows > 0) {
            res.redirect("/login");
        } else {
            bcrypt.hash(pass, 20, async (err, hash) => {
                if (err) {
                    console.log("Error Hasing Passowrd");
                } else {
                    const insertQ = await pg.query("INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *", [
                        username,
                        hash,
                        email
                    ]);
                    const user = insertQ.rows[0];
                    req.login(user, (err) => {
                        console.log("success");
                    });
                }
            })
        }
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})