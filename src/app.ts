import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import employeesRoutes from "./routes/employeesRoutes";
import pool from "./db/db";

dotenv.config();

const app = express();
const port: number = parseInt(process.env.PORT || "3001", 10);

const initializeDatabase = async () => {
  try {
    await pool.connect();
    console.log("==== Database Connected Successfully ======");
  } catch (err) {
    console.log("DATABASE_URL:", process.env.DATABASE_URL);

    console.error("==== Error while connecting to database ======", err);
    process.exit(1);
  }
};

const configureMiddleware = () => {
  app.use(
    cors({
      origin: '*',
      // origin: 'http://localhost:4200',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    })
  );
  app.use(express.json());
};

const registerRoutes = () => {
  app.get("/", (req: Request, res: Response) => {
    res.send("It works");
  });

  app.get("/api", (req: Request, res: Response) => {
    res.send("API Working");
  });

  app.use("/api/employees", employeesRoutes);
};

const handleErrors = () => {
  app.use((req: Request, res: Response) => {
    res.status(404).send("Route not found");
  });
};

const startServer = () => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

const initializeApp = async () => {
  await initializeDatabase();
  configureMiddleware();
  registerRoutes();
  handleErrors();
  startServer();
};

initializeApp();

export default app;