import express from "express";
import pkg from "pg";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";
import bcrypt from "bcrypt";
import imageType from 'image-type';

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

pg.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.stack);
    } else {
        console.log("Connected to database");
    }
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    res.render("home.jsx");
});

app.get("/chats", async (req, res) => {
    try {
        const chatsRes = await pg.query("SELECT id, username, pro_pic FROM users");

        if (chatsRes.rows.length > 0) {
            const chats = await Promise.all(chatsRes.rows.map((users) => {
                let { id, username, pro_pic } = users;

                if (typeof pro_pic === 'string') {
                    pro_pic = Buffer.from(pro_pic, 'base64');
                }

                const imgType = imageType(pro_pic);
                const mimeType = imgType ? imgType.mime : 'image/jpeg';

                return {
                    id,
                    username,
                    file: pro_pic.toString("base64"),
                    mimeType,
                };
            }));
            res.json(chats);
        } else {
            res.status(404).json({ message: "No chats found" });
        }
    } catch (error) {
        console.error("Error fetching chats:", error);
        res.status(500).json({ error: "An error occurred. Please try again later." });
    }
});

app.post("/login", async (req, res) => {
    const { username, pass: userPass } = req.body;

    try {
        const verRes = await pg.query("SELECT * FROM users WHERE username = $1", [username]);
        if (verRes.rows.length > 0) {
            const user = verRes.rows[0];
            const isMatch = await bcrypt.compare(userPass, user.password);

            if (isMatch) {
                console.log("Login Successful!!!");
                res.status(200).send({ message: "Login successful", redirectUrl: "/" });
            } else {
                res.status(401).send("Incorrect Credentials");
            }
        } else {
            res.status(404).send("User Not Found");
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ error: "An error occurred. Please try again later." });
    }
});

app.post("/register", upload.single('pro_pic'), async (req, res) => {
    console.log("Request send!!!");
    const { username, pass, usermail: email } = req.body;
    const pro_pic = req.file ? req.file.buffer : null;
    console.log(pro_pic);
    

    try {
        const check = await pg.query("SELECT * FROM users WHERE email = $1", [email]);

        if (check.rows.length > 0) {
            res.status(409).send({ message: "User already exists. Please login." });
        } else {
            const hashedPass = await bcrypt.hash(pass, 10);
            const insertQ = await pg.query(
                "INSERT INTO users (username, password, email, pro_pic) VALUES ($1, $2, $3, $4) RETURNING *",
                [username, hashedPass, email, pro_pic]
            );
            console.log("insert Query :",insertQ);
            
            const user = insertQ.rows[0];
            console.log("Registered user:", user);
            res.status(201).send({ message: "User registered successfully", user });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ error: "An error occurred. Please try again later." });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
