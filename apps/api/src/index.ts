<<<<<<< HEAD
// import { Router } from "express";
// import authRoutes from "./auth.routes";
// import usersRoutes from "./user.routes";
// import teachersRoutes from "./teacher.routes";
// import adminRoutes from "./admin";
// import profileRoutes from "./profile.routes";
// import {
//   authMiddleware,
//   extractUserMiddleware,
//   rateLimitMiddleware,
// } from "../middlewares/authMiddlewares";

// const router = Router();

// router.use("/auth", rateLimitMiddleware, authRoutes);
// router.use("/user", rateLimitMiddleware, extractUserMiddleware, usersRoutes);
// router.use(
//   "/teacher",
//   rateLimitMiddleware,
//   extractUserMiddleware,
//   teachersRoutes
// );
// router.use("/admin", rateLimitMiddleware, extractUserMiddleware, adminRoutes);
// router.use("/profile", rateLimitMiddleware, authMiddleware, profileRoutes);

// export default router;


import config from "./config";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import routes from "./routes";
import cookieParser from "cookie-parser";
const app: Express = express();

=======
import config from "./config";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import routes from "./routes";
import cookieParser from "cookie-parser";
const app: Express = express();

>>>>>>> 64143724f09473ede496405c302454dc0d1b45d2
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    // origin: "*",
    origin: [
<<<<<<< HEAD
      "http://localhost:3001",
=======
>>>>>>> 64143724f09473ede496405c302454dc0d1b45d2
      "http://localhost:3000",
      "http://localhost:8080",
      "http://localhost:5172",
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
    ],
    credentials: true,
  })
);

app.use("/api/v1", routes);

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(config.port, () => {
  console.log(`[server]: Server is running at http://localhost:${config.port}`);
});
<<<<<<< HEAD

=======
>>>>>>> 64143724f09473ede496405c302454dc0d1b45d2
