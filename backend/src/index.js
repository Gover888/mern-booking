"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const auth_1 = __importDefault(require("./routes/auth"));
const users_1 = __importDefault(require("./routes/users"));
// import cookieParser from "cookie-parser";
mongoose_1.default.connect(process.env.MONGODB_CONNECTION)
    .then(() => console.log("connect to database", process.env.MONGODB_CONNECTION));
mongoose_1.default.connection.on("disconnected", () => {
    console.log("mongoDB disconnectedXXX");
});
mongoose_1.default.connection.on("connected", () => {
    console.log("mongoDB connected!!!!");
});
const app = (0, express_1.default)();
// app.use(cookieParser());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true,
}));
// app.get("/api/test", async (req: Request, res: Response) => {
//      res.json({message: "hello from express endpoint!"});
// });
app.use("/api/auth", auth_1.default);
app.use("/api/users", users_1.default);
app.listen(7000, () => {
    console.log("server is running on 7000 !");
});
