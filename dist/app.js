"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const employeesRoutes_1 = __importDefault(require("./routes/employeesRoutes"));
const db_1 = __importDefault(require("./db/db"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT || "3001", 10);
const initializeDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.connect();
        console.log("==== Database Connected Successfully ======");
    }
    catch (err) {
        console.log("DATABASE_URL:", process.env.DATABASE_URL);
        console.error("==== Error while connecting to database ======", err);
        process.exit(1);
    }
});
const configureMiddleware = () => {
    app.use((0, cors_1.default)({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    }));
    app.use(express_1.default.json());
};
const registerRoutes = () => {
    app.get("/", (req, res) => {
        res.send("It works");
    });
    app.get("/api", (req, res) => {
        res.send("API Working");
    });
    app.use("/api/employees", employeesRoutes_1.default);
};
const handleErrors = () => {
    app.use((req, res) => {
        res.status(404).send("Route not found");
    });
};
const startServer = () => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
};
const initializeApp = () => __awaiter(void 0, void 0, void 0, function* () {
    yield initializeDatabase();
    configureMiddleware();
    registerRoutes();
    handleErrors();
    startServer();
});
initializeApp();
exports.default = app;
