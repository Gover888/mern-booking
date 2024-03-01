import express,{Response,Request} from "express"
import cors from "cors";
import "dotenv/config"
import mongoose from "mongoose";
import authRoutes from './routes/auth'
import userRoutes from './routes/users'
// import cookieParser from "cookie-parser";

mongoose.connect(process.env.MONGODB_CONNECTION as string)
    .then(()=>
    console.log(
        "connect to database",
        process.env.MONGODB_CONNECTION
    )
    )

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnectedXXX")
})
mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected!!!!")
})
const app = express()
// app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// app.get("/api/test", async (req: Request, res: Response) => {
//      res.json({message: "hello from express endpoint!"});
// });
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)


app.listen(7000,()=>{
    console.log("server is running on 7000 !")
})