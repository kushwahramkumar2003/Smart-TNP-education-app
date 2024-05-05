import config from "./config";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import routes from "./routes";
import cookieParser from "cookie-parser";
const app: Express = express();

// app.use(express.json());
// app.use(cookieParser());
// app.use(express.urlencoded({ extended: true }));
// app.use(
//   cors({
//     // origin: "*",
//     origin: [
//       "http://localhost:3001",
//       "http://localhost:3000",
//       "http://localhost:8080",
//       "http://localhost:5172",
//       "http://localhost:5173",
//       "http://localhost:5174",
//       "http://localhost:5175",
//     ],
//     credentials: true,
//   })
// );

// app.use("/api/v1", routes);

// app.get("/", async (req: Request, res: Response) => {
//   res.send("Hello World");
// });

// app.listen(config.port, () => {
//   console.log(`[server]: Server is running at http://localhost:${config.port}`);
// });




// const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
// const app = express();

// app.use(express.json());

app.post('/signup', async (req, res) => {
  try {
    console.log('Received sign-up data:', req.body);
    const { 
      username, 
      email, 
      password,
      enrollmentId, 
      batch, 
      department, 
      semester, 
      section, 
      bio, 
      location, 
      website, 
      linkedin, 
      github 
    } = req.body;
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password,
        enrollmentId, 
        batch, 
        department, 
        semester, 
        section, 
        bio, 
        location, 
        website, 
        linkedin, 
        github 
      },
    });
    res.status(201).json({ message: 'User signed up successfully', user: newUser });
  } catch (error) {
    console.error('Error signing up user:', error);
    res.status(500).json({ error: 'An error occurred while signing up user' });
  }
});

app.listen(3004, () => {
  console.log('Server is running on http://localhost:3004');
});
